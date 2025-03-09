"use client";

import { useCallback, useState, useRef } from "react";
import { TbPhotoPlus } from "react-icons/tb";
import Image from "next/image";

interface ImageUploadProps {
    onChange: (files: File[]) => void;
    maxFiles?: number;
    isUploading?: boolean;
}

interface PreviewImage {
    id: string;
    url: string;
    file: File;
}

export function ImageUpload({
    onChange,
    maxFiles = 3,
    isUploading = false
}: ImageUploadProps) {
    const [previews, setPreviews] = useState<PreviewImage[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onFileSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const files = event.target.files;
            if (!files || files.length === 0) return;

            // Create preview URLs for selected files
            const newPreviews = Array.from(files).map(file => ({
                id: crypto.randomUUID(),
                url: URL.createObjectURL(file),
                file: file
            }));

            // Update previews
            setPreviews(prev => {
                const updated = [...prev, ...newPreviews];
                // If we have more than maxFiles, remove the excess
                if (updated.length > maxFiles) {
                    // Cleanup unused preview URLs
                    updated.slice(maxFiles).forEach(p => URL.revokeObjectURL(p.url));
                    return updated.slice(0, maxFiles);
                }
                return updated;
            });

            // Update parent with new files
            onChange(newPreviews.map(p => p.file));

            // Reset input value to allow selecting the same file again
            if (event.target) {
                event.target.value = '';
            }
        } catch (error) {
            console.error('Error handling files:', error);
        }
    }, [maxFiles, onChange]);

    const handleRemove = useCallback((previewToRemove: PreviewImage) => {
        setPreviews(prev => {
            const filtered = prev.filter(p => p.id !== previewToRemove.id);
            // Update parent with remaining files
            onChange(filtered.map(p => p.file));
            // Cleanup preview URL
            URL.revokeObjectURL(previewToRemove.url);
            return filtered;
        });
    }, [onChange]);

    // Cleanup preview URLs when component unmounts
    useCallback(() => {
        return () => {
            previews.forEach(preview => URL.revokeObjectURL(preview.url));
        };
    }, [previews]);

    return (
        <div>
            <div className="mb-4 flex flex-wrap gap-4">
                {previews.map((preview) => (
                    <div key={preview.id} className="relative w-[200px] h-[200px]">
                        {isUploading && (
                            <div className="absolute inset-0 bg-black/10 flex items-center justify-center rounded-lg z-10">
                                <div className="text-sm text-white bg-black/50 px-2 py-1 rounded">
                                    업로드 중...
                                </div>
                            </div>
                        )}
                        <div className="absolute top-2 right-2 z-20">
                            <button
                                type="button"
                                onClick={() => handleRemove(preview)}
                                className="bg-red-500 text-white p-1 rounded-full hover:bg-red-600 focus:outline-none"
                                disabled={isUploading}
                            >
                                ✕
                            </button>
                        </div>
                        <Image
                            fill
                            style={{ objectFit: "cover" }}
                            src={preview.url}
                            alt="Preview"
                            className="rounded-lg"
                        />
                    </div>
                ))}
            </div>
            {previews.length < maxFiles && (
                <label className="block w-[200px] h-[200px] relative cursor-pointer">
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple={maxFiles - previews.length > 1}
                        onChange={onFileSelect}
                        className="sr-only"
                        disabled={isUploading}
                    />
                    <div className="w-full h-full border-dashed border-2 border-neutral-300 hover:opacity-70 rounded-lg flex flex-col items-center justify-center">
                        <TbPhotoPlus size={50} />
                        <div className="font-semibold text-lg">
                            {isUploading ? "업로드 중..." : "이미지 선택"}
                        </div>
                    </div>
                </label>
            )}
        </div>
    );
} 