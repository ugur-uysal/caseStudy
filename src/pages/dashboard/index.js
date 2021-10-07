
import {
    useEffect,
    useState
} from 'react';
import {
    getAll
} from '../../services';
import {
    Loading,
    Card
} from '../../components';
import {
    ChevronLeft,
    ChevronRight
} from 'react-feather';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [allData, setAllData] = useState({});
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAll(page).then((data) => {
            setAllData(data);
            setLoading(false);
            window.scroll({ top: 0, behavior: 'smooth' });
        });
    }, [page]);

    const getPage = () => {
        let buttons = [];
        for (let i = 1; i <= allData.total_pages; i++) {
            buttons.push(<button onClick={() => setPage(i)} className={`btn page-btn ${allData.page === i && 'active'}`} key={i.toString()}>{i}</button>);
        }
        return buttons;
    }

    return (
        <div className="list-wrapper">
            <Loading value={loading} />
            <div className="page-head-detail">
                <h1>All Members</h1>
                <Link to="/create" className="btn create-btn">Create New Member</Link>
            </div>
            <div className="lists">
                {allData.data?.map((value, index) => {
                    return <Card key={index} {...value} />
                })}
            </div>
            <div className="navigation">
                <button onClick={() => setPage(page - 1)} disabled={page === 1} className="btn page-btn prev"><ChevronLeft /></button>
                {getPage()}
                <button onClick={() => setPage(page + 1)} className="btn page-btn next" disabled={page >= allData.total_pages}><ChevronRight /></button>
            </div>
        </div>
    );
}

export default Dashboard;
