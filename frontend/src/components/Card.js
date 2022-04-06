import React from 'react';

export default function Card (props) {
    const {bookmark} = props;
    return ( 
        <div key={bookmark._id} className="card">
            <a href={bookmark.url} target='_blank' rel='noopener noreferrer'>  {/* opens link in new tab*/}
            <div className='dogear'></div>
            <img src={bookmark.image} alt=""/>
            <h1>{bookmark.title}</h1>
            <h2>{bookmark.description}</h2>
            </a>
            <div className='card-options'>
                <h3>{bookmark.tags}</h3>
                <button>
                    <img src="./images/elipsis.png" alt='card options'/>
                </button>
            </div>
            
            <h4>{bookmark.url}</h4>
        </div>
     )
}


