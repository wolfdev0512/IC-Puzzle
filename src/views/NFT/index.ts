import dynamic from "next/dynamic";

export const Explorer = dynamic(() => import("./Explorer/Explorer"));
export const Recent = dynamic(() => import("./Recent/Recent"));
