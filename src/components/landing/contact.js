import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
    name: '',
    email: '',
    message: '',
}
export const Contact = (props) => {
    const [{ name, email, message }, setState] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setState((prevState) => ({ ...prevState, [name]: value }))
    }
    const clearState = () => setState({ ...initialState })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, message)
        emailjs
            .sendForm(
                'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
            )
            .then(
                (result) => {
                    console.log(result.text)
                    clearState()
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }
    return (
        <div>
            <div id='contact'>
                <div className='container'>
                        <div className='row'>
                            <div className='social'>
                                <ul>
                                    <li>
                                        <a href={props.data ? props.data.git1 : '/'}>
                                            <i className='fa fa-github'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>
            <div id='footer'>
            </div>
        </div>
    )
}
