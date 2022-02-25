import React, { useState, useRef }  from 'react';
import {Form,Col,Button, Row} from 'react-bootstrap';
import '../css/App.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {Notify} from '../components/Notify';

export default function ContactForm() {
    const [submitting,setSubmitting] = useState(false);
    const [validated, setValidated] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const formId='jhzE61M3';
    const formSparkUrl = `https://submit-form.com/${formId}`;
    const recaptchaKey='6Lc4dX8eAAAAAA97_omKOCScxgUs8LCacnyf0R3e';
    const recaptchaRef = useRef();
    
    const initialFormState = {
      email:'',
      name:'',
      subject:'',
      message:'',
  };

  const initialErrorState = {
    email:'',
    name:'',
    subject:'',
    message:'',
    recaptcha:''
};

  const [formState, setFormState] = useState(initialFormState);
  const [errors,setErrors] = useState(initialErrorState);


  const handleSubmit = async (event) =>{
    // const form = event.currentTarget;  
    event.preventDefault();
      if ( !handleValidation()) {
        // setFormState(initialFormState);
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
      }
      else
      {
        setSubmitting(true);
        await postSubmisssion();
        setSubmitting(false);
        setValidated(false);
      }
      
  }

  const handleValidation = () => {
    setErrors(initialFormState);
    let formIsValid = true;
    if(formState.name === ''){
      formIsValid = false;
      errors["name"] = "Cannot be empty!";
    }
    else
    {
      if (typeof formState["name"] !== "undefined") {
        if (!formState["name"].match(/^[a-zA-Z]+$/)) {
          formIsValid = false;
          errors["name"] = "Only letters";
        }
      }
    }

    if(formState["subject"]===''){
      formIsValid = false;
      errors["subject"] = "Cannot be empty!";
    }
    

    if(formState["message"]===''){
      formIsValid = false;
      errors["message"] = "Cannot be empty!";
    }

    if (formState["email"]==='') {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }
    else
    {
      if (typeof formState["email"] !== "undefined") {
        let lastAtPos = formState["email"].lastIndexOf("@");
        let lastDotPos = formState["email"].lastIndexOf(".");
  
        if (!(
            lastAtPos < lastDotPos &&
            lastAtPos > 0 &&
            formState["email"].indexOf("@@") === -1 &&
            lastDotPos > 2 &&
            formState["email"].length - lastDotPos > 2
          )) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
      }
    }    

    if(recaptchaToken === null || recaptchaToken === 'undefined')
    {
        formIsValid = false;
        errors["recaptcha"] = "Verify your self before submitting!";
    }

  setErrors(errors);
  return formIsValid;

}

  const postSubmisssion = async() =>{
    const payload = {
          ...formState,
          "g-recaptcha-response": recaptchaToken
        };
    await axios.post(formSparkUrl,payload)
    .then((response) =>{
        Notify("Thanks, I will be in touch with you shortly.",false);
        setErrors(initialErrorState);
        setFormState(initialFormState);
        recaptchaRef.current.reset();
    })
    .catch((error) =>{
        Notify("Sorry, there was a problem. Please try again or you can connect with me on other social media platforms.",true);
    });
  };

  const updateFormControl = (event) =>{
    const {id,value} = event.target;
    const updatedFormState = {...formState};
    updatedFormState[id] = value;
    setFormState(updatedFormState);
}

const updateRecaptchaToken = (token) => {
    setRecaptchaToken(token);
    var updatedErrors = {...errors}
    updatedErrors["recaptcha"] = null;
    setErrors(updatedErrors);

};  
    return (
        <Col lg={7}>
            <ToastContainer/>
            <div className="contact-form">
                <h4>Say something</h4>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group as={Col} controlId="name" style={{marginBottom: "1rem"}}>
                                <Form.Control required type="text" placeholder="Name *" value={formState.name} onChange={updateFormControl}/>
                                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group as={Col}  controlId="email" style={{marginBottom: "1rem"}}>
                                <Form.Control type="email" placeholder="Email *" value={formState.email} onChange={updateFormControl} required />
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Col md={12}>
                        <Form.Group controlId="subject" style={{marginBottom: "1rem"}}>
                            <Form.Control type="text" placeholder="Subject *" value={formState.subject} onChange={updateFormControl} required />
                            <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
            
                    <Col md={12}>
                        <Form.Group controlId="message" style={{marginBottom: "1rem"}}>
                            <Form.Control as="textarea"  placeholder="Message *" rows="5" value={formState.message} onChange={updateFormControl} required />
                            <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
            
                    <Form.Group className="col-md-12" style={{marginBottom: "1rem"}}>
                        <ReCAPTCHA 
                                ref={recaptchaRef}
                                sitekey={recaptchaKey}
                                onChange={updateRecaptchaToken}
                                style={{background:'transparent'}}
                                theme='dark'
                            />
                            
                    <span style={{color:"red"}}>{errors.recaptcha}</span>
                    </Form.Group>
                    <Form.Group className="col-md-12">
                        <Button type="submit">{submitting ? 'Sending...' : 'Send message'} </Button>
                    </Form.Group>
                </Form>
            </div>
        </Col>
    );
  }