import propTypes from 'prop-types';
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedbackPropValue, handleDelete }) {

    if (!feedbackPropValue || feedbackPropValue.length === 0) {
        return <p>No feedback yet</p>
    }

    return (
        <div className="feedback-list">
            {feedbackPropValue.map((item) => (
                // <div>{item.rating}</div>
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            text: propTypes.string.isRequired,
            rating: propTypes.number.isRequired
        })
    )
}

export default FeedbackList;