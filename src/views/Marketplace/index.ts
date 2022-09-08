import dynamic from "next/dynamic";

export const Hero = dynamic(() => import("./Hero/Hero"));
export const Creators = dynamic(() => import("./Creators/Creators"));
export const Hottest = dynamic(() => import("./Hottest/Hottest"));
export const TopCollection = dynamic(
  () => import("./TopCollection/TopCollection")
);
export const JoinUs = dynamic(() => import("./JoinUs/JoinUs"));
