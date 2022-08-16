import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Article from "./Article";

export default {
  title: "Atoms/Article/Article",
  component: Article.Full,
} as ComponentMeta<typeof Article.Full>;

const Template: ComponentStory<typeof Article.Full> = () => (
  <>
    <Article.Full>
      <h3>Heading 3</h3>
      <p>Default</p>
    </Article.Full>
    <Article.Small>
      <h3>Heading 3</h3>
      <p>Small</p>
    </Article.Small>
  </>
);

export const Default = Template.bind({});
