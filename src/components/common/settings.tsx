import SettingsSvg from "@/icons/settings-svg";

import EditProfile from "@/settings/edit-profile";
import LogOut from "@/settings/log-out";

const Settings = () => {
  return (
    <details className="dropdown dropdown-end dropdown-right">
      <summary className="group btn size-10 min-h-0 p-2 hover:border-info hover:bg-info">
        <SettingsSvg />
      </summary>
      <ul className="menu dropdown-content z-[1] w-48 gap-2 rounded-btn bg-base-100 p-2 shadow">
        <li>
          <EditProfile />
        </li>
        <li>
          <LogOut />
        </li>
      </ul>
    </details>
  );
};

export default Settings;
