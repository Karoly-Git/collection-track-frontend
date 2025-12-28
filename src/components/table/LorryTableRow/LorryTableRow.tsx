export default function LorryTableRow({ lorry }) {
    const {
        lorryId,
        regNum,
        collectionRefNum,
        currentStatus
    } = lorry;

    return (
        <tr>
            <td>{lorryId}</td>
            <td>{regNum}</td>
            <td>{collectionRefNum}</td>
            <td>{currentStatus}</td>
        </tr>
    );
}
