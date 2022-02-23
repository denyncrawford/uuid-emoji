import { uuid } from "./index";

describe("UUID tests", () => {
  test("It returns an string", () => {
    expect(uuid()).toBe("string");
  });
});
