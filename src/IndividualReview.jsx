import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getReviewByID } from './api'
import './Styles/IndividualReview.css'
import {Link} from 'react-router-dom'

const IndividualReview = () => {
    const [review, setReview] = useState(null)
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
    }, [review])

    if (isLoading) {
        return <h4>Loading...</h4>
    }

    if (error !== null) {
        return <h4>Error: Please go back</h4>
    }

    return (
        <div>
        <Link to={`/reviews/${review.title}`} key={review_id} ></Link>
        <li className='review-item'>
            <div className="top-half">
            <div className="top-left">
            <img src={review.review_img_url} alt='The game being reviewed' width='250px' height='250px'/>
            </div>
            <div className="top-right">
            <h3>{review.title}</h3>
            Votes: {review.votes}
            <br />
            Comments({review.comment_count})
            <br/>
            </div>
            </div>
            <div className="bottom-half">
            Reviewed by: {review.owner}
            <br/>
            Review Date: {new Date(review.created_at).toISOString().split('T')[0]}
            </div>
            Category: {review.category}
            Designer: {review.designer}
        </li>
        </div>
    )
}

export default IndividualReview