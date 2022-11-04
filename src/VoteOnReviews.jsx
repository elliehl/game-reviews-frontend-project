import { useState } from "react"
import * as api from './api'
import './Styles/VoteOnReviews.css'

// Change this to be on the individual vote page, not on the main review page

const VoteOnReviews = (props) => {
    let {votes, review_id} = props
    const [votesCount, setVotesCount] = useState(0)
    const [isVotedOnUpvote, setIsVotedOnUpvote] = useState(false)
    const [isVotedOnDownvote, setIsVotedOnDownvote] = useState(false)

    const addUpvote = () => {
        if (isVotedOnUpvote === false && isVotedOnDownvote === true) {
            setIsVotedOnDownvote(false)
            setIsVotedOnUpvote(true)
            setVotesCount((currentVotes) => currentVotes + 2)
            api.updateVoteCount (2, review_id)
        } else if (isVotedOnUpvote === false && isVotedOnDownvote === false) {
            setIsVotedOnUpvote(true)
            setVotesCount((currentVotes) => currentVotes + 1)
            api.updateVoteCount(1, review_id)
        } else if (isVotedOnUpvote === true) {
            setIsVotedOnUpvote(false)
            setVotesCount(0)
            api.updateVoteCount(-1, review_id)
        }
    }

    const addDownvote = () => {
        if (isVotedOnDownvote === false && isVotedOnUpvote === true) {
            setIsVotedOnUpvote(false)
            setIsVotedOnDownvote(true)
            setVotesCount((currentVotes) => currentVotes - 2)
            api.updateVoteCount(-2, review_id)
        } else if (isVotedOnDownvote === false) {
            setIsVotedOnDownvote(true)
            setVotesCount((currentVotes) => currentVotes - 1)
            api.updateVoteCount(-1, review_id)
        } 
        else if (isVotedOnDownvote === true) {
            setIsVotedOnDownvote(false)
            setVotesCount(0)
            api.updateVoteCount (1, review_id)
        }
    }

    return (
        <div className="voting-layout">
        <button className={isVotedOnUpvote ? 'upvote-clicked' : 'not-clicked'} onClick={() => addUpvote()}>This review was helpful</button>
        <h5 aria-label="votes">Votes: {votes + votesCount}</h5>
        <button className={isVotedOnDownvote ? 'downvote-clicked' : 'not-clicked'} onClick={() => addDownvote()}>This review was not helpful</button>
        </div>
    )
}

export default VoteOnReviews