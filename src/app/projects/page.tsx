import "./styles.css";
import { PajamasExternalLink } from "./icones";
import { MdiGithub } from "../components/SideBar/icons";
import Sheet from "../components/Sheet";
import { proxy } from "@/blogapi/core/OpenAPI";
import { ProjectDTO } from "@/blogapi";
import axios from "axios";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "项目 - Barry Song's Blog",
  description: "Barry Song的一些小作品",
};
export const revalidate = 1000;
export default async function Projects() {
  const data: ProjectDTO[] = await axios
    .get(`${proxy}/projects`)
    .then((res) => res.data);

  return (
    <Sheet>
      <div className="p-1">
        <h2 className="text-2xl font-bold mb-1">项目</h2>
        <p className="text-stone-400 mb-6 text-xs">
          一些微小的项目，用来帮助自己提升效率
        </p>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-1 md:grid-cols-2 ">
          {data?.map((project) => {
            return (
              <div key={project.name} className="flex">
                <div className="w-[270px] overflow-hidden rounded-md drop-shadow-lg mr-4">
                  <Image
                    height={125}
                    width={250}
                    className="h-full w-full object-cover"
                    src={project.image ?? ""}
                    alt={project.name}
                  />
                </div>
                <div className="flex flex-col  justify-between w-1/2">
                  <div className="text-base text-stone-950 font-bold mb-2">
                    <div className="mb-2  flex items-center justify-between gap-2">
                      <div className="project-links">
                        <a
                          className="text-base   cursor-pointer text-stone-950"
                          href={project.url}
                          target="_blank"
                        >
                          <span>{project.name}</span>
                        </a>
                      </div>
                      {project.url && (
                        <a
                          className="cursor-pointer "
                          href={project.github}
                          target="_blank"
                        >
                          <MdiGithub />
                        </a>
                      )}
                    </div>
                    <div className="text-xs mb-2 text-gray-500">
                      {project.content}
                    </div>
                  </div>
                  {project.post && (
                    <div className="flex justify-between items-center project-links">
                      <div className="flex gap-1 items-center">
                        <a
                          className="text-xs flex items-center  cursor-pointer mr-1 text-gray-600"
                          href={`/post/${project.post.id}`}
                          target="_blank"
                        >
                          <span className="mr-1">阅读相关文章</span>
                          <PajamasExternalLink />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Sheet>
  );
}
