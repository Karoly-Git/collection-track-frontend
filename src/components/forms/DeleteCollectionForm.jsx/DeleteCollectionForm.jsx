import "../FormStyle.css";
import "./DeleteCollectionForm.css";
import Button from "../../ui/button/Button";
import { useSelector } from "react-redux";

export default function DeleteCollectionForm({ onCancel }) {
    const collectionId = useSelector((state) => state.modal.clickedCollectionId);

    const collection = useSelector((state) =>
        state.collections.collections.find((c) => c.id === collectionId)
    );

    async function handleSubmit(e) {
        e.preventDefault();
        // Dispatch delete action here if needed
        onCancel(); // Close the form after submission
    }

    const materialName = collection?.materialName;
    const collectionRefNum = collection?.collectionRefNum;

    return (
        <form className="form delete-collection-form" onSubmit={handleSubmit}>

            <div className="form-header">
                <h2 className="warning-text">Are you sure you want to delete this collection?</h2>
            </div>

            <div className="identifier">
                <div className="identifier-row">
                    <span className="label">ID:</span>
                    <span className="value">{collectionId}</span>
                </div>
                <div className="identifier-row">
                    <span className="label">Material:</span>
                    <span className="value">{materialName}</span>
                </div>

                <div className="identifier-row">
                    <span className="label">Reference:</span>
                    <span className="value">{collectionRefNum}</span>
                </div>
            </div>

            <div className="actions">
                <Button
                    type="button"
                    text="Cancel"
                    className="btn reject"
                    onClick={onCancel}
                />

                <Button
                    type="submit"
                    text="Delete Collection"
                    className="btn accept"
                />
            </div>
        </form>
    );
}
