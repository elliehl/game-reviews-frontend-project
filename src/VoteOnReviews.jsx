import { useState } from "react"

const VoteOnReviews = (props) => {
    let {votes} = props
    const [votesCount, setVotesCount] = useState(votes)

    const updateVotes = () => {
        setVotesCount((currentVotes) => currentVotes + 1)
    }

    return (
        <div>
        <h5 aria-label="votes">Votes: {votes + votesCount}</h5>
        <button onClick={updateVotes}>Vote if this review was helpful</button>
        </div>
    )
}

export default VoteOnReviews