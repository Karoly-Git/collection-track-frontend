const getAllLorries = async () => {
    try {
        const response = await fetch('http://localhost:8000/lorries');

        if (!response.ok) {
            throw new Error(`Failed to fetch lorries (${response.status})`);
        }

        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default getAllLorries;