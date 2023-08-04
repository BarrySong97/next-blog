import { PhotoDTO } from "@/blogapi";
import Sheet from "../components/Sheet";
import "./styles.css";
import axios from "axios";
import { proxy } from "@/blogapi/core/OpenAPI";
export default async function Home() {
  const data: PhotoDTO[] = await axios
    .get(`${proxy}/api/photos`)
    .then((res) => res.data);

  return (
    <Sheet>
      <main className="p-1 photos">
        <h2 className="text-2xl font-bold mb-1">照片</h2>
        <p className="text-stone-400 text-xs mb-3">记录，过去的痕迹，瞬间。</p>
        <section className="grid grid-cols-4 gap-2 ">
          {data?.map((img) => {
            return (
              <div key={img.id} className="mb-3  h-[250px] ">
                <img
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
