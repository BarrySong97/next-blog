import { proxy } from "@/blogapi/core/OpenAPI";
import { PajamasExternalLink } from "./icones";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { ProjectDTO } from "@/blogapi";
export default async function ProjectList() {
  const projects: ProjectDTO[] = await fetch(`${proxy}/projects`).then((res) =>
    res.json()
  );
  return projects?.map((project) => {
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
              {/* {project.github && (
                <a
                  className="cursor-pointer "
                  href={project.github}
                  target="_blank"
                >
                  <MdiGithub />
                </a>
              )} */}
            </div>
            <div className="text-xs mb-2 text-gray-500">
              {project.content}
            </div>
          </div>
          <div className="flex justify-between items-center project-links">
            <div className="flex gap-1 items-center">
              <a
                className="text-xs flex items-center  cursor-pointer mr-1 text-gray-600"
                href={project.url}
                target="_blank"
              >
                <span className="mr-1">阅读相关文章</span>
                <PajamasExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
