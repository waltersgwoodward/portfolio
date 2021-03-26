import React from 'react';
import emailjs, { init } from 'emailjs-com';
init("user_ips7Vhyd04ZnvJuW5GXzL");

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_qt25ufu', 'template_6wb8xsv', e.target, 'user_ips7Vhyd04ZnvJuW5GXzL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
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
         <form className='form__form' onSubmit={sendEmail}>
             <div className='form__body'>
                 <div className='form__group'>
                     <div className='form__row form__row--name'>
                         <label htmlFor='name' className='form__label'>Name</label>
                         <input id='name' type='text' name='name' className='form-row__input' placeholder='Type name here...' required />
                     </div>
                     <div className='form__row form__row--email'>
                         <label htmlFor='email' className='form__label' >Email</label>
                         <input id='email' type='email' name='_replyto' className='form-row__input' placeholder='Type email here...' required />
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