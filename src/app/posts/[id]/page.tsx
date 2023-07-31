"use client";
import Sheet from "@/app/components/Sheet";
import { PostDTO } from "@/blogapi";
import { proxy } from "@/blogapi/core/OpenAPI";
import { useRequest } from "ahooks";
import { Suspense, useEffect, useState } from "react";
import "./markdown.css";
import { unified } from "unified";
import ReactMarkdown from "react-markdown";
import { toString as hastToString } from "hast-util-to-string";
import { toHast } from "mdast-util-to-hast";
import { CodeBlock } from "@/app/components/CodeBlock";
import remarkToc from "remark-toc";
import markdown from "remark-parse";
import { MdastNodes } from "mdast-util-to-hast/lib/state";
const PostDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [toc, setToc] = useState<
    { title: string; depth: number }[] | undefined
  >([]);
  const { data } = useRequest<PostDTO, any>(
    () =>
      fetch(`${proxy}/posts/${id}`)
        .then((res) => res.json())
        .catch((err) => {
          console.log(err);
        }),
    {
      onSuccess: (data) => {
        if (data) {
          const markdownContent = data.content;
          const processor = unified().use(markdown);

          // Add the toc plugin to the processor to generate a table of contents
          processor.use(remarkToc, {
            heading: "Table of Contents",
            tight: true,
            maxDepth: 3,
          });

          // Parse the markdown and generate a table of contents
          const tree = processor.parse(markdownContent);

          const tocNode = tree.children.filter(
            (node) => node.type === "heading"
          );

          const tocItems = tocNode.map((item) => {
            const tohast = toHast(item as unknown as MdastNodes);
            const title = hastToString(tohast as any);
            return { title, depth: item.depth };
          });
          console.log(tocItems);

          setToc(tocItems);
        }
      },
    }
  );
  return (
    <Sheet>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex justify-center">
          <img
            src={data?.cover}
            alt="Picture of the author"
            className="object-cover  mb-8 rounded-md w-full"
          />
        </div>
          <ul className="fixed top-[80px] left-[160px] ">
            {toc?.map((item) => {
              const leading = `ml-${(item.depth - 2) * 4}`;
              console.log(leading);
              return (
                <li key={item.title} className={`${leading} `}>
                  {item.title}
                </li>
              );
            })}
          </ul>
        <div>
          <article className="wmde-markdown ">
            <h1>{data?.title}</h1>
            <ReactMarkdown
              remarkPlugins={[[remarkToc]]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <CodeBlock
                      key={Math.random()}
                      language={match[1]}
                      value={String(children).replace(/\n$/, "")}
                      lightMode={"dark"}
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {data?.content}
            </ReactMarkdown>
          </article>
        </div>
      </Suspense>
    </Sheet>
  );
};

export default PostDetail;
