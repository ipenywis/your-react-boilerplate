import { Button } from "ui";
import tw from "twin.macro";
import styled from "@emotion/styled";

// const Title = tw.h1`
//   text-7xl
//   text-blue-500
// `;

const StyledTitle = styled.h1`
  ${tw`
    text-8xl
    text-green-500
  `};
`;

export default function Web() {
  return (
    <div>
      <StyledTitle>Hola</StyledTitle>
      <h1 className="bg-red-500">Web</h1>
      <h2>Hola there</h2>
      <h3>Boom</h3>
      <Button />
    </div>
  );
}
