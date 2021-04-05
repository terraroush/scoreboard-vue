import { mount } from "@vue/test-utils";
import App from "../../src/App.vue";

describe("App.vue", () => {
  it("starts both teams with a score of zero", () => {
    const componentWrapper = mount(App);
    const scores = componentWrapper.findAll(".score");

    expect(scores.at(0).text()).toBe("0");
    expect(scores.at(1).text()).toBe("0");
  });

  it("adds 1 to the score when the plus button is clicked", async () => {
    const componentWrapper = mount(App);
    const team1AddBtn = componentWrapper.find(".add-button");
    const team1Score = componentWrapper.find(".score");

    await team1AddBtn.trigger("click");

    expect(team1Score.text()).toBe("1");

    await team1AddBtn.trigger("click");
    await team1AddBtn.trigger("click");
    await team1AddBtn.trigger("click");

    expect(team1Score.text()).toBe("4");
  });
});
