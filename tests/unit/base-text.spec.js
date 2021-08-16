import { shallowMount } from "@vue/test-utils";
import BaseText from "@/components/BaseText.vue";

const factory = (values = {}, props = {}) => {
  return shallowMount(BaseText, {
    data() {
      return {
        ...values,
      };
    },
    props: { ...props },
  });
};

describe("BaseText.vue", () => {
  it("snapshot", () => {
    const wrapper = factory();
    expect(wrapper.element).toMatchSnapshot();
  })
  it("renders text correctly ", () => {
    const msg = "Render Text";
    const wrapper = factory({}, { text: msg });
    expect(wrapper.find("p").text()).toEqual(msg);
  });
  it("renders size correctly ", () => {
    const wrapper = factory({}, { size: "small" });
    expect(wrapper.find("p").classes()).toContain("text-small");
  });
  it("renders fontWeight class correctly ", () => {
    const wrapper = factory({}, { bold: true });
    expect(wrapper.find("p").classes()).toContain("text-bold");
  });
});
