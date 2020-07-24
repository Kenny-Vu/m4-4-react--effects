import React from "react";
import styled from "styled-components";

const Item = ({ itemInfo, numOwned, handleClick }) => {
  const { name, cost, value } = itemInfo;
  return (
    <ItemContainer onClick={handleClick}>
      <div>
        <h4>{name}</h4>
        <span>
          Cost: {cost} cookie(s). Produces {value} cookies/second.
        </span>
      </div>
      <span>{numOwned}</span>
    </ItemContainer>
  );
};

const ItemContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-bottom: solid thin grey;
  background: transparent;
  cursor: pointer;
  color: #fff;
  width: 600px;
  height: 100px;
  padding: 1rem;
  transition-duration: 0.2s;
  &&:active {
    transform: scale(0.9);
    outline: #24a0ed solid;
  }
  &&:focus {
    outline: #24a0ed solid;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0.5rem;
    width: 80%;
  }
  div h4 {
    font-size: 1.75rem;
  }
  div span {
    font-size: 1.25rem;
  }
  > span {
    font-size: 2.5rem;
  }
`;
export default Item;
