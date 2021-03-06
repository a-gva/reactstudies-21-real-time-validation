import { useState } from 'react'
import Card from "./shared/Card";
import Button from './shared/Button';

function FeedbackForm() {

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>Como você avalia nosso serviço?</h2>
                {/* rating select component */}
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Envie sua avaliação" value={text} />
                    <Button type="submit" isDisabled={btnDisabled} className="btn">
                        Enviar</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>)
}

export default FeedbackForm;
