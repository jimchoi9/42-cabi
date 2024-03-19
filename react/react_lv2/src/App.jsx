import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import axios from "axios";
import account_circle from "./assets/images/account_circle.svg";
import building_name from "./assets/images/building name.svg";
import logo from "./assets/images/logo.svg";
import cabipackage from "./assets/images/package.svg";
import undraw_work_in_progress_re_byic from "./assets/images/undraw_work_in_progress_re_byic 1.svg";
import styled from "styled-components";
import CabinetSection from "./components/CabinetSection";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:4000/floors");
        setData(response.data);
      } catch (error) {
        console.log("error임", error);
      }
    }
    fetchData();
  }, []);

  return (
    <CabiMain>
      <div>
        <h1>all cabinet</h1>
        {data &&
          data.map((floor) => (
            <div key={floor.floorNumber}>
              <h2>floor {floor.floorNumber}</h2>
              {floor.sections.map((section) => (
                <div key={section.section}>
                  <h3>section {section.section}</h3>
                  {section.cabinets.map((cabinet) => (
                    <div key={cabinet.cabinetId}>
                      <p>{cabinet.cabinetId}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
      </div>
      {/* <nav className="topNavigation">
        <div className="topLogo1">
          <img src={logo} alt="로고" />
          <img src={building_name} alt="cabi" />
        </div>
        <div className="topLogo2">
          <img src={account_circle} alt="cabi" />
          <img src={cabipackage} alt="cabi" />
        </div>
      </nav>
      <section>
        <nav className="sideNav">
          <div className="leftNavigation">
            <ul className="floor" id="floor">
              <li className="clicked">HOME</li>
              <li>2층</li>
              <li>4층</li>
              <li>5층</li>
            </ul>
          </div>
          <div className="leftSectionNavigation">
            <ul className="zone">
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
          </div>
        </nav>
        <main className="main">
          <div className="location">위치</div>
          <CabinetSection />
        </main>
      </section>
      <footer className="tabBar">
        <ul className="floor">
          <li>HOME</li>
          <li>2층</li>
          <li>4층</li>
          <li>5층</li>
        </ul>
      </footer> */}
    </CabiMain>
  );
}

export default App;

const CabiMain = styled.div`
  /* color: red; */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 1920px;
  height: 1080px;
  /* background-color: red; */

  .topNavigation {
    /* border: 1px solid blue; */
    width: 100%;
    /* width: 1920px; */
    height: 80px;
    background-color: #9747ff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .topLogo1 {
    margin-left: 50px;
    width: 130px;
    height: 40px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }
  .topLogo2 {
    margin-right: 50px;
    width: 80px;
    height: 30px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }
  section {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  .sideNav {
    width: 350px;
    height: 100%;
    /* height: 1000px; */
    display: flex;
    justify-content: center;
    /* align-items: center; */
    /* flex-direction: row; */
  }
  .leftNavigation {
    /* border: 1px solid blue; */
    background-color: blue;
    width: 90px;
    height: 1000px;
    display: flex;
    justify-content: center;
    /* margin-bottom: 0; */

    /* align-items: center; */
  }
  .floor {
    list-style-type: none;
    font-size: 20px;
  }
  .floor li {
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    cursor: pointer;
  }
  .floor li.clicked {
    width: 80px;
    height: 40px;
    background-color: #9747ff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    color: aliceblue;
  }

  .leftSectionNavigation {
    /* border: 1px solid green; */
    background-color: green;
    padding-top: 20px;
    border-right: 3px solid #e0e0e0;
    border-left: 3px solid #e0e0e0;
    width: 240px;
    display: flex;
    justify-content: center;
    height: 1000px;
  }
  .zone {
    list-style-type: none;
    font-size: 15px;
  }
  .zone li {
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    .sideNav {
      display: none;
    }
  }
  .main {
    /* margin-top: 0px; */
    background-color: orange;
    /* border: 1px solid red; */
    width: 100%;
    height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .location {
    height: 80px;
    display: flex;
    align-items: center;
  }
  .cabinetAbailable {
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .cabinetAbailable div {
    padding: 3px;
    width: 45px;
    height: 45px;
    background-color: #9747ff;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    color: #e0e0e0;
  }
  .cabinetPull div {
    padding: 3px;
    width: 45px;
    height: 45px;
    background-color: #bcbcbc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    color: #1b1b1b;
  }
  .cabinetAbailable img {
    width: 15px;
    height: 15px;
  }
  .cabinetList.pull img {
    width: 15px;
    height: 15px;
    filter: invert(100%);
  }

  .tabBar {
    /* background-color: pink; */
    width: 100%;
    height: 80px;
    border-top: 3px solid #e0e0e0;
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }
  .tabBar ul {
    width: 100%;
    height: 80px;
    display: flex;
    padding-left: 60px;
    padding-right: 60px;
    /* justify-content: center; */
    flex-direction: row;
    justify-content: space-between;
  }
  .tabBar ul.clicked {
    width: 80px;
    height: 40px;
    background-color: #9747ff;
    border-radius: 5px;
    color: #e0e0e0;
    display: flex;
    padding-left: 60px;
    padding-right: 60px;
    /* justify-content: center; */
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    .tabBar {
      display: none;
    }
  }
  .location {
    background-color: pink;
  }
`;
