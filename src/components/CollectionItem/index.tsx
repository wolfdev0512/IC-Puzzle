import dynamic from "next/dynamic";

export const CollectionItem = dynamic(
  () => import("./CollectionItem/CollectionItem")
);
