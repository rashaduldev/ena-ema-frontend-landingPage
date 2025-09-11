import { BsCheck2 } from "react-icons/bs";
import Link from "next/link";
import { PiUser } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoArrowForwardOutline } from "react-icons/io5";
import { AiOutlineLock } from "react-icons/ai";
import { CiStar } from "react-icons/ci";

const Form = () => {
    return (
        <>
              <form data-aos="fade-up"
      data-aos-duration="1000" className="p-8 md:p-9 border border-border shadow-xl shadow-[#1FFFA5]/20 rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full mb-6">

        {/* Name Input */}
        <div className="relative w-full md:w-1/3">
          <PiUser className="absolute top-1/2 left-4 -translate-y-1/2 text-primary pointer-events-none" />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-border rounded-lg pl-12 pr-4 py-4
                       bg-transparent focus:outline-none focus:ring focus:ring-[#1FFFA5]/20
                       shadow-sm placeholder:text-text"
          />
        </div>

        {/* Email Input */}
        <div className="relative w-full md:w-1/3">
          <HiOutlineMail className="absolute top-1/2 left-4 -translate-y-1/2 text-primary pointer-events-none" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-border rounded-lg pl-12 pr-4 py-4
                       bg-transparent focus:outline-none focus:ring-2 focus:ring-[#1FFFA5]/20
                       shadow-sm placeholder:text-text"
          />
        </div>

        {/* Phone Input */}
        <div className="relative w-full md:w-1/3">
          <FiPhone className="absolute top-1/2 left-4 -translate-y-1/2 text-primary pointer-events-none" />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-border rounded-lg pl-12 pr-4 py-4
                       bg-transparent focus:outline-none focus:ring focus:ring-[#1FFFA5]/20
                       shadow-sm placeholder:text-text"
          />
        </div>
      </div>

      {/* Submit Button */}
      <Link
  href="/"
  className="btn btn-primary"
>
  Get my high-converting landing page
  <IoArrowForwardOutline />
</Link>

    </form>
        <div data-aos="fade-up"
      data-aos-duration="1000" className="flex flex-wrap md:flex-row items-center justify-center gap-10 md:gap-16 mt-10 md:mt-5">
      <p className="flex items-center gap-2"><AiOutlineLock />SSL secure</p>
      <p className="flex items-center gap-2"><BsCheck2 />Money-back guaranteed</p>
      <p className="flex items-center gap-2"><CiStar />Satisfaction guaranteed</p>
    </div>
        </>
    );
};

export default Form;