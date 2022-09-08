import dynamic from "next/dynamic";

export const Hero = dynamic(() => import("./Hero/Hero"));
export const Video = dynamic(() => import("./Video/Video"));
export const Collection = dynamic(() => import("./Collection/Collection"));
export const Create = dynamic(() => import("./Create/Create"));
export const Work = dynamic(() => import("./Work/Work"));
export const Roadmap = dynamic(() => import("./Roadmap/Roadmap"));
export const Join = dynamic(() => import("./Join/Join"));
