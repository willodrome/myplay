import React, { useState, useEffect, useRef } from "react";
import { ProfileImage } from "../Components/ProfileImage";
import { useAuth } from "../Context/UserContext";
import { useForm } from "react-hook-form";

export const ProfilePage = () => {
  const { user, getUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors, reset, watch } = useForm({ mode: "onBlur" });
  const password = useRef({});
  const remoteUrl = "/api";
  password.current = watch("password", "");

  const onEditProfile = async data => {
    setLoading(true);
    await fetch(`${remoteUrl}/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        reset();
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  const formClass = `height-cont ${loading && "loading"}`;

  return (
    <form className={formClass} onSubmit={handleSubmit(onEditProfile)}>
      <div>
        <div className="bg-bar"></div>
        <ProfileImage />
      </div>

      <input type="text" name="firstname" placeholder="First Name" ref={register({ required: true, minLength: 1, maxLength: 80 })} />
      <span className="input-error">{errors.firstname && "Please provide your first name"}&nbsp;</span>

      <input type="text" name="lastname" placeholder="Last Name" ref={register({ required: true, minLength: 1, maxLength: 80 })} />
      <span className="input-error">{errors.lastname && "Please provide your last name"}&nbsp;</span>

      <input type="password" name="password" placeholder="Password" ref={register({ required: true, minLength: 8, maxLength: 128 })} />
      <span className="input-error">{errors.password && "Please specify password (min 8 symbols)"}&nbsp;</span>

      <input
        type="password"
        name="confirmation"
        placeholder="Password Confirmation"
        ref={register({
          validate: value => value === password.current || "Passwords do not match",
        })}
      />
      <span className="input-error"> {errors.confirmation && errors.confirmation.message}&nbsp;</span>

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        ref={register({
          required: true,
          minLength: 5,
          maxLength: 32,
          pattern: {
            value: /\d+/,
            message: "This input is number only.",
          },
        })}
      />
      <span className="input-error">{errors.phone && "Please provide valid phone number"}&nbsp;</span>

      <button className="centered">Save</button>
    </form>
  );
};
