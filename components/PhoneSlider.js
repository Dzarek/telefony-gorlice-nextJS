import styled from "styled-components";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from "react-compare-slider";

const PhoneSlider = () => {
  return (
    <>
      <Wrapper className="phonesView">
        <ReactCompareSlider
          portrait={false}
          handle={
            <ReactCompareSliderHandle
              buttonStyle={{
                background: "rgb(150, 2, 2)",
                color: "white",
                transform: "rotate(0deg)",
              }}
            />
          }
          itemOne={
            <div className="phonesImages smartphonesView">
              <h3>Smartfony</h3>
              <img src="/images/phones/smartphones/iPhone12Pro-1.jpg" alt="" />
              <img
                src="/images/phones/smartphones/motorolaMotoG60s-1.jpg"
                alt=""
              />
              <img src="/images/phones/smartphones/oppoReno6Pro-1.jpg" alt="" />
              <img
                src="/images/phones/smartphones/samsungGalaxyS20-1.jpg"
                alt=""
              />
              <img
                src="/images/phones/smartphones/smartfonXIAOMI11Lite-1.jpg"
                alt=""
              />
            </div>
          }
          itemTwo={
            <div className="phonesImages oldphonesView">
              <img
                src="/images/phones/seniorphones/maxcom-classic-mm139.jpg"
                alt=""
              />
              <img
                src="/images/phones/seniorphones/maxcom-comfort-mm825.png"
                alt=""
              />
              <img
                src="/images/phones/seniorphones/maxcom-strong-mm917.png"
                alt=""
              />
              <img
                src="/images/phones/seniorphones/maxcom-classic-mm330-3g.jpg"
                alt=""
              />
              <img
                src="/images/phones/seniorphones/maxcom-comfort-mm730.jpg"
                alt=""
              />
              <h3>Telefony Seniorów</h3>
            </div>
          }
        />
      </Wrapper>
      <Wrapper2 className="phonesView">
        <ReactCompareSlider
          portrait={true}
          handle={
            <ReactCompareSliderHandle
              buttonStyle={{
                background: "rgb(150, 2, 2)",
                color: "white",
                transform: "rotate(90deg)",
              }}
            />
          }
          itemOne={
            <div className="phonesImages smartphonesView">
              <h3>Smartfony</h3>
              <img src="/images/phones/smartphones/iPhone12Pro-1.jpg" alt="" />
              <img
                src="/images/phones/smartphones/motorolaMotoG60s-1.jpg"
                alt=""
              />
              <img src="/images/phones/smartphones/oppoReno6Pro-1.jpg" alt="" />
              <img
                src="/images/phones/smartphones/samsungGalaxyS20-1.jpg"
                alt=""
              />
              <img
                src="/images/phones/smartphones/smartfonXIAOMI11Lite-1.jpg"
                alt=""
              />
            </div>
          }
          itemTwo={
            <div className="phonesImages oldphonesView">
              <img
                src="/images/phones/seniorphones/maxcom-classic-mm139.jpg"
                alt=""
              />
              <img
                src="/images/phones/seniorphones/maxcom-comfort-mm825.png"
                alt=""
              />
              <img
                src="/images/phones/seniorphones/maxcom-strong-mm917.png"
                alt=""
              />
              <img
                src="/images/phones/seniorphones/maxcom-classic-mm330-3g.jpg"
                alt=""
              />
              <img
                src="/images/phones/seniorphones/maxcom-comfort-mm730.jpg"
                alt=""
              />
              <h3>Telefony Seniorów</h3>
            </div>
          }
        />
      </Wrapper2>
    </>
  );
};

const Wrapper = styled.div`
  width: 80vw;
  height: 50vh;
  margin: 5vh auto;
  @media screen and (max-width: 800px) {
    height: 80vh;
    width: 75vw;
    display: none;
  }

  .phonesImages {
    border-radius: 10px;
    width: 80vw;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    overflow-x: hidden;
    img {
      width: 12vw;
    }
    h3 {
      color: white;
      letter-spacing: 3px;
      font-family: "Stick No Bills", sans-serif;
      font-size: 2rem;
      background: var(--mainRed);
      padding: 5px 10px;
    }
    h3:nth-child(1) {
      border-radius: 0 10px 10px 0;
      margin-top: 35vh;
    }
    h3:nth-last-child(1) {
      border-radius: 10px 0 0 10px;
      margin-bottom: 35vh;
    }
    @media screen and (max-width: 800px) {
      height: 80vh;
      width: 75vw;

      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      img {
        width: 40%;
      }
      h3 {
        letter-spacing: 0px;
        font-size: 1.5rem;
        padding: 5px 10px;
        width: 100%;
      }
      h3:nth-child(1) {
        border-radius: 10px 10px 0 0;
        margin-top: 0vh;
        align-self: flex-start;
      }
      h3:nth-last-child(1) {
        border-radius: 0 0 10px 10px;
        margin-bottom: 0vh;
        align-self: flex-end;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .oldphonesView {
      background: #222;
    }
  }
`;
const Wrapper2 = styled.div`
  width: 80vw;
  height: 50vh;
  margin: 5vh auto;
  display: none;
  @media screen and (max-width: 800px) {
    height: 80vh;
    width: 75vw;
    display: block;
  }

  .phonesImages {
    border-radius: 10px;
    width: 80vw;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    overflow-x: hidden;
    img {
      width: 12vw;
    }
    h3 {
      color: white;
      letter-spacing: 3px;
      font-family: "Stick No Bills", sans-serif;
      font-size: 2rem;
      background: var(--mainRed);
      padding: 5px 10px;
    }
    h3:nth-child(1) {
      border-radius: 0 10px 10px 0;
      margin-top: 35vh;
    }
    h3:nth-last-child(1) {
      border-radius: 10px 0 0 10px;
      margin-bottom: 35vh;
    }
    @media screen and (max-width: 800px) {
      height: 80vh;
      width: 75vw;

      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      img {
        width: 40%;
      }
      h3 {
        letter-spacing: 0px;
        font-size: 1.5rem;
        padding: 5px 10px;
        width: 100%;
      }
      h3:nth-child(1) {
        border-radius: 10px 10px 0 0;
        margin-top: 0vh;
        align-self: flex-start;
      }
      h3:nth-last-child(1) {
        border-radius: 0 0 10px 10px;
        margin-bottom: 0vh;
        align-self: flex-end;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .oldphonesView {
      background: #222;
    }
  }
`;

export default PhoneSlider;
