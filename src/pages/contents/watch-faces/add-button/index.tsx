import React from "react";
import ImageLight from "./button-light.svg";
import ImageDark from "./button-dark.svg";

interface AddToAppleWatchButtonProps {
  href: string;
  className?: string;
}

const AddToAppleWatchButton = ({
  href,
  className,
}: AddToAppleWatchButtonProps): React.ReactElement => {
  const isSSR = typeof window === "undefined";
  return (
    <div className={className}>
      <a href={href}>
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            {isDarkMode() ? <ImageDark /> : <ImageLight />}
          </React.Suspense>
        )}
      </a>
    </div>
  );
};

const isDarkMode = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches;
};

export default AddToAppleWatchButton;
