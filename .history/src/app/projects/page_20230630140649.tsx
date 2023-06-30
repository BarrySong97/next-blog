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
      {projects.map((project) => {
        return (
          <div>
            <div>{project.name}</div>
            <div>{project.description}</div>
            <a href={project.link}>访问网站</a>
          </div>
        );
      })}
    </div>
  );
}
