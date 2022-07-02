import styled from "styled-components";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState, useRef } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {
  const [offset, setOffset] = useState(0);

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  return (
    <>
      {process.browser && window.pageYOffset === 0 ? (
        <Wrapper>
          <Logo />
          <div className="video-container">
            <video
              src="/images/video4.mp4"
              autoPlay
              muted
              loop
              playsInline
              type="video/mp4"
            ></video>
          </div>
          <div className="nav-container">
            <Link to="smartfony" smooth={true} offset={-210} duration={1000}>
              Telefony
            </Link>
            <h2>|</h2>
            <Link to="akcesoria" smooth={true} offset={-300} duration={1000}>
              Akcesoria
            </Link>
            <h2>|</h2>
            <Link to="serwis" smooth={true} offset={-250} duration={1500}>
              Serwis
            </Link>
            <h2>|</h2>
            <Link to="o_mnie" smooth={true} offset={-300} duration={1500}>
              O nas
            </Link>
            <h2>|</h2>
            <Link to="faq" smooth={true} offset={-250} duration={2000}>
              FAQ
            </Link>
            <h2>|</h2>
            <Link to="dpd" smooth={true} offset={-250} duration={2000}>
              Pickup DPD
            </Link>
            <h2>|</h2>
            <Link to="kontakt" smooth={true} offset={-300} duration={2000}>
              Kontakt
            </Link>
          </div>
          <div className="nav-container2">
            <div className="nav-header">
              <div
                onClick={() => {
                  scroll.scrollToTop();
                }}
                className="logo1"
              >
                <img src="/images/logo_aktiv.png" alt="logo" />
              </div>
              <div className="logo2">
                <h2>
                  Robert Kamiński - <span>TELEFONY KOMÓRKOWE</span>
                </h2>
              </div>
              <button className="nav-toggle" onClick={toggleLinks}>
                <FaBars />
              </button>
            </div>
            <div className="links-container" ref={linksContainerRef}>
              <ul className="links" ref={linksRef}>
                <Link
                  onClick={toggleLinks}
                  to="smartfony"
                  smooth={true}
                  offset={-550}
                  duration={1000}
                >
                  Telefony
                </Link>

                <Link
                  onClick={toggleLinks}
                  to="akcesoria"
                  smooth={true}
                  offset={-600}
                  duration={1000}
                >
                  Akcesoria
                </Link>

                <Link
                  onClick={toggleLinks}
                  to="serwis"
                  smooth={true}
                  offset={-550}
                  duration={1500}
                >
                  Serwis
                </Link>

                <Link
                  onClick={toggleLinks}
                  to="o_mnie"
                  smooth={true}
                  offset={-600}
                  duration={1500}
                >
                  O nas
                </Link>

                <Link
                  onClick={toggleLinks}
                  to="faq"
                  smooth={true}
                  offset={-550}
                  duration={2000}
                >
                  FAQ
                </Link>
                <Link
                  onClick={toggleLinks}
                  to="dpd"
                  smooth={true}
                  offset={-550}
                  duration={2000}
                >
                  Pickup DPD
                </Link>

                <Link
                  onClick={toggleLinks}
                  to="kontakt"
                  smooth={true}
                  offset={-600}
                  duration={2000}
                >
                  Kontakt
                </Link>
              </ul>
            </div>
          </div>
        </Wrapper>
      ) : (
        <Wrapper2>
          <Logo />
          <div className="video-container">
            <video
              src="/images/video4.mp4"
              autoPlay
              muted
              loop
              playsInline
              type="video/mp4"
            ></video>
          </div>
          <div className="nav-container">
            <Link to="smartfony" smooth={true} offset={-30} duration={1000}>
              Telefony
            </Link>
            <h2>|</h2>
            <Link to="akcesoria" smooth={true} offset={-100} duration={1000}>
              Akcesoria
            </Link>
            <h2>|</h2>
            <Link to="serwis" smooth={true} offset={-50} duration={1500}>
              Serwis
            </Link>
            <h2>|</h2>
            <Link to="o_mnie" smooth={true} offset={-100} duration={1500}>
              O nas
            </Link>
            <h2>|</h2>
            <Link to="faq" smooth={true} offset={-50} duration={2000}>
              FAQ
            </Link>
            <h2>|</h2>
            <Link to="dpd" smooth={true} offset={-50} duration={2000}>
              Pickup DPD
            </Link>
            <h2>|</h2>
            <Link to="kontakt" smooth={true} offset={-100} duration={2000}>
              Kontakt
            </Link>
          </div>
          <div className="nav-container2">
            <div className="nav-header">
              <div
                onClick={() => {
                  scroll.scrollToTop();
                }}
                className="logo1"
              >
                <img src="/images/logo_aktiv.png" alt="logo" />
              </div>
              <div className="logo2">
                <h2>
                  Robert Kamiński - <span>TELEFONY KOMÓRKOWE</span>
                </h2>
              </div>
              <button className="nav-toggle" onClick={toggleLinks}>
                <FaBars />
              </button>
            </div>
            <div className="links-container" ref={linksContainerRef}>
              <ul className="links" ref={linksRef}>
                <Link
                  onClick={toggleLinks}
                  to="smartfony"
                  smooth={true}
                  offset={-30}
                  duration={1000}
                >
                  Telefony
                </Link>
                <Link
                  onClick={toggleLinks}
                  to="akcesoria"
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  Akcesoria
                </Link>

                <Link
                  onClick={toggleLinks}
                  to="serwis"
                  smooth={true}
                  offset={-50}
                  duration={1500}
                >
                  Serwis
                </Link>

                <Link
                  onClick={toggleLinks}
                  to="o_mnie"
                  smooth={true}
                  offset={-100}
                  duration={1500}
                >
                  O nas
                </Link>

                <Link
                  onClick={toggleLinks}
                  to="faq"
                  smooth={true}
                  offset={-50}
                  duration={2000}
                >
                  FAQ
                </Link>
                <Link
                  onClick={toggleLinks}
                  to="dpd"
                  smooth={true}
                  offset={-50}
                  duration={2000}
                >
                  Pickup DPD
                </Link>

                <Link
                  onClick={toggleLinks}
                  to="kontakt"
                  smooth={true}
                  offset={-100}
                  duration={2000}
                >
                  Kontakt
                </Link>
              </ul>
            </div>
          </div>
          <button
            className="upBtn"
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            <BsFillArrowUpSquareFill />
          </button>
        </Wrapper2>
      )}
    </>
  );
};

