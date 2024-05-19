import { FormEvent, useState } from "react";

import useLogin from "@/hooks/use-login";
import PasswordSvg from "@/icons/password-svg";
import UsernameSvg from "@/icons/username-svg";

const LogIn = () => {
  const [inputs, setInputs] = useState({
    username: "",
    pass: "",
  });

  const { loading, login } = useLogin();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(inputs);
    await login(inputs);
  };

  return (
    <div className="card rounded-btn bg-neutral shadow-xl">
      <form
        className="card-body items-center text-center"
        onSubmit={handleSubmit}
      >
        <label className="input input-bordered input-primary flex items-center gap-2">
          <UsernameSvg />
          <input
            className="grow"
            placeholder="Username"
            type="text"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </label>
        <label className="input input-bordered input-primary mb-4 flex items-center gap-2">
          <PasswordSvg />
          <input
            className="grow"
            placeholder="Password"
            type="password"
            value={inputs.pass}
            onChange={(e) => setInputs({ ...inputs, pass: e.target.value })}
          />
        </label>
        <div className="card-actions w-full">
          <button
            className="btn btn-primary mx-auto w-1/3 text-base-100"
            disabled={loading}
            type="submit"
          >
            {loading ? (
              <span className="loading loading-spinner text-info"></span>
            ) : (
              "Log In"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
