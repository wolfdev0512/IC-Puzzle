import dynamic from "next/dynamic";

export const Hero = dynamic(() => import("./Hero/Hero"));
export const Recent = dynamic(() => import("./Recent/Recent"));
