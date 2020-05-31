import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import "./App.scss";

import arrow from "./images/arrow-right.svg";
import imgBoy from "./images/boy.webp";
import imgGirl from "./images/girl.webp";

function App() {
  let hero = useRef(null);
  let imagesWrapper = useRef(null);
  let content = useRef(null);

  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    const girlImg = imagesWrapper.firstElementChild;
    const boyImg = imagesWrapper.lastElementChild;

    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    TweenMax.to(hero, 10, {
      css: {
        visibility: "visible",
      },
    });

    tl.from(girlImg, 1.2, { y: 1280, ease: Power3.easeOut }, "First TL").from(
      girlImg.firstElementChild,
      2,
      { scale: 1.6, ease: Power3.easeOut },
      0.2
    );
    tl.from(boyImg, 1.2, { y: 1280, ease: Power3.easeOut }, 0.2).from(
      boyImg.firstElementChild,
      2,
      { scale: 1.6, ease: Power3.easeOut },
      0.2
    );

    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      "First TL" // to sync the timelines name same
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, [tl]);

  return (
    <div ref={(el) => (hero = el)} className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div ref={(el) => (content = el)} className="hero-content-inner">
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Relieving the burden
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    of disease caused
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
              <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </p>
              <div className="btn-row">
                <button className="explore-button">
                  Explorer
                  <div className="arrow-icon">
                    <img src={arrow} alt="" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div
              ref={(el) => (imagesWrapper = el)}
              className="hero-images-inner"
            >
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
