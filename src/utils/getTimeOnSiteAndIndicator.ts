type DurationColor = "green" | "blue" | "red";

interface DurationResult {
    time: string; // "hh:mm:ss"
    color: DurationColor;
}

export const getTimeOnSiteAndIndicator = (
    startTime: string | number | Date
): DurationResult => {
    const startMs = new Date(startTime).getTime();
    const nowMs = Date.now();

    if (isNaN(startMs) || nowMs < startMs) {
        return { time: "--:--:--", color: "green" };
    }

    const durationMs = nowMs - startMs;

    const totalSeconds = Math.floor(durationMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const time = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
    )}:${String(seconds).padStart(2, "0")}`;

    const durationHours = totalSeconds / 3600;

    let color: DurationColor;

    if (durationHours <= 1) {
        color = "green";
    } else if (durationHours < 2) {
        color = "blue";
    } else {
        color = "red";
    }

    return { time, color };
};