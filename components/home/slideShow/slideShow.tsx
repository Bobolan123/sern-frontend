"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "../slideShow.module.scss"; // Import the CSS module

function SlideShow() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    return (
        <div className={styles.slideShowFrame}>
            <Slider {...settings}>
                <div>
                    <Image
                        className={styles.slideItem}
                        src="/slide1.png"
                        width={1180}
                        height={500}
                        alt="Slide 1"
                    />
                </div>
                <div>
                    <Image
                        className={styles.slideItem}
                        src="/slide2.png"
                        width={1180}
                        height={500}
                        alt="Slide 2"
                    />
                </div>
                <div>
                    <Image
                        className={styles.slideItem}
                        src="/slide3.png"
                        width={1180}
                        height={500}
                        alt="Slide 3"
                    />
                </div>
                <div>
                    <Image
                        className={styles.slideItem}
                        src="/slide4.jpg"
                        width={1180}
                        height={500}
                        alt="Slide 4"
                    />
                </div>
            </Slider>
        </div>
    );
}

export default SlideShow;
