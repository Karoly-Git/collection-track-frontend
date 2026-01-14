import "./ErrorState.css";

export default function ErrorState({
    title = "Something went wrong",
    message = "We couldn't load the data. Please try again.",
    actionLabel,
    onAction
}) {
    return (
        <div className="error-state">
            <div className="error-icon">⚠️</div>
            <h2>{title}</h2>
            <p>{message}</p>

            {actionLabel && onAction && (
                <button className="error-action-btn" onClick={onAction}>
                    {actionLabel}
                </button>
            )}
        </div>
    );
}
