import { useState } from "react";
import { LORRY_STATUSES } from "../../../../constants/lorry-statuses";
import "./UpdateStatus.css";
import { formatText } from "../../../../utils/formatText";

export default function UpdateStatus({ lorry, onCancel }) {
    const currentStatus = lorry.currentStatus;
    const [newStatus, setNewStatus] = useState("");

    const statusOptions = Object.values(LORRY_STATUSES).filter(
        (s) => s !== currentStatus
    );

    function handleSubmit(e) {
        e.preventDefault();
        if (!newStatus || newStatus === currentStatus) return;
        console.log("New:", newStatus, "Current:", currentStatus);
    }

    return (
        <form className="update-status" onSubmit={handleSubmit}>
            <h3>Update lorry status</h3>

            <label htmlFor="status-select">
                Current status: {formatText(currentStatus)}
            </label>

            <select
                id="status-select"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                required
            >
                <option value="" disabled>
                    Select new status
                </option>

                {statusOptions.map((option) => (
                    <option key={option} value={option}>
                        {formatText(option)}
                    </option>
                ))}
            </select>

            <div className="actions">
                <button
                    type="button"
                    className="btn cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="btn update"
                    disabled={!newStatus}
                >
                    Update
                </button>
            </div>
        </form>
    );
}


