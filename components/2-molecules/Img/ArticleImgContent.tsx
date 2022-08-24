import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  background-color: black;
`;

const Image = styled.img`
  display: block;
  width: 50%;
  min-width: 310px;
  margin: 0 auto;
`;

interface ArticleImg {
  src: string;
  alt: string;
  textContent: string;
}

export default function ArticleImg({
  src,
  alt,
  textContent,
}: ArticleImg): JSX.Element {
  return (
    <figure>
      <ImageWrapper>
        <Image src={src} alt={alt} />
      </ImageWrapper>
      <figcaption>{textContent}</figcaption>
    </figure>
  );
}
