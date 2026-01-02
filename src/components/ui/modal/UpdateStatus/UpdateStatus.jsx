import { useState } from "react";
import { LORRY_STATUSES } from "../../../../constants/lorry-statuses";
import "./UpdateStatus.css";
import { formatText } from "../../../../utils/formatText";

export default function UpdateStatus({ lorry, onCancel, onUpdate }) {
    const [status, setStatus] = useState(lorry?.currentStatus ?? "");

    const historyStatuses = lorry?.statusHistory.map((entry) => entry.status) || [];
    const statusOptions = Object.values(LORRY_STATUSES).filter((status) => !historyStatuses.includes(status));

    function handleUpdate() {
        if (!status) return;
        onUpdate?.(status);
    }

    return (
        <div className="update-status">
            <h3>Update lorry status</h3>

            <label htmlFor="status-select">Status</label>
            <select
                id="status-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="" disabled>
                    Select status
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
                    type="button"
                    className="btn update"
                    onClick={handleUpdate}
                    disabled={!status || status === lorry?.currentStatus}
                >
                    Update
                </button>
            </div>
        </div>
    );
}
