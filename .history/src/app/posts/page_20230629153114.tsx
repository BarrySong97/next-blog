import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={styles.articleList}>
      <h2 className="text-2xl font-bold mb-5">文章列表</h2>
      <ul className="grid grid-cols-1 gap-6  lg:grid-cols-2 lg:gap-8">
        <li className="relative">
          <a href="" className={`${styles.articleItem} `}>
            <img
              src="https://images-1253529509.cos.ap-chengdu.myqcloud.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230523170724.jpg"
              alt="rounded-lg"
              className=" aspect-[240/135] object-cover"
            />
          </a>
          <div>
            <img
              src="https://images-1253529509.cos.ap-chengdu.myqcloud.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230523170724.jpg"
              alt=""
              style={{ height: 30 }}
              className="h-full object-cover absolute w-full bottom-0 left-0"
            />
            <div className={styles.articleInfo}>
              <div className="relative text-white rounded-b-lg">
                <h3 className="text-sm font-bold ">111</h3>
                <div className="">2023 03 04</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </main>
  );
}
