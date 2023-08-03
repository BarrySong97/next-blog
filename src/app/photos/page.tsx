"use client";
import "./styles.css";
import { Image } from "@douyinfe/semi-ui";
import Sheet from "../components/Sheet";
import { PhotoDTO } from "@/blogapi";
import { proxy } from "@/blogapi/core/OpenAPI";
import { useRequest } from "ahooks";
export default function Home() {
  const { data } = useRequest<PhotoDTO[], any>(() =>
    fetch(`/api/photos`).then((res) => res.json())
  );
  return (
    <Sheet>
      <main className="p-1 photos">
        <h2 className="text-2xl font-bold mb-1">照片</h2>
        <p className="text-stone-400 text-xs mb-3">记录，过去的痕迹，瞬间。</p>
        <section className="grid grid-cols-4 gap-2 ">
          {data?.map((img) => {
            return (
              <div key={img.id} className="mb-3  h-[250px] ">
                <Image
                  className={"object-cover rounded-md w-full h-full  "}
                  src={img.url}
                />
              </div>
            );
          })}
        </section>
      </main>
    </Sheet>
  );
}
