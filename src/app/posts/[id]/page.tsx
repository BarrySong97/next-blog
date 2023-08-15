import Sheet from "@/app/components/Sheet";
import { PostDTO } from "@/blogapi";
import { Suspense } from "react";
import "./markdown.css";
import axios from "axios";
import Image from "next/image";
import { proxy } from "@/blogapi/core/OpenAPI";
import styles from "./index.module.scss";
import PostLoading from "../../loading";
import { Metadata, ResolvingMetadata } from "next";
import "highlight.js/styles/atom-one-dark.css";
import htmlParser from "html-react-parser";
import { CodeBlock } from "@/app/components/CodeBlock";
import PageActions from "./components/PageActions";
import ImageViewer from "@/app/components/ImageView";
import ScrollProgressBar from "./components/ScrollProgressBar";
import dayjs from "dayjs";
import { Badge } from "@/app/components/ui/badge";
import SideActions from "./components/SideActions";
export const revalidate = 1000;
export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const post: PostDTO = await axios
    .get(`${proxy}/posts/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
  // optionally access and extend (rather than replace) parent metadata

  return {
    title: `${post.title} - Barry Song's Blog`,
    twitter: {
      title: `${post.title} - Barry Song's Blog`,
      creator: "@barrysong97",
      images: post.cover,
    },
    openGraph: {
      title: `${post.title} - Barry Song's Blog`,
      images: [
        {
          url: post.cover,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
  };
}
export const PostDetail = async ({
  params,
  searchParams,
}: {
  searchParams: { came: string };
  params: { id: string };
}) => {
  const { id } = params;
  const { came } = searchParams;
  const data: PostDTO | undefined = await axios
    .get(`${proxy}/posts/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

  const toc = JSON.parse(
    data?.toc ??
      JSON.stringify([
        {
          content: "top",
          anchor: "top",
        },
      ])
  );

  const htmlString = data?.html;
  const htmlReactElement = htmlParser(htmlString ?? "", {
    replace: (domNode) => {
      if (domNode.name === "pre") {
        const code = domNode.children[0].children[0].data;

        const className = domNode.children[0].attribs.class;
        const language = className?.replace("language-", "") ?? "";
        return <CodeBlock lightMode="dark" language={language} value={code} />;
      }
      if (domNode.name === "img") {
        // const code = domNode.src;

        return (
          <ImageViewer
            src={domNode.attribs.src}
            className="object-cover w-full  mb-8 rounded-md  cursor-pointer"
          />
        );
      }
    },
  });

  // const article = { __html: $.html() ?? "" };
  return (
    <div className=" w-full rounded-md px-3 pb-4 sm:p-4 sm:px-6 sm:pt-0">
      <Suspense fallback={<PostLoading />}>
        <Sheet className="lg:max-w-3xl xl:max-w-3xl 2xl:max-w-5xl flex">
          <ScrollProgressBar />
          <div className="md:block hidden fixed ml-[-4rem] ">
            <SideActions post={data} />
          </div>
          <div>
            <div className="md:flex justify-center">
              <ImageViewer
                src={data?.cover ?? ""}
                height={500}
                className="object-cover  mb-4 md:mb-4 rounded-md w-full md:h-[400px]  cursor-pointer"
              />
            </div>
            <h1 className="mb-2 font-bold text-3xl">{data?.title}</h1>
            <div className="flex flex-col md:flex-row md:items-center mb-2  gap-2">
              <div className="text-stone-500  ">
                <span>创建时间: </span>
                {dayjs(data?.createdAt).format("YYYY-MM-DD HH:mm")}
              </div>
              <div className="text-stone-500 ">
                <span>更新时间: </span>
                {dayjs(data?.updatedAt).format("YYYY-MM-DD HH:mm")}
              </div>
            </div>
            <div className="md:mb-4 mb-2 flex gap-2 items-center">
              <Badge>{data?.category.name}</Badge>
              <span>{data?.readingTime}分钟阅读</span>
            </div>
            <article className="wmde-markdown ">
              <div>
                <>{htmlReactElement}</>
              </div>
            </article>
          </div>
          <div className="md:ml-4 lg:ml-8 md:block hidden">
            <div className="fixed  truncate h-full ">
              <div
                className="flex flex-col justify-between "
                style={{ height: "calc(100vh - 100px)" }}
              >
                <ul>
                  {toc?.map((item) => {
                    return (
                      <li
                        key={item.anchor}
                        className="truncate hover:text-stone-900"
                        style={{
                          marginLeft: `${(item.level - 1) * 10}px`,
                        }}
                      >
                        <a
                          style={{
                            borderBottom: "1px dashed rgba(125,125,125,.3)",
                          }}
                          className={`text-stone-700   text-sm cursor-pointer ${styles.tocItem} toc-item`}
                          href={`#${item.anchor.toLowerCase()}`}
                        >
                          {item.content}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <PageActions backPath={came} />
              </div>
            </div>
          </div>
        </Sheet>
      </Suspense>
    </div>
  );
};

export default PostDetail;
