import React from "react";
import styled from "styled-components";

import responsiveSize from "../../../styles/responsiveSize";

const Image = styled.img`
  /* height: 50vh; */
  width: 100%;

  ${responsiveSize.mobile} {
    width: 100%;
    height: auto;
  }
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
      <Image src={src} alt={alt} />;<figcaption>{textContent}</figcaption>
    </figure>
  );
}
