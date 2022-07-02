import React, { Component } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import Cookie from "./CookiePage";
import CookieConsent from "react-cookie-consent";

class MyForm extends Component {
  state = {
    status: "",
    visibleCookie: false,
  };

  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eu28q7p",
        "template_oizztce",
        e.target,
        "QPhckFRY63F4zWAKT"
      )
      .then(
        () => {
          e.target.reset();
          this.setState({ status: "SUCCESS" });
        },
        () => {
          this.setState({ status: "ERROR" });
        }
      );
  };

  render() {
    const { status } = this.state;
    const handleVisibleCookie = () => {
      this.setState({
        visibleCookie: false,
      });
    };
    return (
      <>
        <Wrapper>
          <form onSubmit={this.sendEmail}>
            <h1>Jeśli masz jakieś pytania, śmiało napisz do nas!</h1>
            <div className="inputs">
              <input
                type="text"
                name="name"
                placeholder="Imię i nazwisko"
                required
              />
              <input type="email" name="email" placeholder="E-mail" required />
            </div>
            <br />
            <textarea
              placeholder="Twoja wiadomość..."
              name="message"
              required
            ></textarea>

            <label className="labelCheck" htmlFor="accept">
              <p>
                <input type="checkbox" id="accept" name="accept" required />
                Wyrażam zgodę na przetwarzanie danych osobowych w celu
                odpowiedzi na mojego e-maila{" "}
                <span
                  onClick={() => this.setState({ visibleCookie: true })}
                  className="cookieLink"
                >
                  (Polityka Prywatności)
                </span>
              </p>
            </label>
            {status === "SUCCESS" ? (
              <p>Wiadomość wysłana! </p>
            ) : (
              <button>Wyślij</button>
            )}
            {status === "ERROR" && <p>ups... coś poszło nie tak!</p>}
          </form>
          {this.state.visibleCookie && (
            <Cookie handleVisibleCookie={handleVisibleCookie} />
          )}
        </Wrapper>
        <CookieConsent
          buttonText="Akceptuje"
          cookieName="myAwesomeCookieName2"
          className="cookieInfo"
          location="bottom"
          style={{
            background: "rgba(0,0,0, .8)",
            fontSize: "18px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100vw",
          }}
          buttonStyle={{
            color: "white",
            fontSize: "18px",
            backgroundColor: "rgb(120, 2, 2)",
            padding: "10px",
            borderRadius: "5px",
          }}
          containerClasses="cookieClass"
          expires={7}
        >
          Strona korzysta z plików cookies. Pozostając na niej wyrażasz zgodę na
          ich używanie. <br /> Ze szczegółowymi informacjami dotyczącymi cookies
          na tej stronie można się zapoznać tutaj:
          <span
            onClick={() => this.setState({ visibleCookie: true })}
            className="cookieLink"
          >
            (Polityka Prywatności)
          </span>
          .
        </CookieConsent>
      </>
    );
  }
}

const Wrapper = styled.div`
  form {
    width: 35vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 800px) {
      width: 90vw;
    }
    @media (orientation: landscape) and (max-width: 500px) {
      width: 95vw;
    }

    button {
      width: 35%;
      font-size: 1rem;
      padding: 1vh 0;
      font-family: "Cairo", sans-serif;
      background: #333;
      color: white;
      letter-spacing: 1px;
      border: 2px solid var(--mainRed);
      border-radius: 10px;
      cursor: pointer;
      transition: 0.5s;
      :hover {
        background: var(--mainRed);
      }
    }

    h1 {
      text-align: center;
      color: var(--mainRed);
      font-family: "Teko", sans-serif;
      margin: 0 auto 5vh;
      font-size: 1.8rem;
      letter-spacing: 2px;
    }
    .inputs {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        width: 46%;
        font-size: 1rem;
        padding: 1vh 2%;
        border: 2px solid var(--mainRed);
        border-radius: 10px;
        font-family: "Cairo", sans-serif;
      }
    }
    textarea {
      width: 100%;
      height: 25vh;
      padding: 2%;
      font-size: 1rem;
      border: 2px solid var(--mainRed);
      border-radius: 10px;
      font-family: "Cairo", sans-serif;
    }
    label {
      margin: 3vh auto;
      @media screen and (max-width: 800px) {
        font-size: 1rem;
      }
      input {
        margin-right: 10px;
      }
      span {
        color: var(--mainRed);
        text-shadow: none;
        cursor: pointer;
      }
    }
  }
  .cookie {
    width: 100vw;
  }
`;

export default MyForm;
