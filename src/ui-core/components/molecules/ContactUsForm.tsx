import React from "react";

const ContactUsForm = () => {
  return (
    <div>
      <form
        action=""
        className="flex-col p-10 border rounded-[17px] gap-6 mx-5 hidden md:flex"
      >
        <input
          className="bg-[#ECEBFC] rounded-lg lg:h-[50px] pl-2 py-2"
          type="text"
          name="Name"
          placeholder="Name"
          required
        />
        <input
          className="bg-[#ECEBFC] rounded-lg lg:h-[50px] pl-2 py-2"
          type="text"
          name="Email"
          placeholder="Email"
          required
        />
        <input
          className="bg-[#ECEBFC] rounded-lg lg:h-[50px] pl-2 py-2"
          type="text"
          name="Subject"
          placeholder="Subject"
          required
        />
        <textarea
          className="bg-[#ECEBFC] rounded-lg pl-2 py-2 lg:h-[200px]"
          name="Message"
          placeholder="Message"
          required
        />
        <button className="bg-[#6C63FF] text-white lg:text-[20px] rounded-lg h-[50px]">
          SUBMIT
        </button>
      </form>

      {/* Mobile only form */}
      <form
        action=""
        className="flex flex-col p-10 border rounded-[17px] gap-6 mx-5 md:hidden"
      >
        <div>
          <h1>Your Name</h1>
          <input
            className="lg:h-[50px] pl-14 py-2 w-full 
            bg-no-repeat 
            bg-[url('/images/name.png')] 
            bg-[20px_center] 
            bg-[length:24px_24px] 
            border border-black"
            name="Name"
            placeholder="Adolf Hitler"
            required
          />
        </div>

        <div>
          <h1>E - Mail</h1>
          <input
            className="lg:h-[50px] pl-14 py-2 w-full 
            bg-no-repeat 
            bg-[url('/images/mail.png')] 
            bg-[20px_center] 
            bg-[length:24px_24px] 
            border border-black"
            type="text"
            name="Email"
            placeholder="Example@email.com"
            required
          />
        </div>

        <div>
          <h1>Subject</h1>
          <input
            className="lg:h-[50px] pl-14 py-2 w-full 
             bg-no-repeat 
             bg-[url('/images/subject.png')] 
             bg-[20px_center] 
             bg-[length:24px_24px] 
             border border-black"
             type="text"
             name="Subject"
             placeholder="Subject"
             required
          />
        </div>

        <div>
          <h1>Message</h1>
          <textarea
            className="border border-black pl-2 py-2 h-[200px] w-full"
            name="Message"
            placeholder=""
            required
          />
        </div>

        <div className="flex justify-center">
          <button className="bg-black text-white lg:text-[20px] rounded-lg h-[50px] px-6">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
