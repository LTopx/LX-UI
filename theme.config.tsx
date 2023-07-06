import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const logo = (
  <div className="font-extrabold text-transparent text-3xl">
    <span className="bg-clip-text bg-logo bg-[size:400%] animate-flow">
      LX-UI
    </span>
  </div>
);

const config: DocsThemeConfig = {
  logo,
  project: {
    link: "https://github.com/LTopx/L-UI",
  },
  docsRepositoryBase: "https://github.com/LTopx/L-UI",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – LX-UI",
      };
    }
  },
  head: function useHead() {
    const { title } = useConfig();

    return (
      <>
        <meta
          name="viewport"
          content="height=device-height ,width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="og:title" content={title ? title + " – LX-UI" : "LX-UI"} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </>
    );
  },
  banner: {
    key: "0.7.2-release",
    text: (
      <a href="https://gpt.ltopx.com" target="_blank">
        🎉 L-GPT v0.7.2 is released. Get to know →
      </a>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <div className="flex flex-col w-full items-center sm:items-start">
        <div>
          <a
            className="flex text-current gap-1 items-center"
            target="_blank"
            rel="noopener noreferrer"
            title="LTopx LGPT"
            href="https://github.com/LTopx"
          >
            Powered by LTopx
          </a>
        </div>
        <p className="mt-6 text-xs">© {new Date().getFullYear()} LX-UI</p>
      </div>
    ),
  },
};

export default config;
