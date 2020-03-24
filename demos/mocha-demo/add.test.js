let add = require("./add");
let expect = require("chai").expect;

describe("加法测试", () => {
  it("1+1应该等于2", () => {
    expect(add(1, 1)).to.be.equal(2);
  });
});
