import { RxHamburgerMenu as HamburgerIcon } from "react-icons/rx";
import "./TopBar.css";

export default function TopBar({ onToggleSidebar }) {
    return (
        <div className='top-bar'>
            <h1>Lorry Collection Load Tracker</h1>
            <HamburgerIcon className="hamburger-icon" onClick={onToggleSidebar} />
        </div>
    )
}
