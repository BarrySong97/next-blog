import styles from "./index.module.scss";

export default function Home() {
  return (
    <main className={`${styles.articleList} mb-4`}>
      <h2 className="text-2xl font-bold mb-5">文章列表</h2>
      <ul className="grid grid-cols-1 gap-6  lg:grid-cols-2 lg:gap-8">
        <li className="relative rounded-t-lg ">
          <a href="">
            <img
              src="https://images-1253529509.cos.ap-chengdu.myqcloud.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230523170724.jpg"
              // alt="rounded-t-lg"
              className="rounded-t-lg aspect-[240/135] w-full object-cover"
            />
            <div>
              <img
                src="https://images-1253529509.cos.ap-chengdu.myqcloud.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230523170724.jpg"
                alt=""
                style={{ height: 44 }}
                className="h-full object-cover absolute w-full rounded-b-lg bottom-0 left-0"
              />
              <div className={styles.articleInfo}>
                <div className="relative px-4 py-1  text-white rounded-b-lg">
                  <h3 className="font-bold ">111</h3>
                  <div className="text-sm">2023/03/04</div>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="relative rounded-t-lg ">
          <a href="">
            <img
              src="https://files.catbox.moe/4uftut.png"
              // alt="rounded-t-lg"
              className="rounded-t-lg aspect-[240/135] w-full object-cover"
            />
            <div>
              <img
                src="https://files.catbox.moe/4uftut.png"
                alt=""
                style={{ height: 44 }}
                className="h-full object-cover absolute w-full rounded-b-lg bottom-0 left-0"
              />
              <div className={styles.articleInfo}>
                <div className="relative px-4 py-1  text-white rounded-b-lg">
                  <h3 className="font-bold ">111</h3>
                  <div className="text-sm">2023/03/04</div>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </main>
  );
}
