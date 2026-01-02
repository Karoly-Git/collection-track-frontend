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
            <div>Info Icon Placeholder</div>
            <h2>COLLECTION INFO</h2>

            <div className="lorry-details">
                <p><strong>Lorry ID:</strong> {lorryId}</p>
                <p><strong>Registration:</strong> {regNum}</p>
                <p><strong>Material:</strong> {materialName}</p>
                <p><strong>Customer:</strong> {customerName}</p>
                <p><strong>Reference number:</strong> {collectionRefNum}</p>
                <p><strong>Current status:</strong> {formatText(currentStatus)}</p>
                <p>
                    <strong>Checked In at:</strong>{" "}
                    {checkedInAt ? formatTime(checkedInAt) : "-"}
                </p>
                <p>
                    <strong>Checked Out at:</strong>{" "}
                    {checkedOutAt ? formatTime(checkedOutAt) : "-"}
                </p>
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
