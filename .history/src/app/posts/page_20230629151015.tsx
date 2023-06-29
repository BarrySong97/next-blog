import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={styles.articleList}>
      <h2 className="text-2xl font-bold mb-5">文章列表</h2>
      <ul className="grid grid-cols-1 gap-6  lg:grid-cols-2 lg:gap-8">
        <li>
          <a href="" className={styles.articleItem}>
            <img
              src="https://images-1253529509.cos.ap-chengdu.myqcloud.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230523170724.jpg"
              alt=""
              className="rounded-lg aspect-[240/135]"
            />
            <div className={styles.articleInfo}>
              <h3 className="text-sm font-bold">111</h3>
              <div>2023 03 04</div>
            </div>
          </a>
        </li>
      </ul>
    </main>
  );
}
