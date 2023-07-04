"use client";
import { Image } from "@douyinfe/semi-ui";
import Sheet from "./components/Sheet";
import styles from "./page.module.scss";
import { PostItem, PostItemProps } from "./posts/page";

export default function Home() {
  const imgs = [
    {
      src: "https://pic.imgdb.cn/item/64a38a281ddac507cc5ec2d8.jpg",
    },
    // {
    //   src: "https://pic.imgdb.cn/item/64a38a1f1ddac507cc5eb255.jpg",
    // },
    // {
    //   src: "https://pic.imgdb.cn/item/64a38a281ddac507cc5ec1e6.jpg",
    // },
    {
      src: "https://pic.imgdb.cn/item/64a38a281ddac507cc5ec22c.jpg",
    },
    {
      src: "https://pic.imgdb.cn/item/64a38a281ddac507cc5ec26f.jpg",
    },
    {
      src: "https://pic.imgdb.cn/item/64a38a1f1ddac507cc5eb21d.jpg",
    },
    {
      src: "https://pic.imgdb.cn/item/64a38a271ddac507cc5ec193.jpg",
    },
    {
      src: "https://pic.imgdb.cn/item/64a38a1f1ddac507cc5eb318.jpg",
    },
  ];
  const PostList: PostItemProps[] = [
    {
      title: "不论多少公里，多少风雨太阳照常升起",
      cover: imgs[0].src,
      date: "2021/03/04",
      description: "吃啥表是灰色的金黄色的",
    },
    {
      title: "人生第一次骑单车",
      cover: imgs[1].src,
      date: "2021/03/04",
      description: "吃啥表是灰色的金黄色的",
    },
    {
      title: "大学划龙舟的时光难过但是带给我一些东西",
      cover: imgs[2].src,
      date: "2021/03/04",
      description: "吃啥表是灰色的金黄色的",
    },
  ];
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
          {PostList.map((post, idx) => {
            const first = idx === 0;
            return (
              <PostItem
                style={
                  {
                    // gridColumn: first ? "1/3" : "auto",
                  }
                }
                key={post.title}
                {...post}
              ></PostItem>
            );
          })}
        </div>
      </section>
      <section className={`mt-6 `}>
        <h2 className="font-bold text-lg mb-2">最近照片</h2>
        <div className={styles.gallery}>
          {imgs.map((img, idx) => {
            const imgClassName = gallery[idx];
            return (
              <Image
                key={img.src}
                className={`w-full h-full rounded-md  object-cover ${imgClassName}`}
                src={img.src}
              />
            );
          })}
        </div>
      </section>
    </Sheet>
  );
}
