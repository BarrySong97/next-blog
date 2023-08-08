"use client";
import { FC, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface Props {
  language: string;
  value: string;
  lightMode: "light" | "dark";
}

export const CodeBlock: FC<Props> = ({ language, value, lightMode }) => {
  const [buttonText, setButtonText] = useState("Copy code");

  const copyToClipboard = () => {
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      return;
    }

    navigator.clipboard.writeText(value).then(() => {
      setButtonText("Copied!");

      setTimeout(() => {
        setButtonText("Copy code");
      }, 2000);
    });
  };

  return (
    <div className="codeblock relative font-sans text-[16px] rounded-md bg-black mt-2">
      <div className="flex items-center justify-between px-3 py-2 ">
        <span className="text-xs lowercase text-white">{language}</span>
        <div className="flex items-center ">
          <button
            className="text-white bg-none py-0.5 px-2 rounded focus:outline-none  text-xs"
            onClick={copyToClipboard}
          >
            {buttonText}
          </button>
        </div>
      </div>

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          marginTop: 0
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
};
