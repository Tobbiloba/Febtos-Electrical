import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCube, Pagination } from "swiper";

const Works = () => {
    const object = [
        {
            id: 1,
            section: 'electrical',
            img: 'https://www.build-review.com/wp-content/uploads/2022/03/Electrician.jpg',
        },
        {
            id: 2,
            section: 'electrical',
            img: 'https://uploads-ssl.webflow.com/62c7a98b37a34a73a82fb887/62c7a98b37a34ab7b62fba78_Switch-board-IG-1024x1024.png',
        },
        {
            id: 3,
            section: 'electrical',
            img: 'https://www.wtcsystem.edu/assets/Uploads/Electrical-Engineering-Technology-gtc12.png',
        },
        {
            id: 4,
            section: 'electrical',
            img: 'https://blog.herzing.ca/hubfs/iStock-1256027218.jpg',
        },
        {
            id: 5,
            section: 'maintenance',
            img: 'https://b727754.smushcdn.com/727754/wp-content/uploads/2020/06/iStock-1165561132-res.jpg?lossy=0&strip=1&webp=1',
        },
        {
            id: 6,
            section: 'maintenance',
            img: 'https://blog.infraspeak.com/wp-content/uploads/2021/02/manutencao-eletrica.jpg',
        },
        {
            id: 7,
            section: 'maintenance',
            img: 'https://www.build-review.com/wp-content/uploads/2022/03/Electrician.jpg',
        },
        {
            id: 8,
            section: 'smart',
            img: 'https://assets.myautoshop.co.nz/info/uploads/2022/05/AutoElec.jpg',
        },
        {
            id: 9,
            section: 'smart',
            img: 'https://www.amaauto.ae/wp-content/uploads/2022/12/Auto-garage-Dubai-750x465.jpg',
        },
        {
            id: 10,
            section: 'smart',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOV8kIUgR0IbjCz9-o39Dnp_vds_LOZQSjaTkRd8aNaT4u3We-aFynZEVa833C1XbVRM&usqp=CAU',
        }
    ]
    const [current, setCurrent] = useState('all');
    const [images, setImages] = useState(object);

    function findSectionsById(section, objectArray) {
        return objectArray.filter((item) => item.section === section);
    }

    useEffect(() => {
        // console.log(current);
        if (current === 'all') {
            setImages(object)
        } else {
            const filteredImages = findSectionsById(current, object);
            setImages(filteredImages);
        }

    }, [current]);

    return (
        <div className="container py-8 flex-col">
            <div>
                <h1 className="flex justify-center text-xl font-bold italic">
                    Our <span className="ml-1 text-orange-500">Work</span>
                </h1>
                <h1 className="mt-4 font-bold text-2xl text-center text-slate-800">
                    Our Recent <span className="text-orange-500">Projects</span>
                </h1>
                <p className="text-[14px] text-center mt-4">
                    Energetically create turnkey "outside the box" thinking with standards compliant applications. Rapidiously
                </p>
            </div>
            <div className="mt-6">
                <div className="flex flex-row justify-evenly">
                    <h1
                        className={`text-[16px] ${current === 'all' ? 'text-orange-500 font-bold' : 'text-slate-700'}`}
                        onClick={() => setCurrent('all')}
                    >
                        All
                    </h1>
                    <h1
                        className={`text-[16px] ${current === 'electrical' ? 'text-orange-500 font-bold' : 'text-slate-700'}`}
                        onClick={() => setCurrent('electrical')}
                    >
                        Electrical
                    </h1>
                    <h1
                        className={`text-[16px] ${current === 'maintenance' ? 'text-orange-500 font-bold' : 'text-slate-700'}`}
                        onClick={() => setCurrent('maintenance')}
                    >
                        Maintenance
                    </h1>
                    <h1
                        className={`text-[16px] ${current === 'smart' ? 'text-orange-500 font-bold' : 'text-slate-700'}`}
                        onClick={() => setCurrent('smart')}
                    >
                        Smart Home
                    </h1>
                </div>
                <div className="mt-6">
                    <Swiper
                        effect={"cube"}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        pagination={true}
                        modules={[EffectCube, Pagination]}
                        className="mySwiper"
                    >
                        {images.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img src={item.img} alt={`Work ${item.id}`} className="h-[280px] w-[100vw]" />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Works;