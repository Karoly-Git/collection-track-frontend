import Table from '@/components/table/Table';
import './Dashboard.scss';
import SearchBar from '@/components/ui/search/SearchBar';

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <SearchBar />
            <Table />
        </div>
    )
}
