import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ item }) {
    return (
        <div className='mt-4 my-3 p-3'>
            <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                <figure>
                    <img src={item.image} alt="Course" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title bg-pink-500 text-white rounded-md inline-block px-2">
                        {item.name}
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions flex justify-center mt-2 mb-1">
                        <Link to={`/course/${item.id}`} className="badge badge-outline px-4 py-2 duration-200 hover:bg-pink-500 hover:text-white cursor-pointer">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
