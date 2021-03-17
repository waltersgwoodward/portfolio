import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2';


function Form() {
    const [state, handleSubmit] = useForm("mpzoozjo");
    if (state.succeeded) {
        Swal.fire({
            title: 'Message sent',
            icon: 'success',
            text: 'Thank You for reaching out! I will respond to your email within 24 hours.',
            customClass: {
                title: 'sweetalert__title',
                content: 'sweetalert__content',
                confirmButton: 'sweetalert__button'
            },
            confirmButtonText: 'Close',
            buttonsStyling: false,
        });
    }

    return (
        <div className="page">
            <div className='page-paragraph__wrap'>
                <div className="page-paragraph__header">Contact Form</div>
                <div className="page__paragraph">Please use this contact form if you:
                <div className="page__paragraph">1. Have a job that you think I might be a good fit for.</div>
                    <div className="page__paragraph">2. See something terrible or awesome in my code and want to tell me about it.</div>
                    <div className="page__paragraph">3. Need to burn some time / want a pen pal.</div>
                </div>
            </div>
            <div className='form__wrap' name='contact'>
                <form className='form__form' onSubmit={handleSubmit} action='https://formspree.io/f/mpzoozjo' method="POST">
                    <div className='form__body'>
                        <div className='form__group'>
                            <div className='form__row form__row--name'>
                                <label htmlFor='name' className='form__label'>Name</label>
                                <input id='name' type='text' name='name' className='form-row__input' placeholder='Type name here...' required />
                            </div>
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                            <div className='form__row form__row--email'>
                                <label htmlFor='email' className='form__label' >Email</label>
                                <input id='email' type='email' name='_replyto' className='form-row__input' placeholder='Type email here...' required />
                            </div>
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div id='contact_text_field' className='form__row'>
                            <label className='form__label' htmlFor='contact_text_input'>Message</label>
                            <textarea id="message" className='form-row__input--textarea'
                                type='textarea' name='message'
                                placeholder="Type message here..."
                                required
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <button className="form__button" type='submit' disabled={state.submitting}>Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
