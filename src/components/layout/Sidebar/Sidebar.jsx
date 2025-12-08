import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <nav>
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
