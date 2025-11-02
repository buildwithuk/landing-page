import { MessagesSquare, SquareCode } from "lucide-react";
import type { ReactElement, FC } from "react";
import { Button } from "../ui/button";

export const FooterComponent: FC = (): ReactElement => {
  return (
    <footer className="mt-2 flex flex-row content-center items-center">
      <div className="flex mr-3 content-center items-center">
        <SquareCode />
      </div>
      <div className="flex text-blue-600">
        <p>
          <a href="https://github.com/buildwithuk/landing-page/tree/main/landing-page-fe">
            https://github.com/buildwithuk
          </a>
        </p>
      </div>

      <div>
        <Button variant="outline" size="icon" className="rounded-full mx-5">
          <MessagesSquare />
        </Button>
      </div>
    </footer>
  );
};
