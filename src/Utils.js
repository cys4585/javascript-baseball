const MissionUtils = require("@woowacourse/mission-utils");

const utils = {
  print(message) {
    MissionUtils.Console.print(message);
  },
  readLine(question) {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine(question, (answer) => {
        resolve(answer);
      });
    });
  },
  pickNumberInRange(startInclusive, endInclusive) {
    return MissionUtils.Random.pickNumberInRange(startInclusive, endInclusive);
  },
  closeIO() {
    MissionUtils.Console.close();
  },
};

module.exports = utils;
