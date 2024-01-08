import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import img1 from "./assets/undraw_work_in_progress_re_byic 1.svg";
import logo from "./assets/logo.svg";

// const Main = styled.div`
//   margin: 0px;
//   padding: 0px;
//   width: 100%;
//   height: 100%;
//   background-color: #000;
// `;

const CabiMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #9747ff;
  /* background-color: #ffff; */
`;

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CabiMain>
        <aside class="section1">
          <div class="topText">
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
