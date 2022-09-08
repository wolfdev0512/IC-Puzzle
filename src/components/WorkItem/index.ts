import dynamic from "next/dynamic";

export const WorkItem = dynamic(() => import("./WorkItem/WorkItem"));
