import { mount, shallowMount } from "@vue/test-utils";
import TheHeader from "@/components/TheHeader.vue";

describe("TheHeader.vue", () => {
  it("snapshot", () => {
    const wrapper = shallowMount(TheHeader);

    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders component correctly", () => {
    const wrapper = mount(TheHeader);
    expect(wrapper.find(".rightText").text()).toEqual("hepsiburada.com");
    expect(wrapper.find(".leftText").text()).toEqual("LinkVote Challenge");
  });
});
