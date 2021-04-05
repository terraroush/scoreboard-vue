import {mount} from "@vue/test-utils";
import MatchupTitle from "@/components/MatchupTitle.vue";

describe("MatchupTitle.vue", () => {
    it("renders both team names", () => {
        const componentWrapper = mount(MatchupTitle, {
            propsData: {
                teamA: {name: "Team Edward", score: 0},
                teamB: {name: "Team Jacob", score: 0},
            }
        })

        expect(componentWrapper.text()).toContain("Team Edward")
        expect(componentWrapper.text()).toContain("Team Jacob")
    })
})