// topicselection.ts
import { random } from "./utils.ts";

class topicselection {
    options(index: number) {
        return $(`//span[@class="badge rounded-pill mr-2 mb-1"][${index}]`);
    }

    ans(ansCount: number, i: number) {
        return $(`//div[@class="question-item fade-in pt-2"][${i}]/descendant::span[${random(ansCount)}]`);
    }
}

export default new topicselection();
