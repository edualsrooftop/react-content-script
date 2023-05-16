/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import { classNames } from "./utils";

type LogoProps = {
  className: string;
  id: string;
  title: string;
};

function Logo({ className, id, title }: LogoProps) {
  return (
    <img className={classNames("", className)} alt="logo" src="https://stash-staging.fly.dev/app/static/media/stash-white-text.318e58421e781c6614963631fdee8e0e.svg" />
  );
}

export default Logo;
