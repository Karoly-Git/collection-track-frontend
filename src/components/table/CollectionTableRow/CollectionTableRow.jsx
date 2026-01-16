// React
import { useState } from "react";

// Redux
import { useDispatch } from "react-redux";

// Redux slices
import { openModal } from "../../../state/collection/modalSlice";

// Icons
import { BsInfoCircle as InfoIcon } from "react-icons/bs";
import { RiDeleteBin2Line as BinIcon } from "react-icons/ri";

// Utils
import { formatTime } from "../../../utils/formatTime";

// UI Components
import Button from "../../ui/button/Button";
import StatusBadge from "../StatusBadge/StatusBadge";

// Styles
import "./CollectionTableRow.css";

const userLoggedIn = true;

export default function CollectionTableRow({ collection }) {
    const dispatch = useDispatch();

    const handleOpenModal = (name) => {
        dispatch(openModal({ name }));
    };

    const {
        id,
        materialName,
        customerName,
        collectionRefNum,
        checkedInAt,
        currentStatus,
    } = collection;

    return (
        <tr className="collection-table-row">
            <td>
                <button
                    className="cell-btn material-name"
                >
                    <div>{id} {materialName}</div>
                </button>
                <div className="time-checked-in">
                    {formatTime(checkedInAt)}
                </div>
            </td>

            <td>
                <button
                    className="cell-btn customer-name"
                >
                    {customerName}
                </button>
            </td>

            <td>
                <button
                    className="cell-btn collection-ref-number"
                >
                    {collectionRefNum}
                </button>
            </td>

            <StatusBadge
                collectionId={id}
                currentStatus={currentStatus}
                onClick={() => handleOpenModal("status")}
            />

            <td className="action">
                <Button
                    icon={InfoIcon}
                    className="icon-btn info"
                    onClick={() => handleOpenModal("info")}
                />

                {userLoggedIn && (
                    <Button
                        icon={BinIcon}
                        className="icon-btn delete"
                        onClick={() => handleOpenModal("delete")}
                    //onClick={() => handleDeleteClick(id)}
                    />
                )}
            </td>
        </tr >
    );
}
