"use client";
import "./styles.css";
import { Image } from "@douyinfe/semi-ui";
import Sheet from "../components/Sheet";
export default function Home() {
  const imgs = [
    {
      src: "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1673757121315-e7f427f1d378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1687428959667-369ef891658a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1685821935645-92a918ca51b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1685648043756-124a4adad0ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
  ];
  return (
    <Sheet>
      <main className="p-1 photos">
        <h2 className="text-2xl font-bold mb-1">照片</h2>
        <p className="text-stone-400 text-xs mb-3">记录，过去的痕迹，瞬间。</p>
        <section className="grid grid-cols-4 gap-2 ">
          {imgs.map((img, index) => {
            return (
              <div key={index} className="mb-3  h-[250px] ">
                <Image
                  className={"object-cover rounded-md w-full h-full  "}
                  src={img.src}
                />
              </div>
            );
          })}
        </section>
      </main>
    </Sheet>
  );
}
