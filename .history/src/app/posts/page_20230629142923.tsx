import Image from "next/image";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={styles.articleList}>
      <h2 className="text-2xl font-bold mb-3">文章列表</h2>
      <ul>
        <li>
          <a href="" className={styles.articleItem}>
            <Image src="" alt="" />
            <h3>111</h3>
          </a>
        </li>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}
