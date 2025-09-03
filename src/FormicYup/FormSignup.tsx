import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function FormSignup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(3, "Username must be at least 3 characters long")
        .required("Required"),
      email: Yup.string()
        .email("Please enter a valid Email")
        .required("required"),
      password: Yup.string()
        .min(5, "Passwrd must have atleast 5 charcter")
        .required("Requireds"),
    }),
    onSubmit: (formik) => {
      console.log(formik);
    },
  });

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "60%",
          justifyContent: "center",
        }}
      >
        <form action="" onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            type="text"
            placeholder="Enter full name"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <br />
          <label htmlFor="email">Passwoord</label>
          <br />
          <input
            id="password"
            type="password"
            placeholder="Enter your email address"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default FormSignup;
