import { CheckEmail } from "../src/checkEmail";

describe("CheckEmail", () => {
  let checker = new CheckEmail();
  describe("Check if an email is valid", () => {
    it("should return false for empty string", () => {
      const actual = checker.validate("");
      expect(actual).toBe(false);
    });
  });

  it("should return false if no @ present", () => {
    const actual = checker.validate("test.email.com");
    expect(actual).toBe(false);
  });

  it("should return false if no @ present", () => {
    const actual = checker.validate("test.email.com");
    expect(actual).toBe(false);
  });

  it("should return false if space present", () => {
    const actual = checker.validate("test @email.com");
    expect(actual).toBe(false);
  });

  it("should return false if domain has no dot", () => {
      const actual = checker.validate("test@emailcom");
    expect(actual).toBe(false);
    });
});
