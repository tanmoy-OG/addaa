"use client";
import { useRouter } from "next/navigation";

import { useAuthContext } from "@/context/auth-context";
import LogIn from "@/sign-in/log-in";
import SignUp from "@/sign-in/sign-up";

const SignIn = () => {
  const { authUser }: any = useAuthContext();
  const router = useRouter();

  if (authUser) {
    router.push("/");
    return null;
  }

  return (
    <div className="absolute top-1/4 flex w-full flex-col justify-center">
      <div
        className="tabs tabs-lifted tabs-lg mx-4 grid-cols-3 sm:mx-auto"
        role="tablist"
      >
        <input
          defaultChecked
          aria-label="Log In"
          className="tab text-base tracking-tighter [--tab-bg:#EBEBEB] [--tab-border:0px] [--tab-corner-bg:#EBEBEB]"
          name="my_tabs_2"
          role="tab"
          type="radio"
        />
        <div className="tab-content rounded-box bg-neutral" role="tabpanel">
          <LogIn />
        </div>

        <input
          aria-label="Sign Up"
          className="tab text-base [--tab-bg:#EBEBEB] [--tab-border:0px] [--tab-corner-bg:#EBEBEB]"
          name="my_tabs_2"
          role="tab"
          type="radio"
        />
        <div className="tab-content rounded-box bg-neutral" role="tabpanel">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
