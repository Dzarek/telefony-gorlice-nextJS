import styled from "styled-components";
import MyForm from "./MyForm";

const ContactPage = () => {
  return (
    <Wrapper className="main-section" id="kontakt">
      <h2 className="title">Kontakt</h2>
      <div className="contactContainer">
        <div className="formik">
          <div className="myForm">
            <MyForm />
          </div>
        </div>
        <div className="borderBetween"></div>
        <div className="contactMedia">
          <div className="address">
            <h1>Dane kontaktowe :</h1>
            <h3>
              <strong>Kamiński Robert - Telefony Komórkowe</strong>
            </h3>
            <p>
              <span>Adres:</span> ul.Adama Mickiewicza 3, 38-300 Gorlice
            </p>

            <p>
              <span>Telefon:</span> 791 838 332
            </p>
            <p>
              <span>E-mail:</span> komisgorlice@wp.pl
            </p>
          </div>
          <div className="mapsgo">
            <h3>Gdzie znajdę sklep?</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1291.431432905661!2d21.15740672731028!3d49.65688310522306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dc68da012df1f%3A0x87970223dcc5824f!2sKami%C5%84ski%20Robert.%20Telefony%20kom%C3%B3rkowe!5e0!3m2!1spl!2spl!4v1635809282037!5m2!1spl!2spl"
              allowfullscreen=""
              loading="lazy"
              className="mapContact"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 5vh;

  .borderBetween {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2px;
    background: var(--mainRed);
    height: 50vh;
    @media screen and (max-width: 800px) {
      width: 80vw;
      height: 2px;
      margin: 5vh auto 0;
    }
  }
  .contactContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: "Cairo", sans-serif;
    font-size: 1.2rem;
    width: 100vw;
    margin-top: -3vh;
    @media screen and (max-width: 800px) {
      flex-direction: column;
      margin-top: 5vh;
    }
  }
  .contactMedia {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    @media screen and (max-width: 800px) {
      width: 95vw;
    }
  }
  .formik {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    @media screen and (max-width: 800px) {
      width: 95vw;
    }
  }
  .address {
    padding-bottom: 3vh;
    height: 40vh;
    line-height: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media screen and (max-width: 800px) {
      height: 50vh;
      width: 90%;
    }
    h1 {
      font-family: "Teko", sans-serif;
      text-align: center;
      color: var(--mainRed);
      font-size: 2rem;
      margin: 5vh auto;
      letter-spacing: 2px;
      @media screen and (max-width: 800px) {
        font-size: 1.8rem;
      }
    }
    h3 {
      @media screen and (max-width: 800px) {
        margin-bottom: 2vh;
        text-align: center;
      }
    }
    span {
      color: var(--mainRed);
      text-shadow: none;
    }
  }
  .mapsgo {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    @media screen and (max-width: 800px) {
      width: 100%;
    }

    .mapContact {
      margin-top: 3vh;
      width: 100%;
      height: 40vh;
      border: var(--mainRed) 2px solid;
      border-radius: 10px;
    }
  }
`;

export default ContactPage;
