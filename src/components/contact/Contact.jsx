import { useRef, useState, useContext } from "react";
import { useFormik } from "formik";
import { MyContext } from "../../context";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";

import Spinner from "../features/spinner/Spinner";

const Contact = () => {
  const context = useContext(MyContext);
  const handleContactSpinner = context.handleContactSpinner;
  const contactSpinnerActive = context.state.contactSpinnerActive;
  const form = useRef();
  const [status, setStatus] = useState(null);
  const errors = {};
  const validate = (values) => {
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 3 || values.name.length === "") {
      errors.name = "Must be 3 characters or more";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ||
      values.email === ""
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.mobile) {
      errors.mobile = "Required";
    } else if (
      values.mobile < 1000000000 ||
      values.mobile > 9999999999 ||
      values.mobile === ""
    ) {
      errors.mobile = "Example: 0966XXXXXXX";
    }

    if (!values.message) {
      errors.message = "Required";
    } else if (values.message.length > 500 || values.message.length === "") {
      errors.message = "Must be 500 characters or less";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      handleContactSpinner(true);
      // console.log(JSON.stringify(values, null, 2));
      emailjs
        .sendForm(
          "service_1elk157",
          "template_06bfi2p",
          form.current,
          "e04CtcKkAAwLfi5Wv"
        )
        .then(
          (result) => {
            console.log(result.text);
            setStatus("sent");
            formik.values.name = "";
            formik.values.email = "";
            formik.values.mobile = "";
            formik.values.message = "";
            handleContactSpinner(false);
            console.log(status);
          },
          (error) => {
            console.log(error.text);
            console.log(error);
            setStatus("error");
          }
        );
    },
  });

  return (
    <>
      <form ref={form} onSubmit={formik.handleSubmit}>
        <div className="label-input">
          <label htmlFor="name">First Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={
              formik.errors.name && formik.touched.name
                ? "is-invalid"
                : "label-input-input"
            }
          />
          {formik.errors.name && formik.touched.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="label-input">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={
              formik.errors.email && formik.touched.email
                ? "is-invalid"
                : "label-input-input"
            }
          />
          {formik.errors.email && formik.touched.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="label-input">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            id="mobile"
            name="mobile"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
            className={
              formik.errors.email && formik.touched.email
                ? "is-invalid no-spinner"
                : "label-input-input no-spinner"
            }
          />
          {formik.errors.mobile && formik.touched.mobile ? (
            <div>{formik.errors.mobile}</div>
          ) : null}
        </div>

        <div className="label-input">
          <label htmlFor="message">Message</label>
          <input
            id="message"
            name="message"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className={
              formik.errors.email && formik.touched.email
                ? "is-invalid-textarea"
                : "label-input-textarea"
            }
          />
          {formik.errors.message && formik.touched.message ? (
            <div>{formik.errors.message}</div>
          ) : null}
        </div>
        <div className="form-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};
export default Contact;
