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
      link: "www.swiftresume.cn",
    },
    {
      name: "Breeze - 微风",
      description: "一个极简的习惯追踪App(web, android, ios)",
      link: "www.breezelite.cn",
    },
    {
      name: "Elevate - 升程",
      description: "一个基于chatgpt + azure的英语学习Web App",
      link: "www.elevate.com",
    },
  ];
  return (
    <div className="p-1">
      <h2 className="text-2xl font-bold mb-1">项目</h2>
      <p className="text-stone-400 mb-3 text-xs">
        一些微小的项目，用来帮助自己提升效率
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-2 gap-y-3">
        {projects.map((project) => {
          return (
            <div key={project.name}>
              <div className="text-base text-stone-950 font-bold mb-2">
                {project.name}
              </div>
              <div className="text-xs mb-2 text-stone-700">
                {project.description}
              </div>
              <div>
                <a className="text-xs" href={project.link}>
                  官网
                </a>
                <a className="text-xs" href={project.link}>
                  github
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
