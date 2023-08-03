"use client";
import { Image } from "@douyinfe/semi-ui";
import Sheet from "./components/Sheet";
import styles from "./page.module.scss";
import { PostItem, PostItemProps } from "./posts/page";
import { proxy } from "@/blogapi/core/OpenAPI";
import { useRequest } from "ahooks";
import { PhotoDTO, PostDTO } from "@/blogapi";

export default function Home() {
  const { data: imgs } = useRequest<PhotoDTO[], any>(() =>
    fetch(`/api/photos?recent=true`).then((res) => res.json())
  );
  const { data: PostList } = useRequest<PostDTO[], any>(() =>
    fetch(`/api/posts?recent=true`).then((res) => res.json())
  );
  const gallery = [
    "col-[span_2_] row-[span_2_]",
    "col-[span_2_] row-[span_1_]",
    "col-[span_2_] row-[span_3_]",
    "col-[span_2_] row-[span_2_]",
    "col-[span_1_] row-[span_1_]",
  ];
  return (
    <Sheet>
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
        <h2 className="font-bold text-lg mb-2">最近文章</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 lg:gap-8">
          {PostList?.map((post, idx) => {
            return (
              <PostItem
                key={post.id}
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
        <h2 className="font-bold text-lg mb-2">最近照片</h2>
        <div className={styles.gallery}>
          {imgs?.reverse().map((img, idx) => {
            const imgClassName = gallery[idx];
            return (
              <Image
                key={img.id}
                className={`w-full h-full rounded-md  object-cover ${imgClassName}`}
                src={img.url}
              />
            );
          })}
        </div>
      </section>
    </Sheet>
  );
}
