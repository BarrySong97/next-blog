import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={styles.articleList}>
      <h2 className="text-2xl font-bold mb-5">文章列表</h2>
      <ul className="grid grid-cols-1 gap-6  lg:grid-cols-2 lg:gap-8">
        <li>
          <a href="" className={`${styles.articleItem} `}>
            <img
              src="https://images-1253529509.cos.ap-chengdu.myqcloud.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230523170724.jpg"
              alt="rounded-lg"
              className=" aspect-[240/135] object-cover"
            />
          </a>
          <div className={styles.articleInfo}>
            <img
              src="https://images-1253529509.cos.ap-chengdu.myqcloud.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230523170724.jpg"
              alt=""
              style={{ height: 40 }}
              className="w-full object-cover"
              height="40"
            />
            <h3 className="text-sm font-bold text-white">111</h3>
            <div className="text-white">2023 03 04</div>
          </div>
        </li>
      </ul>
    </main>
  );
}
