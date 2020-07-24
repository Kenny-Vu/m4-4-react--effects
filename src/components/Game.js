import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import cookieSrc from "../cookie.svg";
import Item from "./Item";

const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 10 },
  { id: "farm", name: "Farm", cost: 1000, value: 80 },
];

const Game = () => {
  // TODO: Replace this with React state!
  const [cookie, setCookie] = useState(500);
  const [purchasedItems, setPurchasedItems] = useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
  });
  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{cookie} cookies</Total>
          {/* TODO: Calcuate the cookies per second and show it here: */}
          <strong>0</strong> cookies per second
        </Indicator>
        <Button onClick={() => setCookie(cookie + 1)}>
          <Cookie src={cookieSrc} />
        </Button>
      </GameArea>

      <ItemArea>
        <SectionTitle>Items:</SectionTitle>
        <ul>
          {items.map((item, index) => {
            return (
              <Item
                key={item.id}
                itemInfo={item}
                handleClick={(event) => {
                  if (cookie >= item.cost) {
                    let numOwned = purchasedItems[`${item.id}`];
                    let itemKey = Object.keys(purchasedItems)[index];
                    let test = purchasedItems;
                    //IT WORKS, BUT THIS IS A BAD WAY TO DO IT, GET HELP TO FIX IT
                    test[`${itemKey}`] = numOwned + 1;
                    console.log(test);
                    // setPurchasedItems({
                    //   ...purchasedItems,
                    //   test: numOwned + 1,
                    // });
                    setCookie(cookie - item.cost);
                    console.log(purchasedItems);
                  } else window.alert("not enough cookies...");
                }}
                numOwned={purchasedItems[`${item.id}`]}
              />
            );
          })}
        </ul>
      </ItemArea>
      <HomeLink to="/">Return home</HomeLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const GameArea = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;
export const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  transition-duration: 0.2s;
  &&:active {
    transform: scale(0.9);
    outline: #24a0ed solid;
  }
  &&:focus {
    outline: #24a0ed solid;
  }
`;

const Cookie = styled.img`
  width: 200px;
`;

const ItemArea = styled.div`
  height: 100%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  color: yellow;
`;

const Indicator = styled.div`
  position: absolute;
  width: 250px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;

const Total = styled.h3`
  font-size: 28px;
  color: lime;
`;

const HomeLink = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;
  color: #666;
`;

export default Game;
