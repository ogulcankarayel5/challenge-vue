import { mount } from "@vue/test-utils";
import BaseCard from "@/components/BaseCard.vue";

describe("BaseCard.vue", () => {
  it("snapshot", () => {
    const wrapper = mount(BaseCard);

    expect(wrapper.element).toMatchSnapshot();
  });
  it("renders component correctly with slot", () => {
    const wrapper = mount(BaseCard, {
      slots: {
        default: "<div>basecard</div>",
      },
    });
    expect(wrapper.html()).toContain("<div>basecard</div>");
  });

  it("renders component with correct class", () => {
    const wrapper = mount(BaseCard);
    expect(wrapper.find(".baseCard")).toBeTruthy();
  });
});
