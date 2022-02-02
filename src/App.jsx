// Global state is the data that is shared between all the components within a React application. When the state is changed, or let’s say a filter is added, the components re-render accordingly. https://endertech.com/blog/using-reacts-context-api-for-global-state-management

import { useState } from 'react'
import Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import Card from './components/shared/Card'


function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Confirm delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header text="21. Real Time Validation" />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedbackPropValue={feedback} />
        <FeedbackList feedbackPropValue={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
