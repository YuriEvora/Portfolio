import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = values => {
        console.log(values);
        
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="left"> 

            <div className="form-group">
                <label htmlFor="name">Name</label><br/>
                <input name="name" ref={register({ required: "Required" })} placeholder="Name" />
                {errors.name && errors.name.message}
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label><br/>
                <input name="email" ref={register({ required: "Required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 
                    message: "invalid email address"}})} placeholder="Email"/>

                {errors.email && errors.email.message}
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label><br/>
                <textarea name="message" ref={register({ required: "Required" })} rows="5" placeholder="Write a message..."/> 
                {errors.message && errors.message.message}
            </div>
        </div>
       
        <div className="right">
            <button type="submit" className="send-btn">Send</button>
        </div>

    </form>
    );
};