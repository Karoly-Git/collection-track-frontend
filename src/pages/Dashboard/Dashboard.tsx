import Table from '@/components/table/Table';
import SearchBar from '@/components/ui/searchbar/SearchBar';
import FilterBar from '@/components/ui/filter-bar/FilterBar';

import { GoPlus as PlusIcon } from "react-icons/go";

import Button from '@/components/ui/button/Button';
import './Dashboard.scss';

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='controls'>
                <SearchBar />
                <Button
                    variant='add-btn'
                    icon={PlusIcon}
                    text='Add collection'
                    onClick={() => { }}
                />
            </div>
            <FilterBar />
            <Table />
        </div>
    )
}
