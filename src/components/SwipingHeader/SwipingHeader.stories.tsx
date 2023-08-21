import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SwipingHeader from "./SwipingHeader"
import {scrollToId} from "./scrollToIdUtil";

const meta: Meta<typeof SwipingHeader> = {
  component: SwipingHeader,
  title: "SwipingHeader",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SwipingHeader>;

export const Primary: Story = (args) => (
  <SwipingHeader data-testId="InputField-id" {...args} />
);
Primary.args = {
  bodycomponent: <div style={{backgroundColor: "green", height: "1500px", width: "100%"}}>Body Component</div>,
  headercomponent: <div style={{backgroundColor: "cyan", height: "100%", width: "100%"}}>Header Component</div>
};

export const ScrollToUtil: Story = (args) => (
  <SwipingHeader data-testId="InputField-id" {...args} />
);
ScrollToUtil.args = {
  bodycomponent: <div style={{backgroundColor: "green", height: "1500px", width: "100%"}}>
    Body Component
    <div id="identifier">Id</div>
    </div>,
  headercomponent: <div style={{backgroundColor: "cyan", height: "100%", width: "100%"}}>
    Header Component
    <a onClick={() => scrollToId("identifier")}>Scroll to ID</a>
    <button onClick={() => scrollToId("identifier")}>Scroll to ID</button>
    </div>
};

export const ScrollToUtilSmooth: Story = (args) => (
  <SwipingHeader data-testId="InputField-id" {...args} />
);
ScrollToUtilSmooth.args = {
  bodycomponent: <div style={{backgroundColor: "green", height: "1500px", width: "100%"}}>
    Body Component
    <div id="identifier">Id</div>
    </div>,
  headercomponent: <div style={{backgroundColor: "cyan", height: "100%", width: "100%"}}>
    Header Component
    <a onClick={() => scrollToId("identifier", true)}>Scroll to ID</a>
    <button onClick={() => scrollToId("identifier", true)}>Scroll to ID</button>
    </div>
};

export const ScrollToUtilError: Story = (args) => (
  <SwipingHeader data-testId="InputField-id" {...args} />
);
ScrollToUtilError.args = {
  bodycomponent: <div style={{backgroundColor: "green", height: "1500px", width: "100%"}}>
    Body Component
    <div id="wrongidentifier">Id</div>
    </div>,
  headercomponent: <div style={{backgroundColor: "cyan", height: "100%", width: "100%"}}>
    Header Component
    <a onClick={() => scrollToId("identifier", true)}>Scroll to ID</a>
    <button onClick={() => scrollToId("identifier", true)}>Scroll to ID</button>
    </div>
};