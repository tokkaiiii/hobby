import Image from "next/image";
import PagePadding from "@/components/PagePadding";
import Category from "@/components/Category";

export default async function Home() {
  return (
    <PagePadding>
      <div>
        <div className="mt-9"></div>
        <Category/>
        <div></div>
      </div>
    </PagePadding>
  );
}
