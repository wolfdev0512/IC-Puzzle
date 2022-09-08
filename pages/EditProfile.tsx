import type { NextPage } from "next";

//Component
import { EditProfile } from "views/EditProfile";

//Styled Component
import { EditProfileLayout } from "styles/Styled";

const EditProfilePage: NextPage = () => {
  return (
    <EditProfileLayout>
      <EditProfile />
    </EditProfileLayout>
  );
};

export default EditProfilePage;
