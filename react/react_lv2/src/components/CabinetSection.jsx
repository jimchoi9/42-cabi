import React, { useState } from "react";
import styled from "styled-components";
import CabinetInfo from "./CabinetInfo";

const Sectoin = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

const CabinetSectoin = () => {
  return (
    <Sectoin>
        <CabinetInfo></CabinetInfo>
        Sectoin
    </Sectoin>
  );
};

export default CabinetSectoin;
