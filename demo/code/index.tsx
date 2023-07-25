import LXCode from "./code";
import Description from "./description";

type LXCodeType = typeof LXCode;

type CodeType = LXCodeType & {
  Description: typeof Description;
};

const Code = LXCode as CodeType;

Code.Description = Description;

export default Code;
