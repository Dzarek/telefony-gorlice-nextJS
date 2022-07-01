import styled from "styled-components";
import { useState } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import SellPhone from "./SellPhone";
import PhoneSlider from "./PhoneSlider";

import { GiExitDoor } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { IoArrowUpCircle } from "react-icons/io5";

const Smartfony = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showBuyNowMobile, setShowBuyNowMobile] = useState(false);
  const phoneMarks = [
    {
      mark: "/images/marks/Apple.png",
    },
    { mark: "/images/marks/Huawei.png" },
    { mark: "/images/marks/LG.png" },
    { mark: "/images/marks/Nokia.png" },
    { mark: "/images/marks/OPPO.png" },
    { mark: "/images/marks/Samsung.png" },
    { mark: "/images/marks/Vivo.png" },
    { mark: "/images/marks/Xiaomi.png" },
    { mark: "/images/marks/Maxcom.png" },
  ];

  return (
    <Wrapper id="smartfony">
      <div className="main-section smartfon-section">
        <h2 className="title">Telefony</h2>
        <img
          className="smartfonCircle"
          src="/images/smartphoneCircle.png"
          alt="smartfon circle"
        />
        <img
          className="arrowSmartfonLeft"
          src="/images/arrowSmartfone.png"
          alt="arrow left"
        />
        <img
          className="arrowSmartfonRight"
          src="/images/arrowSmartfoneR.png"
          alt="arrow right"
        />
        <div className="smartphone-container">
          <div className="sell-section">
            <button
              onClick={() => setShowModal1(true)}
              className="smartphone-btnL"
            >
              SPRZEDAŻ <br /> <GiExitDoor />
            </button>
          </div>
          <div className="buy-section">
            <button
              onClick={() => setShowModal2(true)}
              className="smartphone-btnR"
            >
              SKUP <br /> <GiExitDoor />
            </button>
          </div>
        </div>
        <div
          className={
            showModal1 ? "smartphone-modal" : "smartphone-modal no-modal1"
          }
        >
          <img
            className="modalBg"
            src="/images/shaking-hands.jpg"
            alt="modalBg"
          />
          <button onClick={() => setShowModal1(false)} className="btn-exit">
            <GiExitDoor />
          </button>
          {showBuyNowMobile && (
            <button
              onClick={() => setShowBuyNowMobile(false)}
              className="btn-exit2"
            >
              <IoArrowUpCircle />
            </button>
          )}
          <h1 className="modalContentTitle">SPRZEDAŻ</h1>
          <div
            className={
              !showBuyNowMobile
                ? "modal-content modalWithButton"
                : "modal-content noModalWithButton"
            }
          >
            <div className="modalWithButton">
              <section className="modalContentOne">
                <div className="modal-info">
                  <p>
                    W naszej ofercie znajdują się zarówno telefony nowe jak i
                    używane, z wyższych i niższych półek cenowych, a więc każdy
                    znajdzie coś dla siebie.
                  </p>
                  <p>
                    Obok najnowszych modeli smartfonów nie zabrakło również
                    miejsca dla telefonów przeznaczonych dla seniorów. Starszym
                    klientom oferujemy komórki, które posiadają optymalny dla
                    ich możliwości interfejs. Taki telefon powinien mieć większe
                    przyciski i ikony na ekranie aby łatwiej było z niego
                    korzystać.
                  </p>
                </div>
                <PhoneSlider />
                <div className="marksAndContact">
                  <div className="modal-marks">
                    <h3>Różnorodność marek telefonów!</h3>
                    <Carousel
                      infinite
                      autoPlay={3000}
                      animationSpeed={2000}
                      slidesPerPage={1}
                      breakpoints={{
                        900: {
                          slidesPerPage: 1,
                        },
                      }}
                      addArrowClickHandler
                      stopAutoPlayOnHover
                      arrowLeft={
                        <IoIosArrowDropleftCircle className="arrowrRightLeftFeatures" />
                      }
                      arrowRight={
                        <IoIosArrowDroprightCircle className="arrowrRightLeftFeatures" />
                      }
                    >
                      {phoneMarks.map((item, index) => {
                        return (
                          <img key={index} src={item.mark} alt={index + 1} />
                        );
                      })}
                    </Carousel>
                  </div>
                  <div className="modal-contact">
                    <h3>Odwiedź nasz sklep i wybierz swój nowy telefon!</h3>
                    <h4>
                      <FaMapMarkerAlt className="modalIcon" />
                      Adama Mickiewicza 3, 38-300 Gorlice
                    </h4>
                    <h4>
                      <ImMobile className="modalIcon" /> 791 838 332
                    </h4>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div
          className={
            showModal2 ? "smartphone-modal" : "smartphone-modal no-modal2"
          }
        >
          <img
            className="modalBg"
            src="/images/shaking-hands.jpg"
            alt="modalBg"
          />
          <button onClick={() => setShowModal2(false)} className="btn-exit2">
            <GiExitDoor />
          </button>
          <SellPhone />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding-top: 10vh;
  background: #fff;

  .modalContentTitle {
    font-family: "Stick No Bills", sans-serif;
    font-size: 3rem;
    color: white;
    color: #111;
    position: absolute;
    z-index: 999;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
    @media screen and (max-width: 800px) {
      font-size: 2.5rem;
    }
  }
  .modalWithButton {
    transform: translateY(0);
    height: 100vh;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    animation: modalDown 1s linear 1 forwards;
  }
  .noModalWithButton {
    top: 0;
    animation: modalUp 1s linear 1 forwards;
  }
  @keyframes modalUp {
    100% {
      top: -100vh;
    }
  }
  @keyframes modalDown {
    100% {
      top: 0%;
      transform: translateY(0);
    }
  }

  .buyNowMobile {
    height: 100vh;
    width: 90%;
    margin: 20vh auto 0;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 800px) {
      width: 95vw;
    }
  }
  .no-modal1 {
    transform: translateX(-100vw);
    opacity: 0;
  }
  .no-modal2 {
    transform: translateX(100vw);
    opacity: 0;
  }
  .main-section {
    margin: 0vh auto;
    position: relative;
  }
  .modalBg {
    width: 100vw;
    height: 100vh;
    filter: grayscale(1);
    opacity: 0.2;
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
  }
  .btn-exit {
    position: absolute;
    z-index: 999;
    top: 5vh;
    left: 5vw;
    font-size: 5rem;
    color: #111;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    transform: rotateY(180deg);
    @media screen and (max-width: 800px) {
      font-size: 3rem;
    }
  }
  .btn-exit2 {
    position: absolute;
    z-index: 999;
    top: 5vh;
    right: 5vw;
    font-size: 5rem;
    color: #111;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    @media screen and (max-width: 800px) {
      font-size: 3rem;
    }
  }
  .btn-exit:hover,
  .btn-exit2:hover {
    font-size: 6rem;
  }

  .arrowSmartfonLeft {
    position: absolute;
    top: 55%;
    left: 22%;
    width: 15vw;
    transform: rotate(-30deg);
    @media (orientation: portrait) and (max-width: 800px) {
      top: 28%;
      left: 15%;
      width: 25vw;
      transform: rotate(75deg);
    }
  }
  .arrowSmartfonRight {
    position: absolute;
    bottom: 55%;
    right: 22%;
    width: 15vw;
    transform: rotate(-30deg);

    @media (orientation: portrait) and (max-width: 800px) {
      bottom: 28%;
      right: 15%;
      width: 25vw;
      transform: rotate(75deg);
    }
  }

  .smartphone-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    button {
      width: 15vw;
      height: 8vw;
      font-size: 2rem;
      border-radius: 20px;
      background: var(--mainRed);
      color: white;
      position: absolute;
      font-family: "Teko", sans-serif;
      cursor: pointer;
      border: 4px solid white;
      transition: 0.3s;
      letter-spacing: 1px;
      filter: saturate(0);
      @media (orientation: portrait) and (max-width: 800px) {
        width: 35vw;
        height: 12vh;
        border-radius: 10px;
        border: 2px solid white;
        font-size: 1.3rem;
      }
    }
    button:hover {
      background: rgba(120, 21, 21, 1);
      filter: none;
    }
    .buy-section {
      width: 50%;
      height: 100%;
      button {
        top: 60%;
        left: 80%;
        transform: translate(-50%, -50%);
        @media (orientation: portrait) and (max-width: 800px) {
          top: 75%;
          left: 30%;
        }
      }
    }
    .sell-section {
      width: 50%;
      height: 100%;
      button {
        top: 40%;
        left: 20%;
        transform: translate(-50%, -50%);
        @media (orientation: portrait) and (max-width: 800px) {
          top: 25%;
          left: 70%;
        }
      }
    }
  }
  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #111;
    min-height: 100vh;
    /* overflow: hidden; */
    position: absolute;
    .modalContentOne {
      margin-top: 30vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100vw;
      font-family: "Cairo", sans-serif;

      div {
        text-align: center;
        font-size: 1.5rem;
        @media screen and (max-width: 800px) {
          font-size: 1rem;
        }
      }
      @media screen and (max-width: 800px) {
        margin-top: 25vh;
      }

      .modal-info {
        width: 80%;
        margin-bottom: 3vh;
        margin-top: -7vh;
        @media screen and (max-width: 800px) {
          width: 90%;
          margin-bottom: 5vh;
          margin-top: 0;
          font-weight: bold;
          p:nth-of-type(2) {
            margin-top: 3vh;
          }
        }
      }
      .marksAndContact {
        width: 80%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        @media screen and (max-width: 800px) {
          width: 100%;
          flex-direction: column;
        }
      }
      .modal-marks {
        @media screen and (max-width: 800px) {
          background: #eee;
          padding: 15px;
        }
      }
      .modal-contact,
      .modal-marks {
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 40vh;
        @media screen and (max-width: 800px) {
          margin-bottom: 10vh;
          width: 100%;
          height: auto;
          font-size: 1rem;
          padding: 15px 5%;
        }
        img {
          width: 20vw;
          @media screen and (max-width: 800px) {
            width: 70%;
          }
        }
        h3 {
          color: var(--mainRed);
          font-size: 2.5rem;
          font-family: "Teko", sans-serif;
          margin-bottom: 0vh;
          text-transform: uppercase;
          @media screen and (max-width: 800px) {
            font-size: 1.5rem;
            margin-bottom: 3vh;
            align-self: center;
          }
        }
        h4 {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          width: 100%;
          font-size: 1.2rem;
          margin-bottom: 3vh;
        }
      }
    }
  }
  .arrowrRightLeftFeatures {
    color: rgba(120, 21, 21, 1);
  }

  .modalIcon {
    margin-right: 10px;
    font-size: 2rem;
    color: var(--mainRed);
  }
`;

export default Smartfony;
