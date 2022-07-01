import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Header = () => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src="/images/headerBg3.jpg" alt="header-img" />
      </div>
      <div className="header-info">
        <Carousel
          infinite
          autoPlay={6000}
          animationSpeed={2000}
          slidesPerPage={1}
        >
          <h2>
            Szukasz nowego telefonu? <br /> A może chcesz jakiś sprzedać i
            zarobić?{" "}
          </h2>
          <h2>
            W naszej ofercie znajdziesz również <br /> TELEFONY DLA SENIORA !{" "}
          </h2>
          <h2>
            Słuchawki, Ładowarki, Powerbanki, Szkła Ochronne, <br />
            Głośniki Bluetooth i wiele innych...
          </h2>
          <h2>
            Pęknięta szybka? <br /> Spokojnie, dopasujemy i założymy Ci nową ;)
          </h2>
          <h2>
            Twój telefon wymaga serwisu? <br /> Postaramy się Ci pomóc!
          </h2>
          <h2>
            Punkt Pickup DPD <br /> Tutaj nadasz i odbierzesz paczkę!
          </h2>
        </Carousel>
      </div>
      <h1 className="googleTitle">telefony gorlice</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 88vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0vh auto 0vh;
  background: #000;
  position: relative;
  border-top: 4px solid var(--mainRed);
  .googleTitle {
    text-transform: uppercase;
    opacity: 0.2;
    letter-spacing: 10px;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 3rem;
    text-align: center;
    @media screen and (max-width: 800px) {
      font-size: 2rem;
    }
  }
  .icon {
    margin-left: 1vw;
  }
  .img-container {
    height: 88vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      filter: brightness(0.5);
      width: 100%;
      height: 88vh;
    }
  }
  .header-info {
    position: absolute;
    width: 100%;
    color: whitesmoke;
    font-size: 1.6rem;
    line-height: 3;
    text-align: center;
    font-family: "Teko", sans-serif;
    letter-spacing: 2px;
    h2 {
      width: 70%;
      text-shadow: 2px 2px 2px black;
    }

    @media screen and (max-width: 800px) {
      font-size: 1.3rem;
      line-height: 2;
      letter-spacing: 1px;
      h2 {
        width: 85%;
        text-shadow: 2px 2px 2px black;
      }
    }
  }
`;

export default Header;
