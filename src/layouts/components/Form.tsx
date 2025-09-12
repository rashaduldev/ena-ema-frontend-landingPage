import { BsCheck2 } from "react-icons/bs";
import { PiUser } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoArrowForwardOutline } from "react-icons/io5";
import { AiOutlineLock } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import Link from "next/link";
import React from "react";
import { getMDData } from "@/helpers/mdHelper";
import { FormData } from "@/types";

const iconMap: { [key: string]: any } = {
  PiUser,
  HiOutlineMail,
  FiPhone,
  AiOutlineLock,
  BsCheck2,
  CiStar,
};

const Form = () => {
  const homepage = getMDData<{ form: FormData }>("homepage/_index.md");
  const { form } = homepage;

  return (
    <>
      <form
        data-aos="fade-up"
        data-aos-duration="1000"
        className="p-8 md:p-9 border border-border shadow-xl shadow-[#1FFFA5]/20 rounded-lg"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full mb-6">
          {form.fields.map((field, idx) => {
            const Icon = iconMap[field.icon];
            return (
              <div key={idx} className="relative w-full md:w-1/3">
                <Icon className="absolute top-1/2 left-4 -translate-y-1/2 text-primary pointer-events-none" />
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full border border-border rounded-lg pl-12 pr-4 py-4 bg-transparent focus:outline-none focus:ring focus:ring-[#1FFFA5]/20 shadow-sm placeholder:text-text"
                />
              </div>
            );
          })}
        </div>

        {/* Submit Button */}
        <Link href={form.submit.link} className="btn btn-primary flex items-center justify-center">
          {form.submit.label} <IoArrowForwardOutline />
        </Link>
      </form>

      {/* Trust Badges */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex flex-wrap md:flex-row items-center justify-center gap-10 md:gap-16 mt-10 md:mt-5"
      >
        {form.trust_badges.map((badge, idx) => {
          const Icon = iconMap[badge.icon];
          return (
            <p key={idx} className="flex items-center gap-2">
              <Icon /> {badge.text}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Form;
