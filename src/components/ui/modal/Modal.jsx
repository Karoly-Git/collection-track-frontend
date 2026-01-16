import { useEffect } from "react";
import "./Modal.css";
import Button from "../button/Button";

import { IoMdClose } from "react-icons/io";

export default function Modal({
    isOpen, onReject, onAccept, rejectBtnText, acceptBtnText, children }) {
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onReject();
                document.activeElement?.blur?.();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onReject]);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        // ✅ only close when clicking the overlay background itself
        if (e.target === e.currentTarget) onReject();
    };

    const stopPropagation = (e) => e.stopPropagation();

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div
                className="modal-container"
                onClick={stopPropagation}
                onMouseDown={stopPropagation} // ✅ helps in some cases
            >
                <div className="modal-header">
                    <Button icon={IoMdClose} className="btn transparent" onClick={onReject} />
                </div>

                <div className="modal-body">
                    {children}
                </div>

                <div className="modal-footer">
                    {onReject && <Button text={rejectBtnText} className="btn reject" onClick={onReject} />}
                    {onAccept && <Button className="btn accept" text={acceptBtnText} onClick={onAccept} />}
                </div>
            </div>
        </div>
    );
}

