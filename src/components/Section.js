import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {/* Now we have it set to if the right button exists, then show it else don't  */}
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="\images\down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  //Means the full view width
  width: 100vw;
  height: 100vh;
  // This is to get the image to actually fit nicely on screen
  background-size: cover;
  // This is to go inside of the background image and change stuff
  background-position: center;
  background-repeat: no-repeat;
  //background-image: url("/images/model-s.jpg");
  display: flex;
  // This means you're going to flex things from top to bottom
  flex-direction: column;
  // This pushes things/the two buttons to the bottom now. Usually does alignment for horizontal sections, but is switched when you changed the flex direction
  // Also this means it creates the same space-between each component
  justify-content: space-between;
  // This aligns them horizontally. Normally it's backwards, as in align does stuff vertically while justify does stuff vertically
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  z-index: -1;
`;

// To stack the buttons from left to right we edit it here to have display flex and also in the "Wrap" since that is what holds all of the items on the page
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  // This is so when the screen gets to a smaller size (768px), the buttons start to go in column order so both end up on screen
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  // This turns the square around them into the rounded edges we have
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

// For this one we're going to use the left button as a reference now. By doing this it allows it to inherit all the CSS of the LeftButton
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

// This was made to fix the issue of the buttons and arrow being so far apart because of the space between each component.
// We fix that by making them one component. The arrow and buttons.
const Buttons = styled.div``;
