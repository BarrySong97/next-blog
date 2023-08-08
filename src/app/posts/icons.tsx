import { SVGProps } from "react";

export function TablerArrowBackUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="m9 14l-4-4l4-4"></path>
        <path d="M5 10h11a4 4 0 1 1 0 8h-1"></path>
      </g>
    </svg>
  );
}

export function SolarArrowToTopLeftBold(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.53 10.03a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 1 0 1.06 1.06l3.72-3.72v8.19c0 .713-.22 1.8-.859 2.687c-.61.848-1.635 1.563-3.391 1.563a.75.75 0 0 0 0 1.5c2.244 0 3.72-.952 4.609-2.187c.861-1.196 1.141-2.61 1.141-3.563V6.31l3.72 3.72a.75.75 0 0 0 1.06 0Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
