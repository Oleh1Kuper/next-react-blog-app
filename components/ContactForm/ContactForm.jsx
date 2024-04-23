'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import classes from './ContactForm.module.css';
import { toast } from 'react-toastify';

const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  });
  const [isLoad, setIsLoad] = useState(false);

  const onSubmit = (data) => {
    setIsLoad(true);

    axios
      .post('/api/contact', data)
      .then(({ data }) => {
        toast.success(data.message, { position: 'top-center' });
        reset();
      })
      .catch((error) => {
        toast.error(error.message, {
          position: 'top-center',
        });
      })
      .finally(() => setIsLoad(false));
  };

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>

      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: regexEmail,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              id="email"
            />

            {errors.email?.message && (
              <p className="error">{errors.email.message}</p>
            )}
          </div>

          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 3,
                  message: 'Name must be at least 3 charecters',
                },
              })}
            />

            {errors.name?.message && (
              <p className="error">{errors.name.message}</p>
            )}
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            {...register('message', {
              required: 'Message is required',
            })}
          />

          {errors.message?.message && (
            <p className="error">{errors.message.message}</p>
          )}
        </div>

        <div className={classes.actions}>
          <button disabled={isLoad} type="submit">
            {isLoad ? 'Load...' : 'Send Message'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
