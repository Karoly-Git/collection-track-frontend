import data from "@/constants/data.json";
import type { Collection } from "@/types/collection";

const sortedCollections = data as Collection[];

// Icons
//import { IoSearchSharp as SearchIcon } from "react-icons/io5";
//import { LuArrowDownAZ as AscAbcIcon } from "react-icons/lu";
//import { LuArrowUpAZ as DescAbcIcon } from "react-icons/lu";
//import { RiSortNumberAsc as AscNumIcon } from "react-icons/ri";
//import { RiSortNumberDesc as DescNumIcon } from "react-icons/ri";

//import { RiSortNumberDesc as Icon } from "react-icons/ri";
import { SiMaterialdesignicons as MaterialIcon } from "react-icons/si";
import { LuTimer as TimerIcon } from "react-icons/lu";
import { MdOutlineCorporateFare as CustomerIcon } from "react-icons/md";
//import { AiOutlineFieldNumber } from "react-icons/ai";
import { TbNumber as RefIcon } from "react-icons/tb";
import { GrStatusInfo as StatusIcon } from "react-icons/gr";
import TableRow from './TableRow';

import './Table.scss';


export default function Table() {

    // just temporarly
    const handleSort = (text: string): string => { return text ? '' : ''; };
    const renderSortIcon = (text: string): string => { return text ? '' : ''; };

    return (
        <table className="collection-table">
            <thead>
                <tr>
                    <th onClick={() => handleSort("checkedInAt")}>
                        <span className="th-content">
                            <TimerIcon className="content-icon" />
                            <span className="content-text">Timer</span>
                            <span className="sort-icon">
                                {renderSortIcon("checkedInAt")}
                            </span>
                        </span>
                    </th>

                    <th onClick={() => handleSort("materialName")}>
                        <span className="th-content">
                            <MaterialIcon className="content-icon material-icon" />
                            <span className="content-text">Material</span>
                            <span className="sort-icon">
                                {renderSortIcon("materialName")}
                            </span>
                        </span>
                    </th>

                    <th className="customer-column" onClick={() => handleSort("customerName")}>
                        <span className="th-content">
                            <CustomerIcon className="content-icon" />

                            <span className="content-text">Customer</span>
                            <span className="content-icon" />
                            <span className="sort-icon">
                                {renderSortIcon("customerName")}
                            </span>
                        </span>
                    </th>

                    <th onClick={() => handleSort("collectionRefNum")}>
                        <span className="th-content">
                            <RefIcon className="content-icon ref-icon" />

                            <span className="content-text">Reference</span>
                            <span className="content-icon" />
                            <span className="sort-icon">
                                {renderSortIcon("collectionRefNum")}
                            </span>
                        </span>
                    </th>

                    <th onClick={() => handleSort("currentStatus")}>
                        <span className="th-content">
                            <StatusIcon className="content-icon" />

                            <span className="content-text">Status</span>
                            <span className="content-icon" />
                            <span className="sort-icon">
                                {renderSortIcon("currentStatus")}
                            </span>
                        </span>
                    </th>
                </tr>
            </thead>

            <tbody>
                {sortedCollections.map((collection) => (
                    <TableRow
                        key={collection.id}
                        collection={collection}
                    />
                ))}
            </tbody>
        </table>
    )
}
