import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const delivery1 = "/images/delivery1.png";

const AboutMePage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper id="dpd" className="main-section">
      <h2 className="title">
        Punkt Pickup <span>DPD</span>
      </h2>
      <div className="infoAndImg">
        <img
          data-aos="zoom-in"
          src={delivery1}
          alt="delivery1"
          className="delivery1"
        />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.dpd.com/pl/pl/cennik-przesylek-krajowych/"
        >
          Sprawdź cennik{" "}
        </a>
      </div>
      <p>Tu nadasz i odbierzesz swoje paczki.</p>
      {/* <div className="linksDPD">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.dpd.com/pl/pl/odbieram-paczke/"
        >
          Odbierz paczkę
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.dpdpickup.pl/Wycen-i-nadaj-Online/"
        >
          Nadaj paczkę
        </a>
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-top: -10vh;
  background: #111;
  min-height: 100vh;
  color: white;
  font-family: "Cairo", sans-serif;
  .infoAndImg {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60vw;
    height: 60vh;
    margin: 5vh auto;
    img {
      width: 30%;
      border-radius: 10px;
      animation: boxBigger 1s linear infinite alternate;
    }
    @keyframes boxBigger {
      0% {
        transform: scale(1);
      }
      20% {
        transform: scale(1.1);
      }
      30% {
        transform: scale(1.1);
      }
      40% {
        transform: scale(1);
      }
      50% {
        transform: scale(1);
      }
      100% {
        transform: scale(1);
      }
    }
    a {
      padding: 10px 20px;
      border: 2px solid var(--mainRed);
      color: white;
      font-family: "Teko", sans-serif;
      font-size: 2rem;
      border-radius: 5px;
      transition: 0.4s;
      :hover {
        background: var(--mainRed);
      }
    }

    @media (orientation: portrait) and (max-width: 800px) {
      width: 90%;
      height: 50vh;

      flex-direction: column;
      margin: 0vh auto;

      margin-bottom: 10vh;
      padding-top: 5vh;
      img {
        width: 50%;
        margin: 5vh auto;
      }
      a {
        font-size: 1.5rem;
      }
    }
  }
  p {
    font-size: 3rem;
    margin: 0 auto;
    text-align: center;
    width: 90%;
    color: rgb(180, 2, 2);
    font-family: "Teko", sans-serif;
    text-transform: uppercase;
  }
  @media screen and (max-width: 800px) {
    p {
      margin: -3vh auto;
      padding-bottom: 10vh;
      text-align: center;
      width: 90%;
      font-size: 1.8rem;
    }
  }
  .linksDPD {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50vw;
    a {
      margin: 0;
      padding: 10px 20px;
      border: 2px solid var(--mainRed);
      color: white;
      font-family: "Teko", sans-serif;
      font-size: 2rem;
      border-radius: 5px;
      transition: 0.4s;
      :hover {
        background: var(--mainRed);
      }
    }
    @media (orientation: portrait) and (max-width: 800px) {
      width: 100vw;
      a {
        font-size: 1.5rem;
      }
    }
  }
  .title {
    text-shadow: none;
    color: white;
    width: 80%;
    text-align: center;
    margin: 0vh auto -6vh;
    padding-top: 8vh;
    span {
      color: var(--mainRed);
    }
  }
`;

export default AboutMePage;
