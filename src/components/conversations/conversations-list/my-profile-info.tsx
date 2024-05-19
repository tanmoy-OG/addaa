import Image from "next/image";

import { useAuthContext } from "@/context/auth-context";

const MyProfileInfo = () => {
  const { authUser }: any = useAuthContext();

  return (
    <div className="mr-4 flex">
      <div className="avatar my-auto mr-2 size-12 lg:mr-4">
        <div className="rounded-full">
          <Image
            alt="avatar"
            height={48}
            src={authUser.profilePic}
            width={48}
          />
        </div>
      </div>
      <div className="mb-auto flex flex-col px-0 md:pr-2 lg:pr-4">
        <h2 className="font-medium">{authUser.name}</h2>
        <p className="text-xs text-secondary">@{authUser.username}</p>
      </div>
    </div>
  );
};

export default MyProfileInfo;
