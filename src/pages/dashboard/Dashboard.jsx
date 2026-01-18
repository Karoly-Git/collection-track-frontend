import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/ui/button/Button";
import { GoPlus as PlusIcon } from "react-icons/go";

import "./Dashboard.css";

import Modal from "../../components/ui/modal/Modal";
import CollectionTable from "../../components/table/CollectionTable/CollectionTable";
import AddCollectionForm from "../../components/forms/AddCollectionForm/AddCollectionForm";
import CollectionInfoForm from "../../components/forms/CollectionInfoForm/CollectionInfoForm";


import { openModal, closeModal } from "../../state/collection/modalSlice";
import UpdateStatusForm from "../../components/forms/updateStatusForm/UpdateStatusForm";
import DeleteCollectionForm from "../../components/forms/DeleteCollectionForm.jsx/DeleteCollectionForm";

export default function Dashboard() {
    const userLoggedIn = true;

    const dispatch = useDispatch();

    const activeModal = useSelector((state) => state.modal.activeModal);

    const handleOpenModal = (name) => {
        dispatch(openModal({ name }));
    };

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    const handleAddFormSubmit = (collectionData) => {
        console.log("New Collection Added:", collectionData);

        // Close only if UX requires it
        dispatch(closeModal());
    };

    const collectionId = useSelector(
        (state) => state.modal.clickedCollectionId
    );

    const { collections } = useSelector(
        (state) => state.collections
    );

    const collection = collections.find(
        (c) => c.id === collectionId
    );


    return (
        <div className="dashboard">
            <div className="dashboard-head">
                <h2>Collection Overview</h2>

                {userLoggedIn && (
                    <Button
                        icon={PlusIcon}
                        text="Add Collection"
                        className="btn add"
                        onClick={() => handleOpenModal("add")}
                    />
                )}
            </div>

            <CollectionTable />

            <Modal
                isOpen={activeModal === "add"}
                onReject={handleCloseModal}
                onAccept={handleAddFormSubmit}
                rejectBtnText={"Cancel"}
                acceptBtnText={"Add Collection"}
            >
                {/*<AddCollectionForm
                    onSubmit={handleAddFormSubmit}
                    onCancel={handleCloseModal}
                />*/}
            </Modal>

            <Modal
                isOpen={activeModal === "delete"}
                onClose={handleCloseModal}
                modalTitle="Delete Collection"
            >
                <DeleteCollectionForm onCancel={handleCloseModal} />
            </Modal>

            <Modal
                isOpen={activeModal === "info"}
                modalTitle="Collection Info"
            >
                <CollectionInfoForm
                    collection={collection}
                    onCancel={handleCloseModal}
                />
            </Modal>

            <Modal
                isOpen={activeModal === "status"}
                onClose={handleCloseModal}
                modalTitle="Status Update"
            >
                <UpdateStatusForm
                    onCancel={handleCloseModal}
                />
            </Modal>
        </div>
    );
}
