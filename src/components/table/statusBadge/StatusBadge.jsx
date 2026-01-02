import { formatText } from "../../../utils/formatText";
import "./StatusBadge.css";

export default function StatusBadge({ currentStatus, lorryId }) {
    const statusClass = currentStatus.toLowerCase();

    function handleBadgeClick(lorryId) {
        console.log("Badge clicked for lorry:", lorryId);
    }

    return (
        <td className="current-status">
            <button
                type="button"
                className={`status-badge ${statusClass}`}
                onClick={() => handleBadgeClick(lorryId)}
            >
                {formatText(currentStatus)}
            </button>
        </td>
    );
}
