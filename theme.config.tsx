import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import Button from "./components/button";

const logo = (
  <div className="flex items-center gap-2">
    <Image src="/logo.png" alt="logo" width={40} height={40} />
    <div className="font-extrabold text-transparent text-3xl">
      <span className="bg-clip-text bg-logo bg-[size:400%] animate-flow">
        LX-UI
      </span>
    </div>
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
        {!!process.env.UMAMI_WEBSITE_ID && (
          <script
            async
            src="https://umami.ltopx.com/script.js"
            data-website-id={process.env.UMAMI_WEBSITE_ID}
          ></script>
        )}
      </>
    );
  },
  banner: {
    key: "0.8.1-release",
    text: (
      <a href="https://chat.ltopx.com" target="_blank">
        🎉 L-GPT v0.8.1 released. Get to know →
      </a>
    ),
  },
  search: {
    placeholder: () => {
      const router = useRouter();
      if (router.locale === "zh-CN") return "搜索文档...";
      return "Search documentation…";
    },
  },
  nextThemes: {
    defaultTheme: "dark",
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
  main: ({ children }) => {
    const { frontMatter } = useConfig();
    const { title, description, radix } = frontMatter;

    return (
      <>
        {!!title && (
          <div className="flex font-bold h-14 my-2 tracking-tight text-4xl text-slate-900 items-center dark:text-slate-100">
            {title}
          </div>
        )}
        {!!description && <div>{description}</div>}
        {!!radix && (
          <div className="flex mt-3">
            <Button
              href={radix.link}
              target="_blank"
              rounded
              size="sm"
              type="primary"
              outline
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
                    fill="currentcolor"
                  ></path>
                  <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
                  <path
                    d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
                    fill="currentcolor"
                  ></path>
                </svg>
              }
            >
              Radix {radix.title}
            </Button>
          </div>
        )}
        <div>{children}</div>
      </>
    );
  },
  footer: {
    text: (
      <div className="flex flex-col w-full z-10 items-center sm:items-start">
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
  i18n: [
    { locale: "en", text: "English" },
    { locale: "zh-CN", text: "中文" },
  ],
};

export default config;
