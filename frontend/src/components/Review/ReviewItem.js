import { useDispatch, useSelector } from 'react-redux';
import './Review.css'
import { useEffect, useState } from 'react';
import { fetchUser } from '../../store/userReducer';

const ReviewItem = ({ review }) => {
	const dispatch = useDispatch();
	const userId = review?.userId;
	const user = useSelector(state => state.users.user);

	useEffect(() => {
		dispatch(fetchUser(userId));
	}, [dispatch, userId])

	return (
		<div className='review-item-container'>
			<div className='review-item-header'>
				<img src='' alt='' className='review-item-profile-icon'/>
				<div className='review-item-name'>
					{user?.username}
					{review?.rating === 100 ? 'Recommends' : 'Does not Recommend'}
				</div>
			</div>
			<div className='review-item-body'>
				{review?.body}
			</div>
		</div>
	)
}

export default ReviewItem;