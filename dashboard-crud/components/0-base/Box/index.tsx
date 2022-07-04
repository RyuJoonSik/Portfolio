import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(${(props) => props.theme.color.ultramarineBlue});
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

export const HeaderBox = styled(Box).attrs({
  as: "header",
})`
  position: relative;

  height: 4rem;
  padding: 0 3rem;
  background-color: rgb(${({ theme }) => theme.color.ultramarineBlue});
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
`;

export const MainBox = styled(BoxContentCenter).attrs({
  as: "main",
})`
  background-color: rgb(${({ theme }) => theme.color.antiFlashWhite});
`;

export const ProfileItemBox = styled.div`
  overflow: hidden;
  max-width: 63.75rem;
  margin: 1.25rem 0;
  border-radius: 10px;
  box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.12),
    0px 2px 2px -1px rgba(0, 0, 0, 0.05);
`;

export const ProfileItemContentBox = styled.div`
  box-sizing: border-box;
  padding: 1.5rem;
  background-color: rgb(${({ theme }) => theme.color.white});

  color: rgb(${({ theme }) => theme.color.gunmetal});
`;
