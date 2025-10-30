import type { FC, ReactElement } from "react";

export const ContentComponent : FC = () : ReactElement => {
  return (
    <div>
       <p className="font-semibold text-muted-foreground text-xl">
      A modal dialog that interrupts the user with important content and expects
      a response.
    </p>
    </div>
  );
}