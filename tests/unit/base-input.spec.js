import { mount } from "@vue/test-utils";
import BaseInput from "@/components/BaseInput.vue";

const factory = (props = {}, slots = {}) => {
  return mount(BaseInput, {
    props: { ...props },
    slots: { ...slots },
  });
};

describe("BaseBox.vue", () => {
  it("snapshot", () => {
    const wrapper = factory();

    expect(wrapper.element).toMatchSnapshot();
  });
  it("changes value correctly", async () => {
    const wrapper = factory({ modelValue: "" });

    const input = wrapper.find(".input-value");
    expect(input.element.value).toBe("");
    await input.setValue("deneme");

    expect(input.element.value).toBe("deneme");
  });
  it("renders label name", () => {
    const wrapper = factory({ label: "user" });

    expect(wrapper.find(".input-label").text()).toBe("user")
  })
});
