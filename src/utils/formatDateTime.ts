type FormatDateTimeOptions = {
    date?: boolean;
    time?: boolean;
    locale?: string;
};

export const formatDateTime = (
    timestamp: string | Date | null,
    { date = false, time = false, locale = "en-GB" }: FormatDateTimeOptions = {}
): string => {

    if (!timestamp || (!date && !time)) return "";

    const value = timestamp instanceof Date ? timestamp : new Date(timestamp);

    const options: Intl.DateTimeFormatOptions = {};

    if (date) options.dateStyle = "short";
    if (time) {
        options.hour = "2-digit";
        options.minute = "2-digit";
    }

    return value.toLocaleString(locale, options);
};