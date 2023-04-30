import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categorise, setCategorise] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategorise(data))
    }, [])
    return (
        <div>
            <h4>Category</h4>
          <div className='ps-3 mt-3'>
          {
                categorise.map(category=><p key={category.id}>
                    <Link className='text-secondary text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
          </div>
        </div>
    );
};

export default LeftNav;