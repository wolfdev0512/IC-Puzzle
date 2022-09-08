import type { NextPage } from "next";

//components
import { Explorer, Recent } from "views/NFT";

//Styled Component
import { NFTLayout } from "styles/Styled";

const NFT: NextPage = () => {
  return (
    <NFTLayout>
      <Explorer />
      <Recent />
    </NFTLayout>
  );
};

export default NFT;
