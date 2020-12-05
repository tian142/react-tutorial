import React from 'react';
import './POPOSSpace.css';
import { Link } from 'react-router-dom';

const POPOSSpace = ({ name, image, address, hours, id }) => {
  return (
    <div className="POPOSSpace">
      <h3>
        <Link to={`/details/${id}`}>{name}</Link>
      </h3>
      <img
        src={`${process.env.PUBLIC_URL}images/${image}`}
        // src='public\images\50-california-st.jpg'
        width="300"
        height="300"
        alt="hello"
      />
      <div>{address}</div>
      <p>{hours}</p>
    </div>
  );
};

export default POPOSSpace;
