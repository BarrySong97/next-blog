import Image from "next/image";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={styles.articleList}>
      <h2 className="text-2xl font-bold mb-3">文章列表</h2>
      <ul>
        <li>
          <a href="" className={styles.articleItem}>
            <img
              src="https://images-1253529509.cos.ap-chengdu.myqcloud.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230523170724.jpg"
              alt=""
              className="rounded-md"
              // width={300}
              // height={200}
            />
            <h3>111</h3>
            <div>2023 03 04</div>
          </a>
        </li>
        <li>
          {" "}
          <a href="" className={styles.articleItem}>
            <img
              src="https://images-1253529509.cos.ap-chengdu.myqcloud.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230523170724.jpg"
              alt=""
              className="rounded-md"
              // width={300}
              // height={200}
            />
            <h3>111</h3>
            <div>2023 03 04</div>
          </a>
        </li>
        <li>
          {" "}
          <a href="" className={styles.articleItem}>
            <img
              src="https://images-1253529509.cos.ap-chengdu.myqcloud.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230523170724.jpg"
              alt=""
              className="rounded-md"
              // width={300}
              // height={200}
            />
            <h3>111</h3>
            <div>2023 03 04</div>
          </a>
        </li>
      </ul>
    </main>
  );
}
