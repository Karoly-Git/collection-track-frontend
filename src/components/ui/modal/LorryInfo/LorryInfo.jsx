import { formatText } from '../../../../utils/formatText';
import { formatTime } from '../../../../utils/formatTime';
import './LorryInfo.css';

export default function LorryInfo({ lorry }) {
    if (!lorry) return null;

    const {
        lorryId,
        regNum,
        materialName,
        customerName,
        collectionRefNum,
        checkedInAt,
        checkedOutAt,
        currentStatus,
        statusHistory
    } = lorry;

    return (
        <div className="lorry-info">
            <h2>COLLECTION INFO</h2>

            <div className="lorry-details">
                <p><strong>Material:</strong> <span>{materialName}</span></p>
                <p><strong>Customer:</strong> <span>{customerName}</span></p>
                <p><strong>Reference number:</strong> <span>{collectionRefNum}</span></p>
                <p><strong>Registration number:</strong> <span>{regNum}</span></p>
                <p><strong>Current status:</strong> <span>{formatText(currentStatus)}</span></p>
                <p><strong>Checked In at:</strong> <span>{checkedInAt ? formatTime(checkedInAt) : "-"}</span></p>
                <p><strong>Checked Out at:</strong> <span>{checkedOutAt ? formatTime(checkedOutAt) : "-"}</span></p>
            </div>

            <h3>Status History</h3>

            <ul className="status-history">
                {statusHistory.map((entry) => (
                    <li key={entry.timestamp} className="status-entry">
                        <div>
                            <strong>{formatText(entry.status)}</strong>
                            <span className="timestamp">
                                {" "} {formatTime(entry.timestamp)}
                            </span>
                        </div>

                        <div className="updated-by">
                            Updated by: {entry.updatedBy?.userId}
                        </div>

                        {entry.comments?.length > 0 && (
                            <ul className="comments">
                                {entry.comments.map((comment) => (
                                    <li key={comment.id}>
                                        <em>{comment.text}</em>
                                        <div className="comment-meta">
                                            {comment.userId} •{" "}
                                            {formatTime(comment.timestamp)}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
