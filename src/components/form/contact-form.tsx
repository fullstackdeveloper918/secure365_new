"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormData = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  howCanWeHelp: string;
  message: string;
};

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  companyName: yup.string().required("Company name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{10,12}$/, "Phone number must be between 10 and 12 digits"),
  howCanWeHelp: yup.string().required("This field is required"),
  message: yup.string().required("Message is required"),
});

type IProps = {
  btnCls?: string;
};

export default function ContactForm({ btnCls = "" }: IProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    try {
      localStorage.setItem("contactFormData", JSON.stringify(data));
      toast.success("Form submitted successfully!");
      reset();
    } catch (error) {
      toast.error("Something went wrong while saving the form.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="divwrap">
          <div className="cn-contactform-input">
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName")}
              className={errors.firstName ? "input-error" : ""}
            />
            {errors.firstName && (
              <p className="error">{errors.firstName.message}</p>
            )}
          </div>
          <div className="cn-contactform-input">
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
              className={errors.lastName ? "input-error" : ""}
            />
            {errors.lastName && (
              <p className="error">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="cn-contactform-input">
          <input
            type="text"
            placeholder="Company Name"
            {...register("companyName")}
            className={errors.companyName ? "input-error" : ""}
          />
          {errors.companyName && (
            <p className="error">{errors.companyName.message}</p>
          )}
        </div>

        <div className="cn-contactform-input">
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="cn-contactform-input">
          <input
            type="tel"
            placeholder="Phone Number"
            {...register("phoneNumber")}
            className={errors.phoneNumber ? "input-error" : ""}
          />
          {errors.phoneNumber && (
            <p className="error">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div className="cn-contactform-input">
          <input
            type="text"
            placeholder="How Can We Help?"
            {...register("howCanWeHelp")}
            className={errors.howCanWeHelp ? "input-error" : ""}
          />
          {errors.howCanWeHelp && (
            <p className="error">{errors.howCanWeHelp.message}</p>
          )}
        </div>

        <div className="cn-contactform-input">
          <textarea
            placeholder="Tell Us About Your Project"
            {...register("message")}
            className={errors.message ? "input-error" : ""}
          />
          {errors.message && <p className="error">{errors.message.message}</p>}
        </div>

        <div className="cn-contactform-btn">
          <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit">
            Submit
          </button>
        </div>
      </form>

      {/* Toast container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </>
  );
}
