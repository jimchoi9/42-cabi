import { useState } from "react";
// import "./App.css";
import styled from "styled-components";
import img1 from "./assets/undraw_work_in_progress_re_byic 1.svg";
import logo from "./assets/logo.svg";

const CabiMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #9747ff;
  /* color: #ffffffff; */

  .section1 {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;
  }
  .section2 {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #9747ff;
  }
  .mainBackground {
    background-color: #9747ff;
  }
  .mainColor {
    color: #9747ff;
  }

  .topText h1 {
    font-size: 32px;
    font-weight: 3rem;
  }
  .topText p {
    font-size: 2rem;
    color: #b18cff;
    font-weight: bold;
    font-weight: 3rem;
  }
  .bottomText p {
    font-size: 1.75rem;
    font-weight: bold;
    line-height: 3rem;
  }
  .image {
    padding: 84px 0 40px 0;
  }
  .loginBox {
    width: 260px;
    height: 400px;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 10px 10px 40px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 85px 80px;
  }
  .logo {
    width: 70px;
    height: 70px;
  }
  .text {
    text-align: center;
  }
  .text h2 {
    text-align: center;
    font-size: 50px;
    font-weight: 500;
  }
  .text p {
    font-size: 26;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 16px;
    color: #b18cff;
  }
  .button {
    background-color: #9747ff;
    width: 200px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color: #ffffff;
    border-radius: 6px;
    cursor: pointer;
    font-size: 18px;
    text-decoration: none;
    border: 0;
  }
  @media (max-width: 1060px) {
    .section1 {
      display: none;
    }
  }
  /* background-color: #ffff; */
`;

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CabiMain>
        <aside className="section1">
          <div className="topText">
            <h1>42서울 캐비닛 서비스</h1>
            <p>여러분의 일상을 가볍게</p>
          </div>
          <div className="image">
            <img src={img1} alt="사람" />
          </div>
          <div className="bottomText">
            <p>1,400명의 카뎃들에게</p>
            <p>사물함 서비스를 제공하기 위해</p>
            <p>
              <span className="mainColor">42Cabi </span>
              팀은 이와 같이 고민했습니다
            </p>
          </div>
        </aside>
        <nav className="section2">
          <div className="loginBox">
            <div className="logo">
              <img src={logo} alt="로고" />
            </div>
            <div className="text">
              <h2>42Cabi</h2>
              <p>여러분의 일상을 가볍게</p>
            </div>
            <button className="button" onclick="location.href='main.html'">
              L O G I N
            </button>
          </div>
        </nav>
      </CabiMain>
    </>
  );
}

export default App;
