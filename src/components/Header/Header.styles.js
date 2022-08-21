import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-image: linear-gradient(
    45deg,
    hsl(240deg 100% 20%) 0%,
    hsl(289deg 100% 21%) 11%,
    hsl(315deg 100% 27%) 22%,
    hsl(329deg 100% 36%) 33%,
    hsl(337deg 100% 43%) 44%,
    hsl(357deg 91% 59%) 56%,
    hsl(17deg 100% 59%) 67%,
    hsl(34deg 100% 53%) 78%,
    hsl(45deg 100% 50%) 89%,
    hsl(55deg 100% 50%) 100%
  );
  padding-top: 2rem;
  text-align: center;
  position: relative;
  /* height: 475px; */

  .github {
    position: absolute;
    top: 20px;
    left: 30px;

    a {
      color: #fff;
      i {
        font-size: 30px;
      }
    }
  }

  h1 {
    font-size: 50px;
    font-family: "DynaPuff", cursive;
    font-weight: 500;
  }

  p {
    font-family: "Quicksand", sans-serif;
  }
`;

export { HeaderWrapper };
