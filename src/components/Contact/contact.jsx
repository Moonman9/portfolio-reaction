import "./contact.scss"
import { useForm } from '@formspree/react';
import { validateEmail } from '../../utils/helpers';
import { useState } from 'react';
 
export default function Contact() {
    const [state, submit ] = useForm("blink182");
    const [formInput, setFormInput ] = useState({ name: '', email: '', message: ''});
    const [errMessage, setErrMessage] = useState('');
    const { name, email, message } = formInput;

    function refreshPage() {
        window.location.reload(false);
    }
    if(state.succeeded) {
        return (
            <div>
                <p>your message has been sent. I will get back to you soon.</p>
                <button className="btn" onClick={refreshPage}>Submit New Form</button>
            </div>
        )
    }

    const validateMessage = (e) => {
        if (e.target.name === 'email') {
            const valid = validateEmail(e.target.value);
            if(!valid) {
                setErrMessage('not a valid email.')
            } else {
                setErrMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrMessage(`a ${e.target.name} is required.`);
            } else {
                setErrMessage('');
            }
        }
        if (!errMessage) {
            setFormInput({...formInput, [e.target.name]: e.target.value });
            console.log('Handle Form', formInput);
        }
    };

    return (
        <div className="contact" id="contact">
            <div className="left">
                <div className="title">
                    <h1>contact me</h1>
                </div>
                <div className="wrapper">
                    <form submit={submit}>
                        <div className="field">
                            <label className='label' htmlFor="name">name</label>
                            <input className='input' type='text' name='name' defaultValue={name} onBlur={validateMessage} />
                        </div>
                        <div className="field">
                            <label className='label' htmlFor="email">email</label>
                            <input className='input' type='email' name='email' defaultValue={email} onBlur={validateMessage} />
                        </div>
                        <div className="field">
                            <label className='label' htmlFor="message">message</label>
                            <input className='input' type='text' name='message' defaultValue={message} onBlur={validateMessage} />
                        </div>
                        {errMessage && (
                            <div>
                                <p className="danger">{errMessage}</p>
                            </div>
                        )}
                        <button className="btn" type="submit">submit</button>
                    </form>
                </div>
            </div>
            <div className="right">
                <div className="container">
                    <img src="assets/redeye.jpg" alt="red gradient face pic" />
                </div>
            </div>
        </div>
    );
}

