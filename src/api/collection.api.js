import { API_URL } from "./config";

export const getAllCollections = async () => {
    const response = await fetch(`${API_URL}/collections`, {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch collections (${response.status})`);
    }

    return response.json();
};

export const getCollectionById = async (id) => {
    const response = await fetch(`${API_URL}/collections/${id}`, {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch collection with ID ${id} (${response.status})`);
    }

    return response.json();
};

export const deleteCollection = async (id) => {
    const response = await fetch(`${API_URL}/collections/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error(`Failed to delete collection with ID ${id} (${response.status})`);
    }

    return response.json();
};

export const updateCollectionStatus = async ({
    collectionId,
    status,
    userId,
    comment,
}) => {
    const response = await fetch(`${API_URL}/collections/${collectionId}/status`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            status,
            updatedBy: { userId },
            comment,
        }),
    });

    if (!response.ok) {
        throw new Error(
            `Failed to update status for collection with ID ${collectionId} (${response.status})`
        );
    }

    return response.json();
};
