import { mount } from "@vue/test-utils";
import BaseBox from "@/components/BaseBox.vue";

describe("BaseBox.vue", () => {
  it("snapshot", () => {
    const wrapper = mount(BaseBox, {
      slots: {
        default: "<div>basebox</div>",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
  it("renders component correctly with slot", () => {
    const wrapper = mount(BaseBox, {
      slots: {
        default: "<div>basebox</div>",
      },
    });
    expect(wrapper.html()).toContain("<div>basebox</div>");
  });

  it("renders component with correct class", () => {
    const wrapper = mount(BaseBox);
    expect(wrapper.find(".box")).toBeTruthy();
  });
});