const Wrapper = styled.nav`
  width: 100vw;
  height: 24vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  position: relative;
  box-sizing: border-box;
  background: #000;
  opacity: 0;
  animation: showWrapper 1s 1 forwards;

  @media screen and (max-width: 800px) {
    margin-top: -12vh;
    height: auto;
  }

  @keyframes showWrapper {
    100% {
      opacity: 1;
    }
  }

  video {
    object-fit: cover;
    width: 100vw;
    height: 100%;
    z-index: -2;
    opacity: 0.9;
    /* filter: brightness(0.8); */
  }
  .video-container {
    opacity: 1;
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .nav-container2 {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    background: rgba(0, 0, 0, 0.6);
    @media screen and (min-width: 801px) {
      display: none;
    }

    .logo1 {
      /* padding: 0vh 1vw 0vh 1vw; */
      /* background: rgba(100, 24, 24, 1); */
      height: 12vh;
      img {
        /* margin: 3.5vh auto;
        height: 5vh; */
        width: 13vh;
        height: 12vh;
        filter: brightness(0.8);
        transform: rotateY(180deg);
        border-radius: 5px 0 0 5px;
        z-index: 999999;
      }
    }
    .logo2 {
      font-size: 1.3rem;
      @media screen and (max-width: 800px) {
        font-size: 0.9rem;
      }
      h2 {
        text-shadow: none;
        font-family: "Teko", sans-serif;
        /* color: rgb(140, 64, 64); */
        color: var(--mainRed);
        letter-spacing: 2px;
        @media screen and (max-width: 800px) {
          letter-spacing: 1px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
      span {
        color: #fff;
      }
    }

    .nav-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      color: white;
    }
    .nav-toggle {
      font-size: 1.8rem;
      color: white;
      background: transparent;
      border-color: transparent;
      transition: 0.5s;
      cursor: pointer;
      margin: 0 8vw;
    }

    .links-container {
      height: 0;
      overflow: hidden;
      transition: 0.5s;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
    .show-container {
      height: 10rem;
    }
    .links a {
      color: white;
      text-transform: uppercase;
      letter-spacing: 3px;
      display: block;
      padding: 1rem;
      text-align: center;
      font-family: "Stick No Bills", sans-serif;
      font-size: 1.3rem;
      width: 100vw;
      font-weight: bold;
    }
    .links a:nth-last-of-type(1) {
      padding-bottom: 2rem;
    }
    .links a:nth-of-type(1) {
      padding-top: 2rem;
    }
    .links a:hover {
      background: var(--clr-primary-8);
      color: var(--clr-primary-5);
      padding-left: 1.5rem;
    }
  }
  .nav-container {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70vw;
    height: 100%;

    @media screen and (max-width: 800px) {
      display: none;
    }
    a {
      font-size: 1.3rem;
      color: whitesmoke;
      text-shadow: 0px 0px 1px black;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-family: "Stick No Bills", sans-serif;
      font-weight: 700;
      letter-spacing: 2px;
      cursor: pointer;
      transition: 0.2s;
      :hover {
        margin-top: 10px;
      }
    }
    h2 {
      font-family: arial;
      color: white;
      text-shadow: none;
      margin-bottom: 5px;
    }
  }
  .icons-down {
    margin-left: 1vw;
    margin-right: -1vw;
  }
`;
const Wrapper2 = styled.nav`
  width: 100vw;
  height: 22vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  position: relative;
  box-sizing: border-box;
  background: #000;
  border-bottom: 4px solid var(--mainRed);
  position: fixed;
  margin-top: -12vh;
  opacity: 0;
  animation: showWrapper 1s 1 forwards;
  @media screen and (max-width: 800px) {
    height: auto;
  }
  @keyframes showWrapper {
    100% {
      opacity: 1;
    }
  }

  video {
    object-fit: cover;
    width: 100vw;
    height: 100%;
    z-index: -2;
    opacity: 0.9;
    filter: brightness(0.8);
  }
  .video-container {
    opacity: 1;
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .nav-container2 {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    background: rgba(0, 0, 0, 0.6);
    @media screen and (min-width: 801px) {
      display: none;
    }
    .logo1 {
      /* padding: 0vh 1vw 0vh 1vw; */
      /* background: rgba(100, 24, 24, 1); */
      height: 12vh;
      img {
        /* margin: 3.5vh auto;
        height: 5vh; */
        width: 13vh;
        height: 12vh;
        filter: brightness(0.8);
        transform: rotateY(180deg);
        border-radius: 5px 0 0 5px;
        z-index: 999999;
      }
    }
    .logo2 {
      font-size: 1.3rem;
      @media screen and (max-width: 800px) {
        font-size: 0.9rem;
      }
      h2 {
        text-shadow: none;
        font-family: "Teko", sans-serif;
        /* color: rgb(140, 64, 64); */
        color: var(--mainRed);
        letter-spacing: 2px;
        @media screen and (max-width: 800px) {
          letter-spacing: 1px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
      span {
        color: #fff;
      }
    }

    .nav-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      color: white;
    }
    .nav-toggle {
      font-size: 1.8rem;
      color: white;
      background: transparent;
      border-color: transparent;
      transition: 0.5s;
      cursor: pointer;
      margin: 0 8vw;
    }

    .links-container {
      height: 0;
      overflow: hidden;
      transition: 0.5s;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
    .show-container {
      height: 10rem;
    }
    .links a {
      color: white;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 3px;
      display: block;
      padding: 1rem;
      text-align: center;
      font-family: "Stick No Bills", sans-serif;
      font-size: 1.3rem;
      width: 100vw;
      font-weight: bold;
    }
    .links a:nth-last-of-type(1) {
      padding-bottom: 2rem;
    }
    .links a:nth-of-type(1) {
      padding-top: 2rem;
    }
    .links a:hover {
      background: var(--clr-primary-8);
      color: var(--clr-primary-5);
      padding-left: 1.5rem;
    }
  }
  .nav-container {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70vw;
    height: 100%;
    @media screen and (max-width: 800px) {
      display: none;
    }
    a {
      font-size: 1.3rem;
      color: whitesmoke;
      text-shadow: 0px 0px 1px black;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-family: "Stick No Bills", sans-serif;
      font-weight: 700;
      letter-spacing: 2px;
      cursor: pointer;
      transition: 0.2s;
      :hover {
        margin-top: 10px;
      }
    }
    h2 {
      font-family: arial;
      color: white;
      text-shadow: none;
      margin-bottom: 5px;
    }
  }
  .icons-down {
    margin-left: 1vw;
    margin-right: -1vw;
  }
  .upBtn {
    position: fixed;
    bottom: 3vh;
    right: 3vw;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: var(--mainRed);
    transition: 0.5s;
    cursor: pointer;
  }
`;

export default Navbar;
