import { useEffect, useState } from 'react'
import './Styles/ViewComments.css'
import {getCommentsByReviewID} from './api'
import { useParams } from 'react-router-dom'

const ViewComments = ({comments}) => {
    const [commentsList, setCommentsList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const {review_id} = useParams()

    useEffect(() => {
        setIsLoading(true)
        getCommentsByReviewID(review_id)
        .then(comments => {
            setIsLoading(false)
            setCommentsList(comments)
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
            <ul>
                {commentsList.map(
                    ({
                        body,
                        comment_id,
                        author,
                        created_at,
                        review_id,
                        votes
                    }) => {
                    return (
                        <li key={comment_id}>
                        Comment: {body}
                        Author: {author}
                        Comment Date: {created_at}
                        Votes: {votes}
                        </li>
                    )
                    })}
            </ul>
        </div>
    )
}

export default ViewComments
