import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Spot.css';

const SpotIndexItem = ({ spot }) => {
	const photo = 'https://hypecamp-seeds.s3.us-west-1.amazonaws.com/cabin.jpg';
	return (
		<>
			<div className='container'>
				<div className='spots-index-item'>
					{/* spot.photoUrls[0] */}
					<img src={photo} className='item-photo'/>
			
					<div className='text-container'>
						<p className='spot-rating'> 
							<i className="fa-solid fa-thumbs-up" style={{fontSize: '16px'}}></i>
							<p className='rating'> 100% (42) </p>
						</p>
						<Link to={`/spots/${spot.id}`} className='spot-name'>
							{spot.name}
						</Link>
						<p className='spot-text'>{spot.city}, {spot.state}</p>
						<p className='spot-text'>from ${spot.price}/night</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default SpotIndexItem;