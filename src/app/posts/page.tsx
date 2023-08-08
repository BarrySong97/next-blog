import classNames from "classnames";
import Sheet from "../components/Sheet";
import styles from "./index.module.scss";
import { PostDTO } from "@/blogapi";
import dayjs from "dayjs";
import Link from "next/link";
import axios from "axios";
import { proxy } from "@/blogapi/core/OpenAPI";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "文章列表 - Barry Song's Blog",
  description: "Barry Song的博客文章列表",
};
export const revalidate = 3600;
export type PostItemProps = {
  title: string;
  date: string;
  cover: string;
  className?: string;
  style?: React.CSSProperties;
  id: string;
};
export function PostItem({
  title,
  className = "",
  style,
  date,
  cover,
  id,
}: PostItemProps) {
  const _className = classNames(
    className,
    styles.articleItem,
    "cursor-pointer"
  );
  const _date = dayjs(date).format("YYYY/MM/DD");
  return (
    <Link className={_className} style={style} href={`/posts/${id}`}>
      <Image
        height={250}
        width={250}
        src={cover ?? ""}
        className="rounded-lg aspect-[240/135] w-full object-cover"
        alt={title}
      />
      <div className={styles.articleInfo}>
        <div className="relative px-4 py-1  text-white rounded-b-lg">
          <h3 className="font-bold text-sm">{title}</h3>
          <span className="text-sm">{_date}</span>
        </div>
      </div>
    </Link>
  );
}

export default async function Posts() {
  const data: PostDTO[] = await axios
    .get(`${proxy}/posts`)
    .then((res) => res.data);

  return (
    <Sheet>
      <main className={`${styles.articleList} mb-4 p-1`}>
        <h2 className="text-2xl font-bold mb-1">文章列表</h2>
        <p className="text-stone-400 mb-4 text-xs">
          分享我的看法，记录我的思想
        </p>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 lg:gap-8">
          {data.map((post) => {
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
        </ul>
      </main>
    </Sheet>
  );
}
