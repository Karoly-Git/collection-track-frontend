import { NavLink } from "react-router-dom";
import './Sidebar.scss';

import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoIosStats } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogin } from "react-icons/md";

const menuItems = [
    { to: "/", icon: MdOutlineDashboardCustomize },
    { to: "/reports", icon: IoIosStats },
    { to: "/settings", icon: IoSettingsOutline },
    { to: "/login", icon: MdLogin },
];

type SidebarProps = {
    isSidebarOpen: boolean;
};

export default function Sidebar({ isSidebarOpen }: SidebarProps) {
    return (
        <nav className={`sidebar ${isSidebarOpen ? "" : "collapsed"}`}>
            <ul>
                {menuItems.map(({ to, icon: Icon }) => (
                    <li key={to}>
                        <NavLink to={to}>
                            <span className="icon">
                                <Icon />
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
