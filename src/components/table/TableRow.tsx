// Icons
import { BsInfoCircle as InfoIcon } from "react-icons/bs";
import { RiDeleteBin2Line as BinIcon } from "react-icons/ri";

// UI Components
import Button from "../ui/button/Button";

// Constants
import { STATUS_ICONS } from "@/constants/status-icons";
import { COLLECTION_STATUSES } from "@/constants/collection-statuses";

// Types
import type { Collection } from "@/types/collection";

// Functions
import { formatText } from '@/utils/formatText';
import { getTimeSpentInStatus } from "@/utils/getTimeSpentInStatus";
import { useEffect, useState } from "react";
import { getTimeOnSiteAndIndicator } from "@/utils/getTimeOnSiteAndIndicator";


// ============================
// Types
// ============================

type TableRowProps = {
    collection: Collection;
};

// ============================
// Component
// ============================

export default function TableRow({ collection }: TableRowProps) {
    const [timeOnSite, setTimeOnSite] = useState<string>("");
    const [urgencyColor, setUrgencyColor] = useState<string>("");

    useEffect(() => {
        function getSpentTime(): void {
            const { time, color } = getTimeOnSiteAndIndicator(collection.checkedInAt);

            setTimeOnSite(time);
            setUrgencyColor(color);
        }

        getSpentTime();

        const interval = setInterval(getSpentTime, 1000);

        return () => clearInterval(interval);
    }, [collection.checkedInAt]); const Icon = STATUS_ICONS[collection.currentStatus];

    return (
        <tr className="collection-table-row">

            {/* Timer */}
            <td>
                <div className="cell-content timer">
                    <span style={{ backgroundColor: urgencyColor }} className="time">{timeOnSite}</span>
                </div>
            </td>

            {/* Material */}
            <td className="material-column">
                <div className="cell-content material-name">
                    {collection.materialName}
                </div>

                <div className="time-checked-in">
                    {new Date(collection.checkedInAt).toLocaleDateString()}
                </div>

                <div className="time-checked-in">
                    {new Date(collection.checkedInAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                    })}
                </div>
            </td>

            {/* Customer */}
            <td className="customer-column">
                <div className="cell-content">
                    {collection.customerName}
                </div>
            </td>

            {/* Reference */}
            <td>
                <div className="cell-content collection-ref-number">
                    {collection.collectionRefNum}
                </div>
            </td>

            {/* Status */}
            <td className="current-status">
                <button
                    type="button"
                    className={`status-badge ${collection.currentStatus.toLowerCase()}`}
                    onClick={() => { }}
                >
                    <Icon className="status-icon" />

                    <span className="status-text">
                        {formatText(collection.currentStatus)}
                    </span>
                </button>

                {collection.currentStatus !== COLLECTION_STATUSES.CHECKED_OUT && (
                    <div>{getTimeSpentInStatus(collection)}</div>
                )}
            </td>

            {/* Actions */}
            <td className="action action-column">

                <Button
                    variant="info"
                    icon={InfoIcon}
                />

                <Button
                    icon={BinIcon}
                    variant="delete"
                />

            </td>
        </tr>
    );
}