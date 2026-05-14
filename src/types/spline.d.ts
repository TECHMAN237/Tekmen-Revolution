import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { url?: string; "loading-library"?: string; "events-none"?: string; class?: string },
        HTMLElement
      >;
    }
  }
}

export {};
