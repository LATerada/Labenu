import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = ({post}) => {
  return (
    <ContainerPostagem>
      <TitleHeader>{post.title === "" ? "Insira um título" : post.title}</TitleHeader>
      <Image src={post.image === "" ? "https://picsum.photos/600/400?grayscale" : post.image} />
      <Description>{post.description === "" ? "Insira uma descriçāo" : post.description}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
