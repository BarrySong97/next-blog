import { PhotoDTO } from "@/blogapi";
import Sheet from "../components/Sheet";
import "./styles.css";
import axios from "axios";
import { proxy } from "@/blogapi/core/OpenAPI";
import Image from "next/image";
import { Metadata } from "next";
import ImageViewer from "../components/ImageView";
import ImageMotion from "../components/ImageMotion";
import ImageGrid from "./components/ImageGrid";
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
        <ImageGrid data={data} />
      </main>
    </Sheet>
  );
}
