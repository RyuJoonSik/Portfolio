import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Route, Routes } from "react-router-dom";

import EmptyPage from "./EmptyPage";
import MainProfileContents from "../../3-organisms/MainProfileContents/MainProfileContents";
import MainLoginForm from "../../3-organisms/MainLoginForm/MainLoginForm";

export default {
  title: "Pages/EmptyPage",
  component: EmptyPage,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof EmptyPage>;

const Template: ComponentStory<typeof EmptyPage> = () => (
  <Routes>
    <Route path="*" element={<EmptyPage />}>
      <Route index element={<MainProfileContents />} />
      <Route path="login" element={<MainLoginForm />} />
      {/* <Route path="profile" element={<MainProfile />} /> */}
      {/* <Route path="register" element={<MainRegister />} /> */}
      {/* <Route path="daily-life" element={<MainDailyLifePost />} /> */}
    </Route>
  </Routes>
);

export const Default = Template.bind({});
