import dynamic from "next/dynamic"

export const MintModal = dynamic(() => import("./Mint/Mint"))
export const FileModal = dynamic(() => import("./File/File"))
export const SuccessModal = dynamic(() => import("./Success/Success"))
