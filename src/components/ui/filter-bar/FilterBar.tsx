import { useState } from "react";

import "./FilterBar.scss";

import { IoMdClose as ResetFiltersIcon } from "react-icons/io";
import { IoTodaySharp as TodayIcon } from "react-icons/io5";

import { COLLECTION_STATUSES } from "@/constants/status-config";
import { STATUS_ICONS } from "@/constants/status-icons";

import { formatText } from "@/utils/formatText";
import Button from "@/components/ui/button/Button";

type Status = typeof COLLECTION_STATUSES[keyof typeof COLLECTION_STATUSES];

const STATUSES = Object.values(COLLECTION_STATUSES) as Status[];

const createDefaultStatusFilters = (): Record<Status, boolean> =>
    STATUSES.reduce((acc, status) => {
        acc[status] = true;
        return acc;
    }, {} as Record<Status, boolean>);

type StatusChipProps = {
    label: string;
    icon?: React.ElementType;
    active: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
};

function StatusChip({
    label,
    icon: Icon,
    active,
    onChange,
    className = "",
}: StatusChipProps) {
    return (
        <label className={`status-chip ${active ? "active" : ""} ${className}`}>
            <input
                type="checkbox"
                checked={active}
                onChange={(e) => onChange(e.target.checked)}
            />

            <span className="chip-label">
                {Icon && <Icon className="chip-icon" />}
                <span className="chip-text">{label}</span>
            </span>
        </label>
    );
}

export default function FilterBar() {
    const [showTodayOnly, setShowTodayOnly] = useState(true);
    const [statusFilters, setStatusFilters] = useState<Record<Status, boolean>>(
        createDefaultStatusFilters
    );

    const isStatusFilterActive = Object.values(statusFilters).some(
        (checked) => !checked
    );

    const isAnyFilterApplied = !showTodayOnly || isStatusFilterActive;

    const resetFilters = () => {
        setShowTodayOnly(true);
        setStatusFilters(createDefaultStatusFilters());
    };

    const toggleStatus = (status: Status) => {
        setStatusFilters((prev) => ({
            ...prev,
            [status]: !prev[status],
        }));
    };

    return (
        <div className="filter-bar">
            {/* Today filter */}
            <StatusChip
                label="Today"
                icon={TodayIcon}
                active={showTodayOnly}
                onChange={setShowTodayOnly}
            />

            {/* Status filters */}
            {STATUSES.map((status) => (
                <StatusChip
                    key={status}
                    label={formatText(status)}
                    icon={STATUS_ICONS[status]}
                    active={statusFilters[status]}
                    className={`status-${status.toLowerCase()}`}
                    onChange={() => toggleStatus(status)}
                />
            ))}

            {/* Reset filters */}
            {isAnyFilterApplied && (
                <Button
                    type="button"
                    icon={ResetFiltersIcon}
                    variant="btn only-icon"
                    onClick={resetFilters}
                />
            )}
        </div>
    );
}