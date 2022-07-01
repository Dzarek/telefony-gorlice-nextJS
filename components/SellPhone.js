import styled from "styled-components";
import { TiArrowRightOutline } from "react-icons/ti";

const SellPhone = () => {
  return (
    <Wrapper>
      <h1>SKUP</h1>
      <section className="modalContentSell">
        <div className="part1">
          <h3>
            Jeśli potrzebujesz szybko gotówki lub twój telefon nie spełnia już
            twoich oczekiwań i chcesz kupić coś nowego, zapraszamy do naszego
            sklepu! Odkupimy twój telefon w atrakcyjnej cenie. Możesz u nas
            sprzedać telefon zarówno z niższych półek cenowych jak i te droższe.
          </h3>
        </div>
        <div className="part2">
          <div className="fromMeYou">
            <h3>Czego oczekujemy?</h3>
            <ul>
              <li>
                <TiArrowRightOutline className="icon" />
                Działającego telefonu - nie kupujemy telefonów które wymagają
                naprawy.
              </li>
              <li>
                <TiArrowRightOutline className="icon" />
                Legalnego telefonu - najlepiej z dowodem zakupu oraz pudełkiem i
                akcesoriami (ładowarka, słuchawki itd).
              </li>
            </ul>
          </div>
          <div className="fromMeYou">
            <h3>Co w zamian?</h3>
            <ul>
              <li>
                <TiArrowRightOutline className="icon" />
                Uczciwa wspólna wycena.
              </li>
              <li>
                <TiArrowRightOutline className="icon" />
                Szybka gotówka.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  /* height: 100vh; */
  color: #111;
  position: relative;
  font-family: "Cairo", sans-serif;

  h1 {
    position: absolute;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
    font-size: 3rem;
    font-family: "Stick No Bills", sans-serif;
    letter-spacing: 2px;
    @media screen and (max-width: 800px) {
      font-size: 2.5rem;
    }
  }
  .modalContentSell {
    position: absolute;
    width: 80vw;
    height: 80vh;
    top: 20vh;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    @media screen and (max-width: 800px) {
      width: 90vw;
      height: auto;
      top: 20vh;
      justify-content: center;
    }

    .part1 {
      width: 60vw;
      text-align: center;
      height: 20vh;
      h3 {
        font-weight: normal;
        font-size: 1.5rem;
      }
      @media screen and (max-width: 800px) {
        width: 90vw;
        height: auto;
        margin-bottom: 3vh;
        h3 {
          font-size: 1.1rem;
          font-weight: bold;
        }
      }
    }
    .part2 {
      display: flex;
      justify-content: space-between;
      margin: 0 auto 10vh;
      width: 70vw;
      height: 30vh;
      @media screen and (max-width: 800px) {
        width: 95vw;
        height: auto;
        margin: 3vh auto 1vh;
        flex-direction: column;
        justify-content: center;
      }
      .fromMeYou {
        width: 35vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        @media screen and (max-width: 800px) {
          width: 90vw;
          align-items: flex-start;
        }
        h3 {
          color: var(--mainRed);
          font-size: 3rem;
          font-family: "Teko", sans-serif;
          margin-bottom: 3vh;
          text-transform: uppercase;
          @media screen and (max-width: 800px) {
            font-size: 1.5rem;
            margin-bottom: 1vh;
            align-self: center;
          }
        }
        ul {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;
          height: 50vh;
          list-style: none;
          font-size: 1.4rem;
          font-weight: bold;
          @media screen and (max-width: 800px) {
            height: auto;
            font-size: 1.1rem;
          }
        }
      }
    }
  }
  .icon {
    margin-right: 1vw;
    color: var(--mainRed);
  }
`;
export default SellPhone;
