import "../FormStyle.css";
import Button from "../../ui/button/Button";

export default function AddCommentForm({ lorryId, onCancel }) {

    async function handleSubmit(e) {
        e.preventDefault();
        // Here you would typically gather form data and dispatch an action
        // to add the comment to the lorry with the given lorryId.
        // For example:
        // const comment = e.target.elements.comment.value;
        // await dispatch(addCommentToLorry({ lorryId, comment }));
        onCancel(); // Close the form after submission
    };
    return (
        <form className="form add-comment-form" onSubmit={handleSubmit}>
            <textarea
                placeholder="Write your comment here..."
            />
            <div className="actions">
                <Button
                    type="button"
                    text="Cancel"
                    className="btn reject"
                    onClick={onCancel}
                />

                <Button
                    type="submit"
                    text="Add Comment"
                    className="btn accept"
                />
            </div>
        </form>
    )
}
