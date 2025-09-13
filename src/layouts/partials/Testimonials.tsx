"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Testimonial } from "@/types";
import { FaStar } from "react-icons/fa6";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: {
    enable?: boolean;
    title: string;
    description?: string;
    testimonials: Array<Testimonial>;
  };
}

const Testimonials = ({ data }: { data: PageData }) => {
  const testimonials = data.frontmatter.testimonials || [];

  return (
    <>
      {data.frontmatter.enable && (
        <section className="section bg-dark">
          <div className="container">
            <div className="row">
              {/* Section Title */}
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="mb-10"
              >
                <h2
                  className="mb-4 lg:tracking-[-2px]"
                  dangerouslySetInnerHTML={{ __html: data.frontmatter.title }}
                />
                {data.frontmatter.description && (
                  <p>{data.frontmatter.description}</p>
                )}
              </div>

              {/* Swiper */}
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="col-12"
              >
              <Swiper
                  modules={[Autoplay, Pagination]}
                  pagination={{ clickable: true }}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  spaceBetween={24}
                  loop={testimonials.length > 1} 
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                  }}
                >
                  {testimonials.map((item: Testimonial, index: number) => (
                    <SwiperSlide key={index}>
                      <div className="rounded-lg bg-[#192420] px-7 py-10">
                        {/* Rating */}
                        <div className="flex items-center gap-1 text-primary">
                          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        </div>
                        {/* Content */}
                        <blockquote
                          className="mt-8 text-balance"
                          dangerouslySetInnerHTML={markdownify(item.content)}
                        />

                        {/* Author */}
                        <div className="mt-11 flex items-center">
                          <ImageFallback
                            height={36}
                            width={36}
                            className="rounded-full w-auto h-auto" // ✅ keeps aspect ratio
                            src={item.avatar}
                            alt={item.name}
                          />
                          <div className="ml-4">
                            <p
                              dangerouslySetInnerHTML={markdownify(item.name)}
                              className="font-medium text-text-light"
                            />
                            <p
                              dangerouslySetInnerHTML={markdownify(
                                item.designation
                              )}
                              className="text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Testimonials;
