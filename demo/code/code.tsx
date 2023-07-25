import React from "react";
import { cn } from "@components/_lib/cn";

interface CodeProps {
  component: React.ReactNode;
  children?: React.ReactNode | React.ReactNode[];
  description?: string;
}

const Code: React.FC<CodeProps> = ({
  component,
  children: paramsChildren,
  description: paramsDescription,
}) => {
  const [visible, setVisible] = React.useState(false);

  if (!paramsChildren) return null;

  let description = paramsDescription;
  let children = paramsChildren;

  if ((paramsChildren as any[]).length) {
    const findDescription = (paramsChildren as any[]).find(
      (item) => item.type.name === "Description"
    );
    if (findDescription) description = findDescription.props.children;

    children = (paramsChildren as any[]).filter(
      (item) => item.type.name !== "Description"
    );
  }

  return (
    <div
      className={cn(
        "border rounded-md mt-4 pt-12 px-6",
        "border-neutral-200/70 dark:border-neutral-700"
      )}
    >
      <div className="mb-10">{component}</div>
      {!!description && (
        <div
          className={cn(
            "border-t min-h-[80px] text-sm py-4",
            "border-neutral-200/50 dark:border-neutral-700/80"
          )}
        >
          {description}
        </div>
      )}

      <div className="border-t flex border-neutral-200/50 h-10 justify-center items-center dark:border-neutral-700">
        <div
          onClick={() => setVisible(!visible)}
          className={cn(
            "cursor-pointer transition-colors",
            "text-neutral-400 hover:text-neutral-600",
            { "text-sky-400 hover:text-sky-500": visible }
          )}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g fillRule="nonzero">
                <g>
                  <rect x="0" y="0" width="24" height="24"></rect>
                  <path
                    d="M14.4858,3.14342 C15.0175,3.29266 15.3276,3.84471 15.1784,4.37644 L10.7473,20.1638 C10.598,20.6955 10.046,21.0056 9.51425,20.8563 C8.98251,20.7071 8.67244,20.155 8.82169,19.6233 L13.2528,3.83598 C13.402,3.30424 13.9541,2.99417 14.4858,3.14342 Z M7.20707,7.05001 C7.5976,7.44053 7.5976,8.0737 7.20707,8.46422 L3.67154,11.9998 L7.20707,15.5353 C7.5976,15.9258 7.5976,16.559 7.20707,16.9495 C6.81655,17.34 6.18338,17.34 5.79286,16.9495 L1.55022,12.7069 C1.36268,12.5193 1.25732,12.265 1.25732,11.9998 C1.25732,11.7345 1.36268,11.4802 1.55022,11.2927 L5.79286,7.05001 C6.18338,6.65949 6.81655,6.65949 7.20707,7.05001 Z M16.7929,8.46422 C16.4023,8.0737 16.4023,7.44053 16.7929,7.05001 C17.1834,6.65949 17.8165,6.65949 18.2071,7.05001 L22.4497,11.2927 C22.6372,11.4802 22.7426,11.7345 22.7426,11.9998 C22.7426,12.265 22.6372,12.5193 22.4497,12.7069 L18.2071,16.9495 C17.8165,17.34 17.1834,17.34 16.7929,16.9495 C16.4023,16.559 16.4023,15.9258 16.7929,15.5353 L20.3284,11.9998 L16.7929,8.46422 Z"
                    fill="currentColor"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      {visible && <div>{children}</div>}
    </div>
  );
};

export default Code;
