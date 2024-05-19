import { useState } from "react";
import toast from "react-hot-toast";

import { useAuthContext } from "@/context/auth-context";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser }: any = useAuthContext();
  // console.log("CHECK");

  const login = async ({ username, pass }: any) => {
    const success = handleInputErrors({ username, pass });
    if (!success) {
      // console.log("not success");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, pass }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      // console.log("data", data);
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Logged in successfully");
      // console.log("setAuthUser Done");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

function handleInputErrors({ username, pass }: any) {
  if (!username || !pass) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}
