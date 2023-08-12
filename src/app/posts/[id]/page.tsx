import Sheet from "@/app/components/Sheet";
import { PostDTO } from "@/blogapi";
import { Suspense } from "react";
import "./markdown.css";
import axios from "axios";
import Image from "next/image";
import { proxy } from "@/blogapi/core/OpenAPI";
import styles from "./index.module.scss";
import Error from "./errot";
import { Metadata, ResolvingMetadata } from "next";
import "highlight.js/styles/atom-one-dark.css";
import htmlParser from "html-react-parser";
import { CodeBlock } from "@/app/components/CodeBlock";
import PageActions from "./components/PageActions";
import ImageViewer from "@/app/components/ImageView";
import ScrollProgressBar from "./components/ScrollProgressBar";
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
    <Sheet>
      <Suspense fallback={<Error />}>
        <ScrollProgressBar />
        <div className="flex justify-center">
          <ImageViewer
            src={data?.cover ?? ""}
            height={500}
            className="object-cover  mb-8 rounded-md w-full h-[500px] cursor-pointer"
          />
        </div>
        <div className="fixed top-[80px] left-[160px] md:max-w-[240px] md:flex flex-col justify-between bottom-[80px]   hidden">
          <ul>
            {toc?.map((item) => {
              return (
                <li
                  key={item.anchor}
                  className="truncate"
                  style={{
                    marginLeft: `${(item.level - 1) * 10}px`,
                  }}
                >
                  <a
                    style={{
                      borderBottom: "1px dashed rgba(125,125,125,.3)",
                    }}
                    className={`text-stone-700  text-sm cursor-pointer ${styles.tocItem}} `}
                    href={`#${item.anchor.toLowerCase()}`}
                  >
                    {item.content}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <article className="wmde-markdown ">
            <h1 className="mb-4">{data?.title}</h1>
            <div>
              <>{htmlReactElement}</>
            </div>
          </article>
        </div>
        <PageActions backPath={came} />
      </Suspense>
    </Sheet>
  );
};

export default PostDetail;
