import { useState } from "react";
import toast from "react-hot-toast";

import { useAuthContext } from "@/context/auth-context";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser }: any = useAuthContext();
  // console.log("CHECK");

  const signup = async ({ name, username, pass, confPass, gender }: any) => {
    const success = handleInputErrors({
      name,
      username,
      pass,
      confPass,
      gender,
    });
    if (!success) {
      // console.log("not success");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          username,
          pass,
          confPass,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      // console.log("data", data);

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Signed up successfully");
      // console.log("setAuthUser Done");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};
export default useSignup;

function handleInputErrors({ name, username, pass, confPass, gender }: any) {
  if (!name || !username || !pass || !confPass || !gender) {
    toast.error("Please fill in all fields");
    // console.log(gender);
    return false;
  }

  if (pass !== confPass) {
    toast.error("Passwords do not match");
    return false;
  }

  if (pass.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
}
