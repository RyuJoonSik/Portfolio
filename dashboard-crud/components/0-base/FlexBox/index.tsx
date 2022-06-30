import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxContentCenter = styled(Box)`
  justify-content: center;
`;

export const BoxContentLeft = styled(Box)`
  justify-content: flex-start;
`;

export const BoxContentRight = styled(Box)`
  justify-content: flex-end;
`;
