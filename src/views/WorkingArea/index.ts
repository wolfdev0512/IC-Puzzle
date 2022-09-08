import dynamic from "next/dynamic";

export const Workingarea = dynamic(() => import("./WorkingArea/WorkingArea"), {
  ssr: false,
});
