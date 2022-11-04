import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getReviewByID } from './api'
import './Styles/IndividualReview.css'
import VoteOnReviews from './VoteOnReviews'

const IndividualReview = () => {
    const [review, setReview] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const {review_id} = useParams()

    useEffect(() => {
        setIsLoading(true)
        getReviewByID(review_id)
        .then(review => {
            setIsLoading(false)
            setReview(review)
        }).catch((err) => {
            setIsLoading(false)
            setError(err)
        })
    }, [])

    if (isLoading) {
        return <h4>Loading...</h4>
    }

    if (error !== null) {
        return <h4>Error: Please go back</h4>
    }
    
    return (
        <div>
        <li className='review-item-solo'>
            <div className="layout-solo">
            <div className='review-image'>
            <img src={review.review_img_url} alt='The game being reviewed' width='400px' height='400px'/>
            </div>
            <div className="right-solo">
            <div className='review-title'>
            <h3>{review.title}</h3>
            Reviewed by: {review.owner}
            </div>
            <br/>
            <div className='review-body'>
            {review.review_body}
            </div>
            <VoteOnReviews votes={review.votes} review_id={review.review_id}/>
            <br />
            Comments({review.comment_count})
            <br/>
            Category: {review.category}
            <br/>
            Designer: {review.designer}
            </div>
            </div>
        </li>
        </div>
    )
}

export default IndividualReview