import { twJoin } from "./lib/tw-join";
export { createTailwindMerge } from "./lib/create-tailwind-merge";
export { getDefaultConfig } from "./lib/default-config";
export { extendTailwindMerge } from "./lib/extend-tailwind-merge";
export { fromTheme } from "./lib/from-theme";
export { mergeConfigs } from "./lib/merge-configs";
export { twJoin } from "./lib/tw-join";
export { twMerge } from "./lib/tw-merge";
import * as _validators from "./lib/validators";
export { _validators as validators };
/**
 * @deprecated Will be removed in next major version. Use `twJoin` instead.
 */
export var join = twJoin;