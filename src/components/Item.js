import React from "react";
import styled from "styled-components";

const Item = ({ itemInfo, numOwned, handleClick }) => {
  const { id, name, cost, value } = itemInfo;
  return (
    <ItemContainer onClick={handleClick}>
      <div>
        <h4>{name}</h4>
        <span>Cost:{cost}</span>
      </div>
      <span>{numOwned}</span>
    </ItemContainer>
  );
};

const ItemContainer = styled.button`
  display: flex;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #fff;
  background div {
    display: block;
    margin: 0.5rem;
  }
  > span {
    font-size: 2rem;
  }
`;
export default Item;
