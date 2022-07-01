import styled from "styled-components";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const GeneralInfo = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <div className="main-section">
        <div data-aos="fade-right" className="oneGeneralInfo">
          <BsFillPersonCheckFill className="icon" />
          <h4>DOŚWIADCZENIE</h4>
        </div>
        <div data-aos="fade-top" className="oneGeneralInfo">
          <GiReceiveMoney className="icon" />
          <h4>UCZCIWOŚĆ</h4>
        </div>
        <div data-aos="fade-left" className="oneGeneralInfo">
          <AiOutlineFieldTime className="icon" />
          <h4>SZYBKOŚĆ</h4>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main-section {
    height: 25vh;
    min-height: 25vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60vw;
    margin-top: -25vh;
    padding-bottom: 20vh;
    @media screen and (max-width: 800px) {
      margin: 10vh auto;
      width: 100vw;
      height: auto;
      padding-bottom: 10vh;
    }
    .oneGeneralInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      color: var(--mainRed);
      font-size: 1.8rem;
      font-family: "Stick No Bills", sans-serif;
      width: 20vw;
      @media screen and (max-width: 800px) {
        font-size: 1rem;
        width: 25vw;
      }
      .icon {
        font-size: 4rem;
        margin: 12vh auto 3vh;
        transition: 0.5s;
        @media screen and (max-width: 800px) {
          font-size: 3rem;
        }
        :hover {
          font-size: 5rem;
          @media screen and (max-width: 800px) {
            font-size: 3rem;
          }
        }
      }
      h4 {
        color: #222;
      }
    }
  }
`;

export default GeneralInfo;
