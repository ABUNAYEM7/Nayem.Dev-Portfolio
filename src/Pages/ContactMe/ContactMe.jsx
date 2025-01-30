import React from "react";
import BannerInfo from "../../Components/Shared/BannerInfo";
import bgImage from "../../assets/contactUsBg.jpg";
import Lottie from "lottie-react";
import contactMeAnimation from "../../../public/contactMeAnimation.json";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const ContactMe = () => {

  const submitHandler =async (e)=>{
    e.preventDefault()
    
    emailjs
      .sendForm('service_o3wv4y2', 'template_m6r1jok', e.target, {
        publicKey: '9L75jAvFpJi2jvJ1c',
      })
      .then(
        () => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thanks for contact with me",
            showConfirmButton: false,
            timer: 1500
          });;
        },
        (error) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: `Failed to send Email`,
            text :error.text,
            showConfirmButton: false,
            timer: 1500
          });;;
        },
      );
  }

  return (
    <div className="my-20">
      {/* banner-container */}
      <div>
        <BannerInfo title={"Reach Out to Me"} subtitle={"I’m always open to connecting! Whether you have a question, need assistance, or want to discuss exciting opportunities, feel free to get in touch. Your message matters, and I’ll make sure to respond promptly."} image={bgImage} />
      </div>
      {/* main-container */}
      <div className="p-6">
        <div className="flex flex-col lg:flex-row items-center gap-6 my-6">
          {/* Left Container */}
          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-4 text-highlight tracking-wider">How Can I Assist You?</h2>
            <p className="text-lg mb-6">
            I’d love to hear from you and assist with anything you need.
            </p>
            {/* contact-link-container */}
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="font-semibold">Email:</span>
                <a 
                href="mailto:mohammadabunayem106@gmail.com"
                className="ml-2 text-highlight"
                >mohammadabunayem106@gmail.com</a>
              </p>
              <p className="flex items-center">
                <span className="font-semibold">Number:</span>
                <a 
                href="https://wa.me/8801632645245"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-highlight">+8801632645245</a>
              </p>
              <p className="flex items-center">
                <span className="font-semibold">Location:</span>
                <span className="ml-2">Narayanganj ,Dhaka, Bangladesh</span>
              </p>
            </div>

            {/* Contact Form */}
            <form 
            onSubmit={submitHandler}
            className="mt-6 space-y-3 p-4 border-2 shadow-2xl rounded-xl">
              <div>
                <label htmlFor="first-name" className="block font-semibold">
                  First Name*
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="input input-bordered w-full mt-2"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block font-semibold">
                  Last Name*
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="input input-bordered w-full mt-2"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input input-bordered w-full mt-2"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-semibold">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="input input-bordered w-full mt-2"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea textarea-bordered w-full mt-2"
                  placeholder="Leave us a message"
                  required
                />
              </div>
              <button type="submit" className="btn bg-highlight text-white w-full mt-4">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Container */}
          <div className="flex-1">
          <Lottie animationData={contactMeAnimation} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
