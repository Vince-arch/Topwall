import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import apa from "../assets/partners/apa.png";
import ga from "../assets/partners/ga.png";
import intra from "../assets/partners/intra.png";
import jubilee from "../assets/partners/jubilee.png";
import kenindia from "../assets/partners/kenindia.png";
import oldmutual from "../assets/partners/oldmutual.png";

export default function AutoScrollCarousel() {
    const cards = [
        { id: 1, img: apa },
        { id: 2, img: ga },
        { id: 3, img: intra },
        { id: 4, img: jubilee },
        { id: 5, img: kenindia },
        { id: 6, img: oldmutual },
    ];

    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"      // fit as many logos as possible
            spaceBetween={50}        // space between logos
            loop={true}
            speed={8000}             // controls how smooth/slow it moves (higher = slower)
            autoplay={{
                delay: 0,              // no pause
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            }}
            allowTouchMove={true}   // lock to auto scroll
            className="w-full"
        >
            {cards.map((card) => (
                <SwiperSlide key={card.id} className="!w-52 flex justify-center">
                    <img
                        src={card.img}
                        alt="logo"
                        className="h-32 w-auto object-contain" // ✅ full logo, no crop
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
