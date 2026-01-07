import "../FormStyle.css";
import "./DeleteCollectionForm.css";
import Button from "../../ui/button/Button";

export default function DeleteCollectionForm({ lorry, onCancel }) {

    async function handleSubmit(e) {
        e.preventDefault();
        // Dispatch delete action here if needed
        onCancel(); // Close the form after submission
    }

    const materialName = lorry?.materialName;
    const collectionRefNum = lorry?.collectionRefNum;

    return (
        <form className="form delete-collection-form" onSubmit={handleSubmit}>

            <div className="form-header">
                <h2>Delete Collection</h2>
                <p className="warning-text">
                    Are you sure you want to delete this collection?
                </p>
            </div>

            <div className="identifier">
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
