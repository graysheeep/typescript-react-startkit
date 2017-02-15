import * as React from "react";
import { shallow } from "enzyme";
import { Hello } from "../components/hello";

describe("Hello Component", () => {
  it("create", () => {
    const wrapper = shallow(<Hello />);
    expect(wrapper.hasClass("hello")).toBe(true);
  });
})