import { FiLogIn, FiCheckCircle, FiLogOut } from "react-icons/fi";
import { LuForklift } from "react-icons/lu";

export const COLLECTION_STATUSES = {
    CHECKED_IN: {
        text: "CHECKED_IN",
        icon: FiLogIn,
    },
    LOADING_IN_PROGRESS: {
        text: "LOADING_IN_PROGRESS",
        icon: LuForklift,
    },
    LOADED: {
        text: "LOADED",
        icon: FiCheckCircle,
    },
    CHECKED_OUT: {
        text: "CHECKED_OUT",
        icon: FiLogOut,
    },
} as const;