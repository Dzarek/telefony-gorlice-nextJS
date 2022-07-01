import styled from "styled-components";
import { TiArrowRightOutline } from "react-icons/ti";
import { useState } from "react";
import { accessoriesData } from "../public/data";

const AccessoriesPage = () => {
  const ładowarki = accessoriesData.ładowarki;
  const szkła = accessoriesData.szkła;
  const powerbanki = accessoriesData.powerbanki;
  const głośniki = accessoriesData.głośniki;
  const memoriesCard = accessoriesData.memoriesCard;
  const bateries = accessoriesData.bateries;
  const others = accessoriesData.others;
  const [showAccessories, setShowAccessories] = useState(false);

  return (
    <Wrapper id="akcesoria">
      <div className="main-section">
        <h2 className="title">Akcesoria</h2>
        <h3>Duży wybór akcesoriów do Twojego smartfona</h3>
        <div className="accessoriesWrapper">
          <ul className="accessoriesList">
            <li
              className={showAccessories === ładowarki && "activeItem"}
              onClick={() => setShowAccessories(ładowarki)}
            >
              <TiArrowRightOutline className="icon" />
              Ładowarki
            </li>
            <li
              className={showAccessories === szkła && "activeItem"}
              onClick={() => setShowAccessories(szkła)}
            >
              <TiArrowRightOutline className="icon" />
              Szkła i Folie
            </li>
            <li
              className={showAccessories === powerbanki && "activeItem"}
              onClick={() => setShowAccessories(powerbanki)}
            >
              {" "}
              <TiArrowRightOutline className="icon" />
              Power Banki
            </li>
            <li
              className={showAccessories === głośniki && "activeItem"}
              onClick={() => setShowAccessories(głośniki)}
            >
              {" "}
              <TiArrowRightOutline className="icon" />
              Głośniki i Słuchawki
            </li>
            <li
              className={showAccessories === memoriesCard && "activeItem"}
              onClick={() => setShowAccessories(memoriesCard)}
            >
              {" "}
              <TiArrowRightOutline className="icon" />
              Karty Pamięci
            </li>
            <li
              className={showAccessories === bateries && "activeItem"}
              onClick={() => setShowAccessories(bateries)}
            >
              {" "}
              <TiArrowRightOutline className="icon" />
              Baterie
            </li>
            <li
              className={showAccessories === others && "activeItem"}
              onClick={() => setShowAccessories(others)}
            >
              {" "}
              <TiArrowRightOutline className="icon" />
              Inne
            </li>
          </ul>
          <div className="borderAccessories"></div>
          {showAccessories ? (
            <div className="accessoriesContent">
              <section className="accessoriesItems">
                {showAccessories.items.map((item) => {
                  const { id, name, img } = item;
                  return (
                    <div className="oneItem" key={id}>
                      <img src={img} alt={name} />
                      <h5>{name}</h5>
                    </div>
                  );
                })}
              </section>
              <p>{showAccessories.info}</p>
            </div>
          ) : (
            <div className="accessoriesContent">
              <section className="accessoriesItems">
                <h3>
                  {" "}
                  <TiArrowRightOutline className="icon iconTwist" />
                  WYBIERZ KATEGORIE
                </h3>
              </section>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
    // baterie
  );
};

const Wrapper = styled.div`
  .main-section {
    padding-bottom: 10vh;
    h3 {
      text-transform: uppercase;
      color: #222;
      text-align: center;
      margin: 3vh auto;
      font-size: 2rem;
      letter-spacing: 2px;
      font-family: "Teko", sans-serif;
      @media screen and (max-width: 800px) {
        font-size: 1.5rem;
        letter-spacing: 1px;
      }
    }
  }
  .icon {
    margin-right: 10px;
    margin-bottom: 6px;
  }
  .accessoriesWrapper {
    margin: 10vh auto;
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 800px) {
      width: 95vw;
      flex-direction: column;
      justify-content: space-around;
    }
    div {
      width: 55%;
      @media screen and (max-width: 800px) {
        width: 100%;
      }
    }
    ul {
      width: 40%;
      @media screen and (max-width: 800px) {
        width: 100%;
      }
    }
    @keyframes showItemA {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    .accessoriesContent {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      animation: showItemA 1s 1 forwards;
      p {
        margin-top: 7vh;
        font-size: 1.1rem;
        width: 90%;
        font-family: "Cairo", sans-serif;
        font-style: italic;
        text-align: justify;
        font-weight: bold;
        @media screen and (max-width: 800px) {
          font-size: 1rem;
          margin-top: 0vh;
        }
      }
      @media screen and (max-width: 800px) {
        flex-direction: column-reverse;
      }
    }
    .accessoriesItems {
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      flex-wrap: wrap;
      width: 100%;

      .oneItem {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        width: 30%;
        @media screen and (max-width: 800px) {
          width: 100%;
        }
        img {
          border: 2px solid var(--mainRed);
          border-radius: 10px;
          width: 10vw;
          height: 10vw;
          margin-bottom: 2vh;
          box-shadow: 0 0 2px 1px var(--mainRed);
          @media (orientation: portrait) and (max-width: 800px) {
            border: 1px solid var(--mainRed);
            border-radius: 5px;
            width: 70vw;
            height: 70vw;
            margin: 5vh 3vw;
          }
        }
        h5 {
          font-family: "Teko", sans-serif;
          letter-spacing: 2px;
          color: var(--mainRed);
          font-size: 1.5rem;
          text-align: center;
        }
      }
      h3 {
        color: var(--mainRed);
        display: flex;
        align-items: center;
      }
      .iconTwist {
        transform: rotate(-180deg);

        @media screen and (max-width: 800px) {
          transform: rotate(-90deg);
        }
      }
    }
    .accessoriesList {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding-left: 10vw;
      min-height: 55vh;
      @media screen and (max-width: 800px) {
        min-height: 50vh;
      }
      li {
        font-size: 1.8rem;
        list-style: none;
        display: flex;
        align-items: center;
        font-family: "Teko", sans-serif;
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.5s;
        @media screen and (max-width: 800px) {
          font-size: 1.6rem;
        }
        :hover {
          color: var(--mainRed);
          margin-left: 2vw;
        }
      }
      .activeItem {
        margin-left: 4vw;
        color: rgb(2, 7, 70);
        @media screen and (max-width: 800px) {
          margin-left: 10vw;
          color: var(--mainRed);
        }
        :hover {
          color: rgb(2, 7, 70);
          margin-left: 5vw;
          @media screen and (max-width: 800px) {
            margin-left: 10vw;
            color: var(--mainRed);
          }
        }
      }
    }
    .borderAccessories {
      background-color: var(--mainRed);
      width: 5px;
      height: 50vh;
      animation: borderBig 2s infinite alternate;
      @media screen and (max-width: 800px) {
        width: 80vw;
        height: 3px;
        animation: borderBig2 2s infinite alternate;
        margin: 7vh auto;
      }
    }
    @keyframes borderBig {
      100% {
        height: 10vh;
      }
    }
    @keyframes borderBig2 {
      100% {
        width: 10vw;
      }
    }
  }
`;

export default AccessoriesPage;
