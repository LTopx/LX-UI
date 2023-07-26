import { useRouter } from "next/router";
import en from "../locales/en.json";
import zhCN from "../locales/zh-CN.json";

const useLocale = (key: string) => {
  const router = useRouter();

  const locale = router.locale;

  const json = {
    en,
    "zh-CN": zhCN,
  };

  const getLocale = (name: string) => {
    try {
      return json[locale][key][name];
    } catch (error) {
      return "";
    }
  };

  return getLocale;
};

export default useLocale;
