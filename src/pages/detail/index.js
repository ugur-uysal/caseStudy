
import { useEffect, useState } from 'react';
import { Card, Loading } from '../../components';
import { getById } from '../../services';

const Detail = ({ match }) => {
    const [allData, setAllData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (match.params.id) {
            setLoading(true);
            getById(match.params.id).then(({ data }) => {
                setAllData(data);
                setLoading(false);
            })
        }
    }, []);

    return (
        <div className="pages profile">
            <Loading value={loading} />
            <Card {...allData} back={true} />
        </div>
    );
}

export default Detail;