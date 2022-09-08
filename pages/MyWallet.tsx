import type { NextPage } from "next";

//components
import { Hero, Recent } from "views/MyWallet";

//Styled Component
import { MyWalletLayout } from "styles/Styled";

const MyWalletPage: NextPage = () => {
  return (
    <MyWalletLayout>
      <Hero></Hero>
      <Recent></Recent>
    </MyWalletLayout>
  );
};

export default MyWalletPage;
