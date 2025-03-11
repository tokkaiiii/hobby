"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ImageUpload } from "@/components/image-upload";
import { useState } from "react";
import { createPost } from "@/api/post";
import { getImageUrl, uploadImage } from "@/api/storage";
const formSchema = z.object({
    title: z.string().min(2, "제목을 입력해주세요"),
    description: z.string().min(10, "상품 설명을 10자 이상 입력해주세요"),
    price: z.string().min(1, "가격을 입력해주세요"),
    category: z.string().min(1, "카테고리를 선택해주세요"),
    condition: z.string().min(1, "상품 상태를 선택해주세요"),
});

export function PostForm() {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [isUploading, setIsUploading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            price: "",
            category: "",
            condition: "",
        },
    });

    async function uploadImages(files: File[]): Promise<string[]> {
        const uploadedUrls: string[] = [];

        for (const file of files) {
            const fileExt = file.name.split('.').pop();
            const fileName = `${crypto.randomUUID()}.${fileExt}`;
            const filePath = `clothing/${fileName}`;

            const uploadResult = await uploadImage(filePath, file);

            if (uploadResult === null) {
                throw new Error("이미지 업로드 실패");
            }

            const publicUrl = getImageUrl(filePath);

            uploadedUrls.push(publicUrl);
        }

        return uploadedUrls;
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setIsUploading(true);

            // 1. Upload images first
            const imageUrls = await uploadImages(selectedFiles);

            // 2. Create the post with image URLs
            // TODO: Implement your post creation logic here
            console.log({
                ...values,
                images: imageUrls
            });
            await createPost({
                ...values,
                thumbnail: imageUrls[0] ?? null,
                id: 0,
                subtitle: values.description.slice(0, 100),
                created_at: null,
                updated_at: null,
            });

            // 3. Reset form on success
            form.reset();
            setSelectedFiles([]);

        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsUploading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-4">
                    <FormLabel>상품 이미지</FormLabel>
                    <ImageUpload
                        onChange={setSelectedFiles}
                        maxFiles={5}
                        isUploading={isUploading}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>제목</FormLabel>
                            <FormControl>
                                <Input placeholder="상품 제목을 입력해주세요" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>상품 설명</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="상품에 대한 자세한 설명을 입력해주세요"
                                    className="resize-none"
                                    rows={5}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>카테고리</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="카테고리 선택" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="outer">아우터</SelectItem>
                                    <SelectItem value="top">상의</SelectItem>
                                    <SelectItem value="bottom">하의</SelectItem>
                                    <SelectItem value="dress">원피스</SelectItem>
                                    <SelectItem value="shoes">신발</SelectItem>
                                    <SelectItem value="accessories">액세서리</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="condition"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>상품 상태</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="상품 상태 선택" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="new">새상품</SelectItem>
                                    <SelectItem value="used">중고</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>가격</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="가격을 입력해주세요"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-end">
                    <Button type="submit" size="lg" disabled={isUploading}>
                        {isUploading ? "업로드 중..." : "등록하기"}
                    </Button>
                </div>
            </form>
        </Form>
    );
} 