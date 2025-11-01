import { useEffect, useState, type FC, type ReactElement } from "react";
import { CountingNumber } from "../ui/shadcn-io/counting-number";

export const ContentComponent: FC<any> = ( {visitors} ): ReactElement => {

  return (
    <div className="antialiased flex-1 flex-row h-100 content-center place-content-center">
      <div className=" font-semibold text-muted-foreground  text-center">
        {visitors && (
          <>
            <h5 className="mb-10">Visited by happy people</h5>
            
            <CountingNumber
              className="text-9xl"
              number={visitors!}
              inView={true}
              transition={{ stiffness: 100, damping: 30 }}
            />
          </>
        )}
      </div>
    </div>
  );
};
