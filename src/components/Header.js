import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        {/* In order to push the pop up menu stuff to the side we create a div/wrapper around it and then display flex it. If you ever wanna align something, remember to wrap it. */}
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  // fixed means the position will always be near/at the top no matter where you scroll on the page
  position: fixed;
  display: flex;
  align-items: center;
  // This is how you resolve the issue of things being squished together/ disappearing when minimizing the screen
  justify-content: space-between;
  padding: 0 20px;
  // These bottom 3 are just so we can expand the header to the full length of the page.
  // Top 0 means it sticks to the top 0 of page
  top: 0;
  // Top 0 of left page
  left: 0;
  // Top 0 of right page
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  // This keeps them from being on top of each other to side by side
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  // Targets all a tags
  a {
    // This makes the text bolder
    font-weight: 600;
    text-transform: uppercase;
    // 0 here means top and bottom, so 0 top and bottom while left and right is 10px
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  // Targets all a tags
  a {
    // This makes the text bolder
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  // This is called "Inline If-Else with Conditional Operator", and here is says that if props.show if true then translate it 0 px otherwise if false translate it all the way off the screen.
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
