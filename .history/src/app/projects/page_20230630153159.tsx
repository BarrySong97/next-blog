import SideBar from "./components/SideBar";
type Project = {
  name: string;
  description: string;
  link: string;
  preview: string;
};
export default function Projects() {
  const projects: Project[] = [
    {
      name: "Swift Resume - 极速简历",
      description: "使用 html css生成pdf简历",
      link: "www.swiftresume.cn",
      preview: "https://pic.imgdb.cn/item/649e84631ddac507cc3bd389.jpg",
    },
    {
      name: "Breeze - 微风",
      description: "一个极简的习惯追踪App(web, android, ios)",
      link: "www.breezelite.cn",
      preview: "",
    },
    {
      name: "Elevate - 升程",
      description: "一个基于chatgpt + azure的英语学习Web App",
      link: "www.elevate.com",
      preview: "",
    },
  ];
  return (
    <div className="p-1">
      <h2 className="text-2xl font-bold mb-1">项目</h2>
      <p className="text-stone-400 mb-3 text-xs">
        一些微小的项目，用来帮助自己提升效率
      </p>
      <div className="flex flex-col gap-4">
        {projects.map((project) => {
          return (
            <div key={project.name}>
              <img
                src={project.preview}
                style={{ height: 250 }}
                className="object-cover rounded-lg"
              />
              <div>
                <div className="text-base text-stone-950 font-bold mb-2">
                  {project.name}
                </div>
                <div className="text-xs mb-2 text-stone-700">
                  {project.description}
                </div>
                <div className="flex gap-3">
                  <a className="text-xs" href={project.link}>
                    官网
                  </a>
                  <a className="text-xs" href={project.link}>
                    github
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
