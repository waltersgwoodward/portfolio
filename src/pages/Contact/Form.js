import React from 'react';
import Swal from 'sweetalert2';
import emailjs, { init } from 'emailjs-com';
init("user_ips7Vhyd04ZnvJuW5GXzL");

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_qt25ufu', 'template_6wb8xsv', e.target, 'user_ips7Vhyd04ZnvJuW5GXzL')
      .then((result) => {
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
      }, (error) => {
        Swal.fire({
            title: 'Error!',
            icon: 'error',
            text: 'Sorry! We could not process your request. Please try again later. Thank You!',
            customClass: {
                title: 'sweetalert__title',
                content: 'sweetalert__content',
                confirmButton: 'sweetalert__button'
            },
            confirmButtonText: 'Close',
            buttonsStyling: false,
        });
      });
  }

  return (
     <div className="page">
        <div className='page-paragraph__wrap'>
            <div className="page-paragraph__header">Contact Form</div>
        </div>
        <div className='form__wrap' name='contact'>
            <form className='form__form' onSubmit={sendEmail}>
                <div className='form__body'>
                    <div className='form__group'>
                        <div className='form__row form__row--name'>
                            <label htmlFor='user_name' className='form__label'>Name</label>
                            <input id='user_name' type='text' name='user_name' className='form-row__input' placeholder='Type name here...' required />
                        </div>
                        <div className='form__row form__row--email'>
                            <label htmlFor='user_email' className='form__label' >Email</label>
                            <input id='user_email' type='email' name='user_email' className='form-row__input' placeholder='Type email here...' required />
                        </div>
                    </div>
                    <div id='contact_text_field' className='form__row'>
                        <label className='form__label' htmlFor='contact_text_input'>Message</label>
                        <textarea id="message" className='form-row__input--textarea'
                            type='textarea' name='message'
                            placeholder="Type message here..."
                            required
                        />
                    </div>
                    <button className="form__button" type='submit'>Send</button>
                </div>
            </form>
        </div>
    </div>
  );
}