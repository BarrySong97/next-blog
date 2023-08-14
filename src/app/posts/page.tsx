import Sheet from "../components/Sheet";
import styles from "./index.module.scss";
import { PostDTO } from "@/blogapi";
import axios from "axios";
import { proxy } from "@/blogapi/core/OpenAPI";
import { Metadata } from "next";
import PostItem from "./components/PostItem";
export const metadata: Metadata = {
  title: "文章列表 - Barry Song's Blog",
  description: "Barry Song的博客文章列表",
};
export const revalidate = 1000;

export default async function Posts() {
  const data: PostDTO[] = await axios
    .get(`${proxy}/posts`)
    .then((res) => res.data);

  return (
    <Sheet className="lg:max-w-3xl xl:max-w-3xl 2xl:max-w-6xl ">
      <main className={`${styles.articleList} mb-4 p-1`}>
        <h2 className="text-2xl font-bold mb-1">文章列表</h2>
        <p className="text-stone-400 mb-4 text-xs">
          分享我的看法，记录我的思想
        </p>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2  2xl:grid-cols-3 lg:gap-8">
          {data.map((post) => {
            return (
              <PostItem
                key={post.id}
                came={'posts'}
                date={post.createdAt}
                id={post.id}
                title={post.title}
                cover={post.cover}
              ></PostItem>
            );
          })}
        </ul>
      </main>
    </Sheet>
  );
}
