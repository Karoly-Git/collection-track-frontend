import { COLLECTION_STATUSES } from "@/constants/status-config";
import type { Collection } from "@/types/collection";

export const getTimeSpentInStatus = (collection: Collection): string => {

    const { checkedInAt, checkedOutAt, currentStatus, statusHistory } = collection;

    const now = Date.now();

    const startedLoadingAt =
        statusHistory.find((s) => s.status === "LOADING_IN_PROGRESS")?.timestamp;

    const finishedLoadingAt =
        statusHistory.find((s) => s.status === "LOADED")?.timestamp;

    const checkedIn = checkedInAt ? new Date(checkedInAt).getTime() : null;
    const started = startedLoadingAt ? new Date(startedLoadingAt).getTime() : null;
    const finished = finishedLoadingAt ? new Date(finishedLoadingAt).getTime() : null;
    const checkedOut = checkedOutAt ? new Date(checkedOutAt).getTime() : null;

    const formatMsToHHMMSS = (ms: number | null): string => {
        if (ms == null) return "--:--:--";

        const totalSeconds = Math.floor(ms / 1000);
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
        const seconds = String(totalSeconds % 60).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}`;
    };

    if (!checkedIn) return "--:--:--";

    let ms: number | null = null;

    if (currentStatus === COLLECTION_STATUSES.CHECKED_IN) {
        ms = (started ?? now) - checkedIn;
    }

    else if (currentStatus === COLLECTION_STATUSES.LOADING) {
        if (!started) return "--:--:--";
        ms = (finished ?? now) - started;
    }

    else if (currentStatus === COLLECTION_STATUSES.LOADED) {
        if (!finished) return "--:--:--";
        ms = (checkedOut ?? now) - finished;
    }

    else if (currentStatus === COLLECTION_STATUSES.CHECKED_OUT) {
        if (!finished || !checkedOut) return "--:--:--";
        ms = checkedOut - finished;
    }

    return formatMsToHHMMSS(ms);
};