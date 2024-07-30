import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation]);
const Testimonial = () => {
  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: false,
    navigation: {
      prevEl: ".prev_button",
      nextEl: ".next_button",
    },
  };
  return (
    <div className="Guerrilla_tm_section" id="testimonial">
      <div className="Guerrilla_tm_testimonials">
        <div className="left">
          <div className="image">
            <img src="img/hero/2.png" alt="Guerrilla image" />
          </div>
        </div>
        <div className="right">
          <div className="right_in">
            <div
              className="Guerrilla_tm_main_title"
              data-text-align="left"
              data-color="light"
            >
              <span>Testimonial</span>
              <h3>What People Say</h3>
            </div>
            <Swiper {...props} className="owl-carousel">
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                    A quote from the client...
                  </p>
                </div>
                <div className="name">
                  <h3>
                    First Last, <span>Customer</span>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                    Some quote from the client...
                  </p>
                </div>
                <div className="name">
                  <h3>
                    First Last, <span>Customer</span>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                    Some other quote from the client...
                  </p>
                </div>
                <div className="name">
                  <h3>
                    First Last, <span>First Last</span>
                  </h3>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="direct">
              <a className="prev_button">
                <i className="icon-left" />
              </a>
              <a className="next_button">
                <i className="icon-right" />
              </a>
            </div>
          </div>
        </div>
        <span className="border">
          <span
            className="in moving_effect"
            data-direction="x"
            data-reverse="yes"
          />
        </span>
        <span
          className="square moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
        <span className="quote moving_effect" data-direction="x">
          <i className="icon-quote-left" />
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
