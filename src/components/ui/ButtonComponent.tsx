import React from "react";

export default function ButtonComponent({
  link,
  classes = "",
  target = "",
  children,
}: {
  link: string;
  classes?: string;
  target?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={link}
      target={target}
      className={
        classes
          ? classes
          : "inline-block mt-8 px-5 py-2.5 bg-blue-500/10 text-blue-300 border border-blue-400 rounded-xl hover:bg-blue-500/20 transition duration-300 cursor-none hover:ring-3 hover:ring-blue-400/30 hover:shadow-lg shadow-inner hover:shadow-blue-400/40"
      }
    >
      {children}
    </a>
  );
}
