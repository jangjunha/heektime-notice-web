import React from "react";
import ImageLight from "./button-light.svg";
import ImageDark from "./button-dark.svg";

interface AddToAppleWatchButtonProps {
  href: string;
  className?: string;
}

export const AddToAppleWatchButton = ({
  href,
  className,
}: AddToAppleWatchButtonProps): React.ReactElement => {
  return (
    <div className={className}>
      <a href={href}>{isDarkMode() ? <ImageDark /> : <ImageLight />}</a>
    </div>
  );
};

const isDarkMode = (): boolean =>
  window.matchMedia?.("(prefers-color-scheme: dark)").matches;
