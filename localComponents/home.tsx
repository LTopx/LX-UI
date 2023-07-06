import React from "react";
import Link from "next/link";

export function Home() {
  return (
    <div className="mt-14">
      <div className="font-bold">
        <div className="text-transparent text-7xl">
          <span className="bg-clip-text bg-logo bg-[size:400%] animate-flow">
            LX-UI
          </span>
        </div>
        <div className="text-4xl">based on Radix & Tailwind</div>
      </div>
      <div className="my-11 text-xl">
        一款小而美的 React UI Component Library
      </div>
      <div className="flex">
        <Link
          className="rounded-full cursor-pointer bg-sky-400 text-white py-2 px-5"
          href="/guide"
        >
          点击开始
        </Link>
      </div>
    </div>
  );
}
