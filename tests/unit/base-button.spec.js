import { mount } from "@vue/test-utils";
import BaseButton from "@/components/BaseButton.vue";

const factory = (props = {}, slots = {}) => {
  return mount(BaseButton, {
    props: { ...props },
    slots: { ...slots },
  });
};

describe("BaseButton.vue", () => {
  it("snapshot", () => {
    const wrapper = factory();
    expect(wrapper.element).toMatchSnapshot();
  });
  it("renders component", () => {
    const wrapper = factory();
    expect(wrapper.find("button")).toBeTruthy();
  });
  it("renders class correctly according to props", () => {
    const wrapper = factory({ size: "small", variant: "primary" });

    expect(wrapper.find("button").classes()).toContain("button-small");
    expect(wrapper.find("button").classes()).toContain("button-primary");
  });
  it("emits correctly", async () => {
    const wrapper = factory();
    wrapper.vm.$emit("onClick");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().onClick).toBeTruthy();
  });
  it("renders slot", async () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: "<p>button</p>",
      },
    });

    expect(wrapper.html()).toContain("<p>button</p>");
  });
});
