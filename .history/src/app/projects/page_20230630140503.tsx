import SideBar from "./components/SideBar";
type Project = {
  name: string;
  description: string;
  link: string;
};
export default function Projects() {
  const projects = [
    {
      name: "Swift Resume - 极速简历",
      description: "使用 html css生成pdf简历",
      link: "",
    },
    {
      name: "Breeze - 微风",
      description: "一个极简的习惯追踪App(web, android, ios)",
    },
    {
      name: "Elevate - 升程",
    },
  ];
  return <main className=""></main>;
}
