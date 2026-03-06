import { FiLogIn, FiCheckCircle, FiLogOut } from "react-icons/fi";
import { LuForklift } from "react-icons/lu";
import type { ElementType } from "react";

export const COLLECTION_STATUSES = {
    CHECKED_IN: "CHECKED_IN",
    LOADING: "LOADING_IN_PROGRESS",
    LOADED: "LOADED",
    CHECKED_OUT: "CHECKED_OUT",
} as const;

export type CollectionStatus =
    typeof COLLECTION_STATUSES[keyof typeof COLLECTION_STATUSES];

type StatusConfig = {
    icon: ElementType;
    variant: string;
};

export const STATUS_CONFIG: Record<CollectionStatus, StatusConfig> = {
    CHECKED_IN: {
        icon: FiLogIn,
        variant: "CHECKED_IN",
    },
    LOADING_IN_PROGRESS: {
        icon: LuForklift,
        variant: "LOADING_IN_PROGRESS",
    },
    LOADED: {
        icon: FiCheckCircle,
        variant: "LOADED",
    },
    CHECKED_OUT: {
        icon: FiLogOut,
        variant: "CHECKED_OUT",
    },
};