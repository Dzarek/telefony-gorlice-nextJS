import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsFillEmojiWinkFill } from "react-icons/bs";
import { BsFillEmojiDizzyFill } from "react-icons/bs";
import { FaWalking } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { MdMobileFriendly } from "react-icons/md";

const service1 = "/images/service1.jpg";
const service2 = "/images/service2.jpg";
const service4 = "/images/service4.jpg";
const service5 = "/images/service5.jpg";
const tech1 = "/images/tech1.jpg";

const ServicePage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper id="serwis">
      <div className="main-section">
        <div className="titleContainer">
          <div className="titleLine"></div>
          <h2 className="title">Serwis</h2>
          <div className="titleLine"></div>
        </div>
        <div className="serviceWrapper">
          <h3>
            Twój telefon się zepsuł? Wyświetlacz jest wylany? Nie ładuje? NIE
            DZIAŁA TAK JAK W DNIU ZAKUPU? <br />{" "}
            <BsFillEmojiDizzyFill className="serviceIcon" />
          </h3>
          <section className="serviceImg">
            <Carousel
              infinite
              autoPlay={4000}
              animationSpeed={2000}
              slidesPerPage={1}
            >
              <img src={service1} alt="" />
              <img src={service2} alt="" />
              <img src={service4} alt="" />
              <img src={service5} alt="" />
            </Carousel>
          </section>
          <h3>
            UWAGA !!! <br /> Może nie musisz już kupować nowego. Przyjdź do
            naszego sklepu, a my sprawdzimy czy można go jeszcze oddać do
            serwisu i skutecznie naprawić. <br />{" "}
            <BsFillEmojiWinkFill className="serviceIcon" />
          </h3>
        </div>
        <div className="infoBar">
          <div className="infoBarContainer">
            <h5>Wymiana Baterii</h5>
            <h5>Wymiana Wyświetlacza</h5>
            <h5>Naprawa Obudowy</h5>
            <h5>Naprawa Głośnika</h5>
            <h5>Naprawa Po Zalaniu</h5>
            <h5>Odzyskiwanie Danych</h5>
          </div>
        </div>
        <h1 className="serviceStepsTitle">krok po kroku</h1>
        <div className="serviceSteps">
          <section data-aos="flip-right" data-aos-duration="1000">
            <h1>
              <FaWalking />
            </h1>
            <p>
              Odwiedź nasz sklep: <br /> Adama Mickiewicza 3, <br /> 38-300
              Gorlice
            </p>
            <h1>01.</h1>
          </section>
          <section
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h1>
              <FiBox />
            </h1>
            <p>Wysyłka telefonu do serwisantów</p>
            <h1>02.</h1>
          </section>
          <section
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <h1>
              <MdOutlineMiscellaneousServices />
            </h1>
            <p>Naprawa</p>
            <h1>03.</h1>
          </section>
          <section
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <h1>
              <MdMobileFriendly />
            </h1>
            <p>Odbiór telefonu</p>
            <h1>04.</h1>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .infoBar {
    background-color: rgba(120, 2, 2, 0.7);
    height: 10vh;
    width: 100vw;
    margin: 10vh auto;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    @media screen and (max-width: 800px) {
      height: 30vh;
    }
  }

  .infoBarContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    @media screen and (max-width: 800px) {
      animation: none;
      flex-wrap: wrap;
      justify-content: center;
      height: 28vh;
    }
    h5 {
      color: white;
      font-size: 1.3rem;
      letter-spacing: 1px;
      font-family: "Teko", sans-serif;
      text-transform: uppercase;
      @media screen and (max-width: 800px) {
        font-size: 1.1rem;
        letter-spacing: 1px;
        width: 50%;
        text-align: center;
        opacity: 0;
        animation: h5animate 2s infinite alternate;
      }
    }
  }
  @keyframes h5animate {
    100% {
      opacity: 1;
    }
  }

  .titleContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10vh 0;
  }
  .title {
    color: white;
    margin: auto 3vw;
    text-shadow: 0 0 2px black;
  }

  .titleLine {
    width: 20vw;
    height: 5px;
    background: white;
    border-bottom: 2px solid black;
  }

  .serviceIcon {
    font-size: 2rem;
    margin-top: 2vh;
    color: var(--mainRed);
    @media screen and (max-width: 800px) {
      font-size: 1.4rem;
    }
  }
  .main-section {
    background-image: url(${tech1});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin-top: -10vh;
    min-height: 100vh;
    padding-bottom: 5vh;

    .serviceWrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 80vw;
      margin: 0 auto;
      font-family: "Cairo", sans-serif;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 3px;
      color: white;
      padding: 5vh 2vw;
      @media screen and (max-width: 800px) {
        width: 95vw;
        flex-direction: column;
      }
      h3 {
        font-size: 1.3rem;
        text-align: center;
        width: 25%;
        @media screen and (max-width: 800px) {
          width: 90%;
          font-size: 1.2rem;
        }
      }
      .serviceImg {
        width: 40%;
        @media screen and (max-width: 800px) {
          width: 90%;
          margin: 3vh auto;
        }
        img {
          height: 50vh;
          width: 90%;
          border: 2px solid var(--mainRed);
          border-radius: 10px;
          @media screen and (max-width: 800px) {
            height: 40vh;
          }
        }
      }
    }
  }
  .serviceStepsTitle {
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-size: 2.5rem;
    text-shadow: 0px 0px 3px var(--mainRed);
    margin: 15vh auto 5vh;
    font-style: italic;
    font-family: "Stick No Bills", sans-serif;
    letter-spacing: 2px;
    @media screen and (max-width: 800px) {
      font-size: 2rem;
    }
  }
  .serviceSteps {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: whitesmoke;
    text-align: center;
    width: 80vw;
    margin: 0 auto 5vh;
    @media screen and (max-width: 800px) {
      width: 100vw;
      flex-wrap: wrap;
    }
    section {
      width: 15vw;
      height: 35vh;
      background: rgba(0, 0, 0, 0.9);
      border: var(--mainRed) 2px solid;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border-radius: 10px;
      padding: 10px;
      font-family: "Bebas Neue", sans-serif;
      font-family: "Teko", sans-serif;
      letter-spacing: 1px;
      transition: 0.3s;
      @media screen and (max-width: 800px) {
        width: 45vw;
        height: 25vh;
        margin: 2vh auto;
        padding: 0px;
      }
      :hover {
        background: rgba(0, 0, 0, 1);
        border: white 2px solid;
      }

      h1 {
        font-size: 2rem;
        @media screen and (max-width: 800px) {
          font-size: 1.3rem;
        }
      }
      p {
        font-size: 1.3rem;
        text-transform: uppercase;
        @media screen and (max-width: 800px) {
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export default ServicePage;
