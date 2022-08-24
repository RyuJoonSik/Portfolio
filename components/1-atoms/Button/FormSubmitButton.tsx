import styled from "styled-components";

import spaceSize from "../../../styles/spaceSize";
import fontSize from "../../../styles/fontSize";
import Button from "./Button";

const FormSubmitButton = styled(Button.Blue)`
  width: 100%;
  padding: ${spaceSize.small} 0;
  border-radius: ${spaceSize.smaller};

  ${fontSize.large};
  text-align: center;
`;

export default FormSubmitButton;
