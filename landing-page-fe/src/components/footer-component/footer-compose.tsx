import { MessagesSquare, SquareCode, Thermometer } from "lucide-react";
import type { ReactElement, FC } from "react";
import { Button } from "../ui/button";
import { FeedbackDialog } from "../dialog/feedback-dialog";

export const FooterComponent: FC = (): ReactElement => {
  return (
    <footer className="flex justify-between items-center">
  <div>
    <FeedbackDialog />
  </div>
  <div>
    <Button variant="link">
      <SquareCode />
      <a href="https://github.com/buildwithuk/landing-page/tree/main/landing-page-fe">
        https://github.com/buildwithuk
      </a>
    </Button>
  </div>
</footer>
  );
};
