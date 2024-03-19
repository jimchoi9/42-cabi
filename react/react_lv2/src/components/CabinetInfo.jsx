import React ,{ useState } from "react";
import styled from "styled-components";

const InfoBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #9747ff;
  border-radius: 10px;

`;

const CabinetInfo = () => {
  return (
    <InfoBox>
      정보
    </InfoBox>
  );
};

export default CabinetInfo;
