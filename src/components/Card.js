import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, avatar, email, first_name, last_name, back }) => {
  return <div className="box">
    <div className="images">
      <div className="image-box">
        <img src={avatar} alt="characters" />
      </div>
    </div>
    <div className="column-main">
      <h2>{first_name} {last_name}</h2>
      <span>{email}</span>
    </div>
    {!back ? <Link to={`/detail/${id}`} className="btn review-button">Review</Link>
      : <Link to="/" className="btn back-button">Back</Link>}
  </div>;
}

export default Card;