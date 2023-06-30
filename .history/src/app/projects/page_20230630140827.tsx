import SideBar from "./components/SideBar";
type Project = {
  name: string;
  description: string;
  link: string;
};
export default function Projects() {
  const projects: Project[] = [
    {
      name: "Swift Resume - 极速简历",
      description: "使用 html css生成pdf简历",
      link: "",
    },
    {
      name: "Breeze - 微风",
      description: "一个极简的习惯追踪App(web, android, ios)",
      link: "",
    },
    {
      name: "Elevate - 升程",
      description: "一个基于chatgpt + azure的英语学习Web App",
      link: "",
    },
  ];
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-1">项目</h2>
      <p className="text-stone-400 mb-3 text-xs">
        一些微小的项目，用来帮助自己提升效率
      </p>
      <div className="grid-cols-1 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            <div key={project.name}>
              <div>{project.name}</div>
              <div>{project.description}</div>

              <a href={project.link}>访问网站</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
