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
    "cursor-pointer"
  );
  const _date = dayjs(date).format("YYYY/MM/DD");
  return (
    <Link
      className={_className}
      style={style}
      href={`/posts/${id}?came=${came}`}
    >
      <Image
        height={250}
        width={250}
        unoptimized
        src={cover ?? ""}
        blurDataURL={blurDataUrl}
        placeholder="blur"
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
