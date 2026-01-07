import { formatText } from "../../../utils/formatText";
import "./StatusBadge.css";

export default function StatusBadge({ currentStatus, collectionId, onClick }) {
    const statusClass = currentStatus.toLowerCase();

    return (
        <td className="current-status">
            <button
                type="button"
                className={`status-badge ${statusClass}`}
                onClick={onClick}
            >
                {formatText(currentStatus)}
            </button>
        </td>
    );
}
