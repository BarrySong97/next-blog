import { PhotoDTO } from "@/blogapi";
import Sheet from "../components/Sheet";
import "./styles.css";
import axios from "axios";
import { proxy } from "@/blogapi/core/OpenAPI";
import Image from "next/image";
import { Metadata } from "next";
import ImageViewer from "../components/ImageView";
export const metadata: Metadata = {
  title: "照片 - Barry Song's Blog",
  description: "Barry Song的照片和摄影作品",
};
export const revalidate = 1000;
export default async function Home() {
  const data: PhotoDTO[] = await axios
    .get(`${proxy}/photos`)
    .then((res) => res.data);

  return (
    <Sheet className="lg:max-w-3xl xl:max-w-3xl 2xl:max-w-6xl ">
      <main className="p-1 photos">
        <h2 className="text-2xl font-bold mb-1">照片</h2>
        <p className="text-stone-400 text-xs mb-3">记录，过去的痕迹，瞬间。</p>
        <section className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2  ">
          {data?.map((img) => {
            return (
              <div key={img.id} className="mb-3 md:h-[200px]  lg:h-[250px] ">
                <ImageViewer
                  key={img.id}
                  src={img.url ?? ""}
                  className={`object-cover rounded-md w-full h-full cursor-pointer  `}
                />
              </div>
            );
          })}
        </section>
      </main>
    </Sheet>
  );
}
