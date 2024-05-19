import useLogout from "@/hooks/use-logout";

const LogOut = () => {
  const { loading, logout } = useLogout();

  return (
    <button
      className="btn btn-accent btn-sm"
      disabled={loading}
      onClick={logout}
    >
      {loading ? (
        <span className="loading loading-spinner text-info"></span>
      ) : (
        "Log Out"
      )}
    </button>
  );
};

export default LogOut;
