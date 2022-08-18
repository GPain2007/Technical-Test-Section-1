const targetAddUp = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        const arr = [i, j];
        let resultArr = arr.map((i) => nums[i]);
        return resultArr;
      }
    }
  }
};

module.exports = targetAddUp;
