import { SquareCode } from "lucide-react";
import type { ReactElement, FC } from "react";

export const FooterComponent: FC = (): ReactElement => {
  return (
    <footer className="mt-2 flex flex-row justify-center ">
      <div className="flex mr-3 content-center items-center">
        <SquareCode />
      </div>
      <div className="flex">
        <p> <a href="https://github.com/buildwithuk/landing-page/tree/main/landing-page-fe"> https://github.com/buildwithuk </a> </p>
      </div>
    </footer>
  );
};
