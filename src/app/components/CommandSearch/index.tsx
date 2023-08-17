"use client";

import * as React from "react";
import { CalendarIcon, FaceIcon, RocketIcon } from "@radix-ui/react-icons";
import { useDebounceFn, useRequest } from "ahooks";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/app/components/ui/command";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { proxy } from "@/blogapi/core/OpenAPI";
import { PostDTO } from "@/blogapi";

const HighlightText = ({
  text,
  keyword,
}: {
  text: string;
  keyword: string;
}) => {
  if (!keyword) return null;
  if (!text) return null;
  const index = text.indexOf(keyword);
  const excerpt = text.substr(Math.max(0, index - 20), 40);
  const result = excerpt.replace(/[*_\[\]{}()#+\-%!>`]/g, "");
  // 分割文本
  const parts = result.split(keyword);

  return (
    <span>
      {parts.map((part, index) => (
        <span className="text-xs text-stone-500" key={index}>
          {part}
          {index !== parts.length - 1 && (
            <span style={{ color: "red" }}>{keyword}</span>
          )}
        </span>
      ))}
    </span>
  );
};
export default function CommandSearch() {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const {
    data: postList,
    run,
    loading,
  } = useRequest<PostDTO[], any>(
    (search: string) =>
      search
        ? axios.get(`${proxy}/posts?search=${search}`).then((res) => res.data)
        : Promise.resolve([]),
    {
      manual: true,
    }
  );
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  const router = useRouter();

  const { run: searchContent } = useDebounceFn(
    (value: string) => {
      run(encodeURIComponent(value));
    },
    {
      wait: 500,
    }
  );
  const renderList = () => {
    if (!postList?.length) {
      return <div className="text-center py-4 text-stone-500 text-sm">没有找到匹配内容</div>;
    }
    return (
      <CommandGroup>
        {postList?.map((post) => {
          return (
            <CommandItem
              key={post.id}
              onSelect={() => {
                router.push(`/posts/${post.id}`, { scroll: false });
                setOpen(false);
              }}
            >
              <Link
                href={`/posts/${post.id}`}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <h4 className="text-stone-800 text-sm font-bold">
                  {post.title}
                </h4>
                <div>
                  <HighlightText keyword={search} text={post?.content ?? ""} />
                </div>
              </Link>
            </CommandItem>
          );
        })}
      </CommandGroup>
    );
  };
  return (
    <>
      <Button
        variant={"outline"}
        className="hidden md:inline-flex"
        onClick={() => {
          setOpen(true);
        }}
      >
        <span>搜索文章 </span>
        <div className="w-14 h-1"></div>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          onValueChange={(value) => {
            setSearch(value);
            searchContent(value);
          }}
          placeholder="搜索想要的内容"
        />
        <CommandList>
          {!loading ? (
            renderList()
          ) : (
            <div className="flex items-center justify-center w-full h-10    ">
              <div className="px-3 py-1 text-xs font-medium leading-none text-center text-white bg-primary rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                正在从天启星拉取数据...
              </div>
            </div>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
