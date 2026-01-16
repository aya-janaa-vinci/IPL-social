import { CheckEmail } from "../src/checkEmail";

describe("CheckEmail", () => {
  describe("Check if an email is valid", () => {
    it("should return false for empty string", () => {
      let checker = new CheckEmail();
      const actual = checker.validate("");
      expect(actual).toBe(false);
    });
  });
});
