export type CollectionStatus =
    | "CHECKED_IN"
    | "LOADING_IN_PROGRESS"
    | "LOADED"
    | "CHECKED_OUT";

export type StatusHistoryItem = {
    status: CollectionStatus;
    timestamp: string;
    updatedByUserId: string;
    comments: string[];
};

export type Collection = {
    id: string;
    materialName: string;
    customerName: string;
    collectionRefNum: string;
    lorryRegNum: string | null;

    checkedInAt: string;
    startedLoadingAt: string | null;
    finishedLoadingAt: string | null;
    checkedOutAt: string | null;

    currentStatus: CollectionStatus;
    statusHistory: StatusHistoryItem[];
};