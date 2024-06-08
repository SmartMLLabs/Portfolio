// import React, { useState} from 'react'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './Footer';


// function ContactForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Replace with your actual email sending logic (e.g., using an API)
//     try {
//       await fetch('/your-api-endpoint', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, message }),
//       });
//       setSubmitted(true);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-8">
//           <div className="contact-form">
//             <h2>Contact Us</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="name" className="form-label">
//                   Your Name:
//                 </label>
//                 <input
//                   type="text"
//                   className="form-input"
//                   id="name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="email" className="form-label">
//                   Your Email:
//                 </label>
//                 <input
//                   type="email"
//                   className="form-input"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="message" className="form-label">
//                   Your Message:
//                 </label>
//                 <textarea
//                   className="form-textarea"
//                   id="message"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   required
//                 ></textarea>
//               </div>

//               <button type="submit" className="form-button">
//                 Send Message
//               </button>

//               {submitted && (
//                 <div className="form-message">Your message has been sent successfully!</div>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactForm;