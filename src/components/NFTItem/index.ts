import dynamic from "next/dynamic";

export const NFTItem = dynamic(() => import("./NFTItem/NFTItem"));
export const MarketItem = dynamic(() => import("./MarketItem/MarketItem"));
