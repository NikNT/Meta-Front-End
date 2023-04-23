const addFive = require("./addFive");

test("Returns the Input + 5", () => {
  expect(addFive(1)).toBe(6);
});
