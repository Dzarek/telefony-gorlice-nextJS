import styled from "styled-components";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { questionsData } from "../public/data";
const questionMark1 = "/images/questionMark1.jpg";
const Student = "/images/Student.mp4";

const FAQPage = () => {
  return (
    <Wrapper id="faq">
      <div className="main-section">
        <div className="titleContainer">
          <div className="titleLine"></div>
          <h2 className="title">FAQ</h2>
          <div className="titleLine"></div>
        </div>
        <div className="faqContent">
          <video
            src={Student}
            autoPlay
            muted
            loop
            playsInline
            type="video/mp4"
          ></video>
          <div className="questions">
            <Accordion allowZeroExpanded={true}>
              {questionsData.map((question) => {
                const { title, info, id } = question;
                return (
                  <AccordionItem key={id}>
                    <div className="singleQuestion">
                      <header>
                        <h3>
                          <BsFillQuestionOctagonFill className="icon" /> {title}
                        </h3>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <button className="btn">
                              <TiArrowSortedDown />
                            </button>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                      </header>
                      <AccordionItemPanel>
                        <p>{info}</p>
                      </AccordionItemPanel>
                    </div>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .accordion__panel {
    animation: fadein 0.5s ease-in;
    overflow: hidden;
  }
  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .btn {
    background: transparent;
    border: none;
    font-size: 2rem;
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 800px) {
      font-size: 1.8rem;
    }
    :hover {
      color: var(--mainRed);
    }
  }
  .icon {
    margin-right: 10px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .main-section {
    margin-top: -10vh;
    width: 100vw;
    background-color: rgb(30, 2, 2);
    background-image: url(${questionMark1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    background-attachment: fixed;
  }
  .titleContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10vh;
  }
  .title {
    color: whitesmoke;
    margin: auto 3vw;
    text-shadow: 0 0 6px black;
  }
  .titleLine {
    width: 20vw;
    height: 5px;
    background: whitesmoke;
    border-bottom: 2px solid black;
  }

  .faqContent {
    margin: 5vh auto;
    display: flex;
    justify-content: space-around;
    width: 80vw;
    padding: 5vh 0;
    @media screen and (max-width: 800px) {
      width: 95vw;
      flex-direction: column;
      margin: 0 auto;
    }
  }
  video {
    margin-top: 5vh;
    height: 40vh;
    border: 1px white black;
    box-shadow: 0 0 10px 5px black;
    opacity: 0.8;
    border-radius: 10px;
    @media (orientation: portrait) and (max-width: 800px) {
      width: 95vw;
      height: auto;
    }
  }
  .questions {
    color: rgb(70, 2, 2);
    font-family: "Cairo", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    width: 40%;
    @media screen and (max-width: 800px) {
      width: 95vw;
      font-size: 0.8rem;
      margin-top: 10vh;
    }
  }
  .singleQuestion {
    margin: 2vh auto;
    padding: 10px 20px;
    width: 35vw;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    @media screen and (max-width: 800px) {
      width: 100%;
    }
    p {
      margin-top: 2vh;
    }
  }
`;

export default FAQPage;
