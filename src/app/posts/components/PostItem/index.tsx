import classNames from "classnames";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import { blurDataUrl } from "@/app/components/ImageView";
export type PostItemProps = {
  title: string;
  date: string;
  cover: string;
  className?: string;
  style?: React.CSSProperties;
  came: "home" | "posts";
  id: string;
};
export default function PostItem({
  title,
  className = "",
  style,
  date,
  cover,
  came,
  id,
}: PostItemProps) {
  const _className = classNames(
    className,
    styles.articleItem,
    "cursor-pointer rounded-lg bg-transparent",
    // "focus-within:bg-glass lg:hover:bg-glass snap-center   transition-[background,transform] duration-300   focus-within:shadow-lg lg:hover:z-10 lg:hover:scale-105 lg:hover:shadow-lg "
  );
  const _date = dayjs(date).format("YYYY/MM/DD");
  return (
    <Link
      className={_className}
      style={style}
      href={`/posts/${id}?came=${came}`}
    >
      <div className="shadow-lg rounded-lg overflow-hidden">
        <Image
          height={250}
          width={250}
          unoptimized
          src={cover ?? ""}
          blurDataURL={blurDataUrl}
          placeholder="blur"
          className="rounded-lg aspect-[240/135] w-full transition-[background,transform] duration-700 object-cover hover:scale-125"
          alt={title}
        />
      </div>
      <div className={styles.articleInfo}>
        <div className="relative px-4 py-1  text-white rounded-b-lg">
          <h3 className="font-bold text-sm">{title}</h3>
          <span className="text-sm">{_date}</span>
        </div>
      </div>
    </Link>
  );
}
