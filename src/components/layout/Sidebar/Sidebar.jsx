import { NavLink } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar({ isSidebarOpen }) {
    return (
        <nav className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
            <ul>
                <li>
                    <NavLink to="/" end>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/reports">
                        Reports
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings">
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
