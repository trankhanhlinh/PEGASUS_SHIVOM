import * as React from 'react';
import './slider.scss';
import { DefaultButton } from '../../components';
import Link from 'next/link';

export class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.settingSlider = this.settingSlider.bind(this);
  }
  settingSlider() {
    $('.slider__slick-autoplay').on('init', function(event, slick) {
      $('.slider__slick-autoplay').css({
        opacity: '1',
        visibility: 'visible'
      });
      $(
        '.slick-active .slider__slick-autoplay__item__caption__title'
      ).removeClass('slider__slick-autoplay__item__caption--hidden');
      $('.slick-active .slider__slick-autoplay__item__caption__title').addClass(
        'slider__slick-autoplay__item__caption__ani--1'
      );

      $(
        '.slick-active .slider__slick-autoplay__item__caption__content'
      ).removeClass('slider__slick-autoplay__item__caption--hidden');
      $(
        '.slick-active .slider__slick-autoplay__item__caption__content'
      ).addClass('slider__slick-autoplay__item__caption__ani--2');

      $(
        '.slick-active .slider__slick-autoplay__item__caption__more__btn'
      ).removeClass('slider__slick-autoplay__item__caption--hidden');
      $(
        '.slick-active .slider__slick-autoplay__item__caption__more__btn'
      ).addClass('slider__slick-autoplay__item__caption__ani--3');

      $(
        '.slick-active .slider__slick-autoplay__item__caption__more__btn-default'
      ).removeClass('slider__slick-autoplay__item__caption--hidden');
      $(
        '.slick-active .slider__slick-autoplay__item__caption__more__btn-default'
      ).addClass('slider__slick-autoplay__item__caption__ani--4');
    });

    $('.slider__slick-autoplay')
      .not('.slick-initialized')
      .slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        draggable: false,
        pauseOnHover: false,
        fade: true,
        cssEase: 'linear'
      });

    $('.slider__prevArrow').click(function() {
      $('.slider__slick-autoplay').slick('slickPrev');
    });

    $('.slider__nextArrow').click(function() {
      $('.slider__slick-autoplay').slick('slickNext');
    });

    $('.slider__slick-autoplay').on('beforeChange', function(
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      $(
        '.slick-active .slider__slick-autoplay__item__caption__title'
      ).removeClass('slider__slick-autoplay__item__caption__ani--1');
      $('.slick-active .slider__slick-autoplay__item__caption__title').addClass(
        'slider__slick-autoplay__item__caption--hidden'
      );

      $(
        '.slick-active .slider__slick-autoplay__item__caption__content'
      ).removeClass('slider__slick-autoplay__item__caption__ani--2');
      $(
        '.slick-active .slider__slick-autoplay__item__caption__content'
      ).addClass('slider__slick-autoplay__item__caption--hidden');

      $(
        '.slick-active .slider__slick-autoplay__item__caption__more__btn'
      ).removeClass('slider__slick-autoplay__item__caption__ani--3');
      $(
        '.slick-active .slider__slick-autoplay__item__caption__more__btn'
      ).addClass('slider__slick-autoplay__item__caption--hidden');

      $(
        '.slick-active .slider__slick-autoplay__item__caption__more__btn-default'
      ).removeClass('slider__slick-autoplay__item__caption__ani--4');
      $(
        '.slick-active .slider__slick-autoplay__item__caption__more__btn-default'
      ).addClass('slider__slick-autoplay__item__caption--hidden');

      $('.slider__slick-autoplay .slick-dots li').removeClass('slick-active');
      $('.slider__slick-autoplay .slick-dots li button')
        .attr('aria-pressed', 'false')
        .focus(function() {
          this.blur();
        });
    });

    $('.slider__slick-autoplay').on('afterChange', function(
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      $(
        '.slick-active .slider__slick-autoplay__item__caption__title'
      ).removeClass('slider__slick-autoplay__item__caption--hidden');
      $('.slick-active .slider__slick-autoplay__item__caption__title').addClass(
        'slider__slick-autoplay__item__caption__ani--1'
      );

      $(
        '.slick-active .slider__slick-autoplay__item__caption__content'
      ).removeClass('slider__slick-autoplay__item__caption--hidden');
      $(
        '.slick-active .slider__slick-autoplay__item__caption__content'
      ).addClass('slider__slick-autoplay__item__caption__ani--2');

      $(
        '.slick-active .slider__slick-autoplay__item__caption__more__btn'
      ).removeClass('slider__slick-autoplay__item__caption--hidden');
      $(
        '.slick-active .slider__slick-autoplay__item__caption__more__btn'
      ).addClass('slider__slick-autoplay__item__caption__ani--3');

      $(
        '.slick-active .slider__slick-autoplay__item__caption__more__btn-default'
      ).removeClass('slider__slick-autoplay__item__caption--hidden');
      $(
        '.slick-active .slider__slick-autoplay__item__caption__more__btn-default'
      ).addClass('slider__slick-autoplay__item__caption__ani--4');
    });
  }
  componentDidMount() {
    this.settingSlider();
  }
  render() {
    return (
      <div className="slider">
        <div className="slider__arrow slider__prevArrow">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="slider__arrow slider__nextArrow">
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="slider__slick-autoplay animated fadeIn">
          {this.props.items.map((item, index) => {
            return (
              <div className="slider__slick-autoplay__item" key={index}>
                <img
                  alt=""
                  data-lazy={item.option.image}
                  src={item.option.image}
                ></img>
                <div className="slider__slick-autoplay__item__caption">
                  <div className="slider__slick-autoplay__item__caption__title slider__slick-autoplay__item__caption--hidden">
                    {item.option.title}
                  </div>

                  <p className="slider__slick-autoplay__item__caption__content slider__slick-autoplay__item__caption--hidden">
                    {item.option.description}
                  </p>
                  <div
                    className="slider__slick-autoplay__item__caption__more"
                    onClick={this.props.showTryItNowModal}
                  >
                    <a
                      href="#"
                      className="slider__slick-autoplay__item__caption__more__btn slider__slick-autoplay__item__caption--hidden"
                    >
                      <span>Tập thử ngay</span>
                    </a>
                    <Link
                      href={`/post/post?newsId=${item.option.newsId}`}
                      as={`/bai-viet/${item.option.newsId}`}
                    >
                      <a href={`/bai-viet/${item.option.newsId}`}>
                        <div className="slider__slick-autoplay__item__caption__more__btn-default slider__slick-autoplay__item__caption--hidden">
                          <DefaultButton
                            content={item.option.buttonTitle}
                          ></DefaultButton>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="slider__slick-autoplay__item">
            <img src="https://dalia.elated-themes.com/wp-content/uploads/2018/07/fitness-slider-2.jpg"></img>
            <div className="slider__slick-autoplay__item__caption">
              <div className="slider__slick-autoplay__item__caption__title slider__slick-autoplay__item__caption--hidden">
                get in. get fit.
                <br /> get on with life.
              </div>

              <p className="slider__slick-autoplay__item__caption__content slider__slick-autoplay__item__caption--hidden">
                Lorem ipsum dolor sit amet, quod gloriatur inciderint at vel, ei
                justo dolore virtute duo. Movet quaeque probatus an sit, mel
                iisque facilisi et.
              </p>

              <a
                href="#"
                className="slider__slick-autoplay__item__caption__more__btn slider__slick-autoplay__item__caption--hidden"
              >
                <span>join us</span>
              </a>
              <div className="slider__slick-autoplay__item__caption__more__btn-default slider__slick-autoplay__item__caption--hidden">
                <DefaultButton link="#" content="read more"></DefaultButton>
              </div>
            </div>
          </div>
          <div className="slider__slick-autoplay__item">
            <img src="https://dalia.elated-themes.com/wp-content/uploads/2018/07/fitness-slider-1.jpg"></img>
            <div className="slider__slick-autoplay__item__caption">
              <div className="slider__slick-autoplay__item__caption__title slider__slick-autoplay__item__caption--hidden">
                ready. set. go! <br /> come run with us.
              </div>

              <p className="slider__slick-autoplay__item__caption__content slider__slick-autoplay__item__caption--hidden">
                Lorem ipsum dolor sit amet, quod gloriatur inciderint at vel, ei
                justo dolore virtute duo. Movet quaeque probatus an sit, mel
                iisque facilisi et.
              </p>

              <a
                href="#"
                className="slider__slick-autoplay__item__caption__more__btn slider__slick-autoplay__item__caption--hidden"
              >
                <span>join us</span>
              </a>
              <div className="slider__slick-autoplay__item__caption__more__btn-default slider__slick-autoplay__item__caption--hidden">
                <DefaultButton link="#" content="read more"></DefaultButton>
              </div>
            </div>
          </div>
          <div className="slider__slick-autoplay__item">
            <img src="https://dalia.elated-themes.com/wp-content/uploads/2018/07/fitness-slider-3.jpg"></img>
            <div className="slider__slick-autoplay__item__caption">
              <div className="slider__slick-autoplay__item__caption__title slider__slick-autoplay__item__caption--hidden">
                join our squad! <br /> get in shape now!
              </div>

              <p className="slider__slick-autoplay__item__caption__content slider__slick-autoplay__item__caption--hidden">
                Lorem ipsum dolor sit amet, quod gloriatur inciderint at vel, ei
                justo dolore virtute duo. Movet quaeque probatus an sit, mel
                iisque facilisi et.
              </p>

              <a
                href="#"
                className="slider__slick-autoplay__item__caption__more__btn slider__slick-autoplay__item__caption--hidden"
              >
                <span>join us</span>
              </a>
              <div className="slider__slick-autoplay__item__caption__more__btn-default slider__slick-autoplay__item__caption--hidden">
                <DefaultButton link="#" content="read more"></DefaultButton>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
