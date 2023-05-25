import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay } from "swiper";

const Testimonials = () => {
    const customerReview = [
        {
            id: 1,
            name: 'Kim Jong Un',
            job: 'President',
            img: 'https://i.insider.com/5f6de43a0f4d550011032446?width=1200&format=jpeg',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
        },
        {
            id: 2,
            name: 'Barrack Obama',
            job: 'Ex President',
            img: 'https://i0.wp.com/publicintegrity.org/wp-content/uploads/2017/01/barackobama.jpg?fit=940%2C627&ssl=1',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
        },

        {
            id: 3,
            name: 'Donald Trump',
            job: 'Ex president',
            img: 'https://assets.editorial.aetnd.com/uploads/2016/11/donald-trump-gettyimages-687193180.jpg',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
        },
        {
            id: 4,
            name: 'Joe Biden',
            job: 'President',
            img: 'https://media.wired.com/photos/6261f0af276124cdae29a208/master/w_2560%2Cc_limit/Joe-Biden-CTO-Business-1239469788.jpg',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
        }
    ]

    return (
        <div className="container flex flex-col py-6">
            <div className="flex flex-col">
                <div>
                    <h1 className="flex justify-center text-xl font-bold italic">What our customers say about us</h1>
                    <h1 className="mt-4 font-bold text-2xl text-center text-slate-800">Testimonials</h1>
                </div>
                <div className="mt-12">
                    <div>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            {customerReview.map((item) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <div className="flex flex-col">
                                            <img src={item.img} className="h-[250px]" />
                                            <h1 className="text-xl text-slate-500 font-bold mt-3 font-mono">{item.name}</h1>
                                            <h1 className="text-[16px] font-light">{item.job}</h1>
                                            <div className="mt-2">
                                                <p className="text-[14px] border-4 border-white border-l-orange-500 pl-2">{item.review}</p>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                )
                            })}


                        </Swiper>
                    </div>
                    {/* <div className="flx flex-col hidden">
                        <div>
                            <div>
                                <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris</h1>
                            </div>
                            <h1>AKSHAY HANSDGE</h1>
                            <p>Business man</p>
                        </div>
                        <div className="grid grid-row-4 gap-4 overflow-x-scroll overflow-y-hidden">
                            {
                                customerReview.map((item) => {
                                    return (
                                        <div key={item.id} className="border w-[200px] h-[150px]">
                                            <img src={item.img} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div> */}

                </div>

            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default Testimonials;