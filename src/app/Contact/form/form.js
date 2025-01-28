"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import './formStyle.scss'
const form = () => {
  const schema = yup.object().shape({
    firstname: yup.string().required("Name is mandatory"),
    lastname: yup.string().required("Name is mandatory"),
    Email: yup.string().email().required("Enter email"),
    Phone:yup.number().typeError("number is required").required("enter the number"),
    Address:yup.string(),
      });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });


  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input_one">
          <div className="input_main">
            <label>Name</label>
            <input
              type="text"
              placeholder="First name."
              {...register("firstname")}/>
              <p>{errors.firstname?.message}</p>
          </div>
          <div className="input_main">
            <label>Last name</label>
            <input
              type="text"
              placeholder="last name."
              {...register("lastname")}/>
              <p>{errors.lastname?.message}</p>
          </div>
        </div>
        <div className="input_one">
          <div className="input_main">
            <label>Email</label>
            <input
              type="text"
              placeholder="Your email"
              {...register("Email")}/>
              <p>{errors.Email?.message}</p>
          </div>
          <div className="input_main">
            <label>Phone</label>
            <input
              type="text"
              placeholder="Your phone"
              {...register("Phone")}/>
              <p>{errors.Phone?.message}</p>
          </div>
        </div>
        <div className="input_one">
          <div className="input_main">
            <label>Address</label>
            <input
              type="text"
              placeholder="Your address"
              {...register("Address")}/>
          </div>
          <div className="input_main">
            <label>subject</label>
            <input
              type="text"
              placeholder="Your subject"
              {...register("Subject")}/>
          </div>
        </div>
        <div className="Message">
          <label>Message</label>
          <textarea
            placeholder="enter your message"
          />
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  )
}

export default form
