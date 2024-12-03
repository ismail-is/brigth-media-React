"use client";

import emailjs from 'emailjs-com';
import { Formik } from 'formik';

const ContactForm = ({ subtitleOffset }) => {
    return (
        <Formik
            initialValues={{ email: '', name: '', tel: '', budget: '', message: '',company: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                const serviceID = 'service_spz9t6j'; // Replace with your actual service ID
                const templateID = 'template_wa4ors8';
                const publicKey = 'suX8lmkR9cLrlNlX0';

                emailjs.send(serviceID, templateID, values, publicKey)
                    .then((response) => {
                        document.getElementById("contactFormStatus").innerHTML = "<h5>Thanks, your message is sent successfully.</h5>";
                        resetForm();
                    })
                    .catch((error) => {
                        document.getElementById("contactFormStatus").innerHTML = "<h5>Oops! There was a problem submitting your form</h5>";
                    })
                    .finally(() => setSubmitting(false));
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit} id="contactForm" className={subtitleOffset ? "mil-mt-suptitle-offset mil-mb-90 cform" : "mil-mb-90 cform"}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                                <label className="mil-upper"><span>Full Name</span><span className="mil-required">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name Here"
                                    name="name"
                                    required="required"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                                <label className="mil-upper"><span>Email address</span><span className="mil-required">*</span></label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email Here"
                                    name="email"
                                    required="required"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                                <label className="mil-upper"><span>Phone</span><span className="mil-required">*</span></label>
                                <input
                                    type="tel"
                                    placeholder="Enter Your Phone Here"
                                    name="tel"
                                    required="required"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.tel}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                                <label className="mil-upper"><span>Company Name</span><span className="mil-required">*</span></label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Company Name"
                                    name="company"
                                    required="required"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.company}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                                <label className="mil-upper"><span>Message</span><span className="mil-required">*</span></label>
                                <textarea
                                    placeholder="Enter Your Message Here"
                                    name="message"
                                    required="required"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.message}
                                />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <button type="submit" className="mil-button mil-up" disabled={isSubmitting}>
                                Send Now
                            </button>
                        </div>
                    </div>
                    <div className="form-status alert-success mil-mb-90" id="contactFormStatus" style={{ "display": "none" }} />
                </form>
            )}
        </Formik>
    );
};

export default ContactForm;
