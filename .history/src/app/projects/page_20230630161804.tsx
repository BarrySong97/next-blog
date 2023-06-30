"use client";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import "./styles.css";
import { MaterialSymbolsHomeRounded } from "./icones";
import { MdiGithub } from "../components/SideBar/icons";
type Project = {
  name: string;
  description: string;
  link: string;
  preview: string;
  github?: string;
};
export default function Projects() {
  const projects: Project[] = [
    {
      name: "Swift Resume - 极速简历",
      description:
        "使用 HTML 和 CSS 生成 pdf 简历。受到JSON Resume，以及 @Anthony Fu 的简历影响。为了不每次都在本地修改，并且自定义样式，做了一个线上工具。",
      link: "www.swiftresume.cn",
      github: "https://github.com/BarrySong97/SwiftResume",
      preview: "https://pic.imgdb.cn/item/649e87b11ddac507cc412890.jpg",
    },
    {
      name: "Breeze - 微风",
      github: "https://github.com/BarrySong97/Breeze",
      description:
        "一个极简的习惯追踪App(web, android, ios)，通过每日打卡记录自己的习惯，并且在详情里面根据折线图，热力日历图查看习惯的趋势从而改进掌控自己的生活。",
      link: "www.breezelite.cn",
      preview: "https://pic.imgdb.cn/item/649e8ade1ddac507cc471b26.jpg",
    },
    {
      name: "Elevate - 升程",
      github: "",
      description:
        "基于chatgpt + azure 的英语学习App(web)，简单使用chatgpt作为对话对象，并且可以自定义prompt菜单来辅助对话学习，并且还有听力模块用户可以自己提供影视资料进行听力学习。",
      link: "www.breezelite.cn",
      preview: "https://pic.imgdb.cn/item/649e8ba41ddac507cc48cf37.jpg",
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
            <div key={project.name} className="flex">
              <div className="w-[270px] overflow-hidden rounded-md drop-shadow-lg mr-4">
                <AspectRatio.Root ratio={16 / 9}>
                  <img
                    className="h-full w-full object-cover"
                    src={project.preview}
                    alt="Landscape photograph by Tobias Tullius"
                  />
                </AspectRatio.Root>
              </div>
              <div className="flex flex-col  justify-between w-1/2">
                <div className="text-base text-stone-950 font-bold mb-2">
                  <div className="mb-2">{project.name}</div>
                  <div className="text-xs mb-2 text-gray-500">
                    {project.description}
                  </div>
                </div>
                <div className="flex justify-between project-links">
                  <div className="flex">
                    <div className="flex gap-1 items-center">
                      <MaterialSymbolsHomeRounded />
                      <a
                        className="text-xs cursor-pointer text-gray-600"
                        href={project.link}
                      >
                        官网
                      </a>
                    </div>
                    {project.github && (
                      <div className="flex gap-1 items-center">
                        <MdiGithub />
                        <a
                          className="text-xs cursor-pointer text-gray-600"
                          href={project.link}
                        >
                          github
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-1 items-center">
                    <a
                      className="text-xs cursor-pointer text-gray-600"
                      href={project.link}
                    >
                      阅读相关文章
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
