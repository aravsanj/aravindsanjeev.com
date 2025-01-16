"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const Providers = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#FF00FF"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
