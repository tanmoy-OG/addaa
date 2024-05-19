import useLogout from "@/hooks/use-logout";
import SettingsSvg from "@/icons/settings-svg";

const Settings = () => {
  const { loading, logout } = useLogout();

  return (
    <details className="dropdown dropdown-end dropdown-right">
      <summary className="group btn size-10 min-h-0 p-2 hover:border-info hover:bg-info">
        <SettingsSvg />
      </summary>
      <ul className="menu dropdown-content z-[1] w-48 gap-2 rounded-btn bg-base-100 p-2 shadow">
        <li>
          <button
            className="btn btn-disabled btn-sm"
            disabled={loading}
            onClick={logout}
          >
            {loading ? (
              <span className="loading loading-spinner text-primary"></span>
            ) : (
              "Edit Profile"
            )}
          </button>
        </li>
        <li>
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
        </li>
      </ul>
    </details>
  );
};

export default Settings;
