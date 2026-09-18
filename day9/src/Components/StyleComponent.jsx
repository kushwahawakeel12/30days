import Styled, { styled } from "styled-components";

function StyleComponent() {
  const Heading = styled.h1`
    color: red;
  `;

  const Bt = styled.h1`
    color: red;
  `;

  const Btn = styled.button({
    color: "red",
    width: "233px",
  });
  return (
    <div>
      <Btn>click</Btn>
      <h1>style component in react js </h1>
      <Heading> ram</Heading>

      <Bt> hello ji</Bt>

      <Btn>login</Btn>
    </div>
  );
}

export default StyleComponent;
