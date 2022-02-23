import { uuid } from "../src/index";

describe("UUID tests", () => {
  test("It returns an string", () => {
    expect(uuid()).toBe("string");
  });
});
