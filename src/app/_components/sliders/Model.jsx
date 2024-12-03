"use client"; 
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Formik } from 'formik';

const ContactFormModal = ({ subtitleOffset, isOpen, onClose }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  // Run the code that accesses window only on the client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth); // Update the window width
    }
  }, []);

  const modalStyles = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
    zIndex: 1000,
  };

  const modalContentStyles = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    height: windowWidth <= 767 ? '600px' : '420px',  // Change height based on screen size
    position: 'relative',
    width: '100%',
    maxWidth: '500px',
    minWidth: '300px',
  };
  
  const closeButtonStyles = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  };

  return (
    isOpen && (
      <div style={modalStyles}>
        <div style={modalContentStyles}>
          <div className="col-12" style={{ marginBottom: "-50px" }}>
            <div className="mil-center mil-mb-90">
              <span className="mil-suptitle mil-upper mil-up" style={{ marginBottom: "10px" }}>Let’s Connect </span>
              <h5 className="mil-upper mil-up">Get a Free  <span className="mil-marker">Marketing</span> Audit</h5>
            </div>
          </div>
          <button onClick={onClose} style={closeButtonStyles}>X</button>
          <Formik
            initialValues={{ email: '', name: '', tel: '', budget: '', message: '', company: '', service: '',Business:'' }}
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
              const serviceID = 'service_spz9t6j'; 
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
                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-35">
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-35">
                      <input
                        type="text"
                        placeholder="Company Name"
                        name="company"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.company}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-35">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        name="tel"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.tel}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-35">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                    </div>
                  </div>

                  {/* Dropdown field for service selection */}
                  <div className="col-lg-12">
                    <div className="mil-input-frame mil-dark-input mil-up mil-mb-35" style={{ borderBottom: '1px solid #333' }}>
                      <select
                        name="Business"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Business}
                        style={{
                          border: 'none',
                          outline: 'none',
                          width: '100%',
                          padding: '10px',
                          background: 'transparent',
                          color: "rgba(0, 0, 0, .3)"
                        }}
                      >
                        <option value="" label="Business size" />
                        <option value="1–2" label="1–2" style={{ color: 'black' }} />
                        <option value="3–10" label="3–10" style={{ color: 'black' }} />
                        <option value="11–20" label="11–20" style={{ color: 'black' }} />
                        <option value="21–50" label="21–50" style={{ color: 'black' }} />
                        <option value="51–100" label="51–100" style={{ color: 'black' }} />
                        <option value="100+" label="100+" style={{ color: 'black' }} />
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12" style={{ textAlign: 'center' }}>
                    <button type="submit" className="mil-button mil-up" disabled={isSubmitting} style={{ height: '50px', borderRadius: "4px" }}>
                      Send Now
                    </button>
                  </div>
                </div>
                <div className="form-status alert-success mil-mb-10" id="contactFormStatus" style={{ display: "none" }} />
              </form>
            )}
          </Formik>
        </div>
      </div>
    )
  );
};

const ContactFormButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('modalShown');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    if (!sessionStorage.getItem('modalShown')) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('modalShown', 'true');
      }, 5000);

      return () => clearTimeout(timer);
    }

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <ContactFormModal isOpen={isOpen} onClose={handleClose} />
  );
};

export default ContactFormButton;
