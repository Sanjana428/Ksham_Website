import React from "react";
import  "../contactdeta.css";
import boygirl from '../assets/boygirl.png';



const Contact = () => {
    return (
        
        <div id="ContactPage" className="bg-gray-100 rounded-[20px] box-shadow"> 
            <div className="ContactPage  ">
                <div className="conHero ">
                    <div className="back .text-gradient"></div>
                    <h2 className="contHead ">Contact Us</h2>
                    <div className="ContactCard bg-black-gradient-2">
                        <form
                            target="_blank"
                            action="https://formsubmit.co/kunalumap0123@gmail.com"
                            method="POST"
                        >
                            <h2 className="ContactCardHead">
                                Your satisfaction is our number one focus
                            </h2>
                            <p className="contactSubTitle">
                                Please fill in your details below and one of our
                                friendly team members will be in touch shortly.
                            </p>
                            <div className="cardForm">
                                <div className="formLeft">
                                    <input
                                        placeholder="First Name"
                                        type="text"
                                        name="Name"
                                        id=""
                                        className="input-style" // Example Tailwind class
                                    />
                                    <input
                                placeholder="Last Name"
                                type="text"
                                name="Last Name"
                                id=""
                            /><input
                                placeholder="Mobile No."
                                type="text"
                                name="Mobile no"
                                id=""
                            /><input
                                placeholder="Email"
                                type="text"
                                name="email"
                                id=""
                            /><textarea
                                placeholder="What do you want to tell us?"
                                name=""
                                id=""
                                rows="6"
                            ></textarea>
                                </div>
                                <div className="formRight">
                                    <img src={boygirl} alt="Boy and Girl" />
                                </div>
                            </div>
                            <button type="submit" className="formSubmit ">
                                
                            <button type='submit' className={`py-4 px-6 bg-blue-gradient .text-gradient font-poppins font-medium text-[18px]  outline-none  rounded-[10px]`}>
      Submit
    </button>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

