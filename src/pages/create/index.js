
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../../components';
import { getById, save } from '../../services';

const Detail = ({ match }) => {

  const [allData, setAllData] = useState({});
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  const [message, setMessage] = useState({});

  useEffect(() => {
    if (match.params.id) {
      setLoading(true);
      getById(match.params.id).then(({ data }) => {
        setAllData(data);
        setLoading(false);
      })
    }
  }, []);

  const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const onSave = () => {
    if (form.email && form.job) {
      setLoading(true);
      save({ ...form }).then(({ id }) => {
        setLoading(false);
        if (id) {
          setMessage({ type: 'success', message: 'Saved successfully' });
          setTimeout(() => setMessage({}), 3000);
          setForm({});
        }
      });
    } else {
      setMessage({ type: 'error', message: 'Please. Fill in the blanks' });
      setTimeout(() => setMessage({}), 3000);
    }
  }

  return (
    <div className="pages create">
      <Loading value={loading} />
      <div className="box create">
        <h2>Create Member</h2>
        <div className="form">
          {message.message && <div className={`message ${message.type}`}>{message.message}</div>}
          <div className="col">
            <input name="email" value={form.email} placeholder="Email" onChange={handleChange} />
          </div>
          <div className="col">
            <input name="job" value={form.job} placeholder="Job" onChange={handleChange} />
          </div>
          <div className="col">
            <button className="btn primary" onClick={onSave}>Create</button>
          </div>
          <div className="col">
            <Link to="/" className="btn primary">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;