import { useEffect, useState } from "react";
import getAllLorries from "../../../api/lorries.api";
import LorryTableRow from "../lorryTableRow/LorryTableRow";

export default function LorryTable() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllLorries()
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading lorries…</p>;
    if (error) return <p>Failed to load lorries</p>;

    return (
        <table>
            <thead>
                <tr>
                    <th>Lorry ID</th>
                    <th>Reg num</th>
                    <th>Ref num</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map(lorry => (
                    <LorryTableRow
                        key={lorry.lorryId}
                        lorry={lorry}
                    />
                ))}
            </tbody>
        </table>
    );
}
