import styled from "styled-components";
const robertImg = "/images/robertImg.jpg";

const AboutMePage = () => {
  return (
    <Wrapper id="o_mnie">
      <div className="main-section">
        <div className="titleContainer">
          <div className="titleLine"></div>
          <h2 className="title">O nas</h2>
          <div className="titleLine"></div>
        </div>
        <div className="aboutMeInfo">
          <h1>Cześć ! </h1>
          <div className="aboutMeWrapper">
            <img src={robertImg} alt="" />
            <h3>
              Jesteśmy na rynku już od <span>2003</span> roku. U nas{" "}
              <span>kupisz, sprzedasz, zamienisz</span> lub{" "}
              <span>naprawisz</span> telefon. Ponad to, znajdziesz tu wszystko
              czego potrzebujesz do swojego smartfona. Nasz sklep zlokalizowany
              jest w samym centrum miasta Gorlice, przy{" "}
              <span>ul. Adama Mickiewicza 3</span>. Uwielbiamy nowości
              technologiczne a naszą uwagę skupiliśmy na telefonach. Mamy
              nadzieję że naszą wiedzą i doświadczeniem pomożemy Ci w doborze
              odpowiedniego <span>telefonu</span>.
            </h3>
          </div>
        </div>
        <div className="endLine"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .titleContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4vh;
  }
  .title {
    margin: 0 3vw;
    width: 14vw;
    @media screen and (max-width: 800px) {
      width: auto;
    }
  }
  .titleLine {
    width: 30vw;
    height: 3px;
    background: var(--mainRed);
    @media screen and (max-width: 800px) {
      display: none;
    }
  }
  .endLine {
    width: 80vw;
    height: 3px;
    background: var(--mainRed);
    margin: 10vh auto 0;
    @media screen and (max-width: 800px) {
      display: none;
    }
  }

  .aboutMeInfo {
    text-align: center;
    font-size: 1.2rem;
    width: 80vw;
    margin: 0 auto 10vh;
    color: #222;
    font-family: "Cairo", sans-serif;
    border-left: 3px solid var(--mainRed);
    border-right: 3px solid var(--mainRed);
    @media screen and (max-width: 800px) {
      border: none;
      width: 90vw;
      font-size: 1rem;
    }
    span {
      color: var(--mainRed);
      text-shadow: 0 0 1px black;
    }
  }
  .aboutMeWrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60vw;
    margin: 0 auto;
    @media screen and (max-width: 800px) {
      width: 90vw;
      justify-content: space-between;
      flex-direction: column;
    }
    img {
      border: 2px solid var(--mainRed);
      border-radius: 10%;
      width: 200px;
      height: 200px;
      margin: 20px;
      box-shadow: 0 0 10px 1px black;
      float: left;
      filter: saturate(0.5);
      @media screen and (max-width: 800px) {
        float: none;
        margin: 5vh auto;
      }
    }
    h3 {
      text-align: center;
    }
  }
`;

export default AboutMePage;
