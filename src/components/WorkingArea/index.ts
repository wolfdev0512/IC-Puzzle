import dynamic from "next/dynamic";

export const Box = dynamic(() => import("./Box/Box"));
export const ImageElement = dynamic(
  () => import("./ImageElement/ImageElement")
);
export const Drawer = dynamic(() => import("./Drawer/Drawer"));
export const Sidebar = dynamic(() => import("./Sidebar/Sidebar"));
export const ColorPicker = dynamic(() => import("./ColorPicker/ColorPicker"));
