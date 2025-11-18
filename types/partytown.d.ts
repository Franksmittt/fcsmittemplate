declare module "@builder.io/partytown/react" {
  import type { ComponentType } from "react";

  export const Partytown: ComponentType<{
    debug?: boolean;
    forward?: string[];
  }>;
}

