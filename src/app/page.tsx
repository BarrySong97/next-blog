import Sheet from "./components/Sheet";
import styles from "./page.module.scss";
import { proxy } from "@/blogapi/core/OpenAPI";
import { PhotoDTO, PostDTO, SettingDto } from "@/blogapi";
import axios from "axios";
import { Metadata } from "next";
import { Suspense } from "react";
import PostItem from "./posts/components/PostItem";
import ImageViewer from "./components/ImageView";
import ImageLayout from "./components/ImageLayout";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Barry Song's Blog",
  description: "Barry Song的个人博客, 分享我的生活和code",
  twitter: {
    card: "summary_large_image",
    site: "@BarrySong97",
    creator: "@BarrySong97",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1635250588224204801/f0qNO2x-_400x400.jpg",
      },
    ],
  },
};

export const revalidate = 1000;
export default async function Home() {
  const imgs: PhotoDTO[] = await axios
    .get(`${proxy}/photos/recent`)
    .then((res) => res.data);
  const postList: PostDTO[] = await axios
    .get(`${proxy}/posts/recent`)
    .then((res) => res.data);

  const settings: SettingDto = await axios
    .get(`${proxy}/settings`)
    .then((res) => res.data);
  return (
    <Sheet className="lg:max-w-3xl xl:max-w-3xl 2xl:max-w-6xl ">
      <main className="prose">
        <p>
          欢迎来到我的
          <strong>个人网站</strong>
        </p>
        <p>
          我是<strong>Barry Song</strong>，一名全栈工程师(本职工作是前端)
        </p>
        <p>
          这里是我的互联网
          <strong>精神领域</strong>, 我在这里分享的我生活中
          <strong>所想</strong>，<strong>所做</strong>
          的一切。
        </p>
      </main>
      <section className="mt-6">
        <div className="mb-2 flex justify-between items-end ">
          <h2 className="font-bold text-lg ">最近文章</h2>
          <Link
            href="/posts"
            className="text-stone-600 text-sm border-b-slate-400 border-b-[1px] cursor-pointer hover:text-stone-950"
          >
            查看更多
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-2 2xl:grid-cols-3 2xl:gap-6">
          {postList?.map((post, idx) => {
            return (
              <PostItem
                key={post.id}
                came={"home"}
                date={post.createdAt}
                id={post.id}
                title={post.title}
                cover={post.cover}
              ></PostItem>
            );
          })}
        </div>
      </section>
      <section className={`mt-6 `}>
        <div className="mb-2 flex justify-between items-end">
          <h2 className="font-bold text-lg ">最近照片</h2>
          <Link
            href="/photos"
            className="text-stone-600 text-sm border-b-slate-400 border-b-[1px] cursor-pointer hover:text-stone-950"
          >
            查看更多
          </Link>
        </div>
        <ImageLayout
          layout={JSON.parse(settings?.photoLayout ?? "[]") ?? []}
          images={imgs}
        ></ImageLayout>
      </section>
    </Sheet>
  );
}
