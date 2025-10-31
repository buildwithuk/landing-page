import type { FC, ReactElement } from "react";

export const ContentComponent: FC = (): ReactElement => {
  return (
    <div className="flex-1 mt-2 flex-row h-100 content-center place-content-center">
      <div className=" font-semibold text-muted-foreground text-xl text-center">
        <p>
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
      </div>
    </div>
  );
};
