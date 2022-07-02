import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <div className="logo-wrapper">
        <div className="logo1" suppressHydrationWarning={true}>
          <img src="/images/logo_aktiv.png" alt="logo" />
        </div>
        <div className="logo2">
          <h1>
            Robert Kamiński - <span>TELEFONY KOMÓRKOWE</span>
          </h1>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  .logo-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    height: 12vh;
    @media screen and (max-width: 800px) {
      width: 100%;
    }
    .logo1 {
      padding: 0vh 2vw 0vh 2vw;
      height: 12vh;
      img {
        width: 15vh;
        height: 12vh;
        filter: brightness(0.8);
        border-radius: 5px;
      }
    }
    .logo2 {
      font-size: 1.3rem;
      @media screen and (max-width: 800px) {
        font-size: 1rem;
      }
      h1 {
        text-shadow: none;
        font-family: "Teko", sans-serif;
        color: var(--mainRed);
        letter-spacing: 2px;
        @media screen and (max-width: 800px) {
          letter-spacing: 1px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        }
      }
      span {
        color: #fff;
      }
    }
  }
`;

export default Logo;
