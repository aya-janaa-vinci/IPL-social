import { CheckEmail } from "../src/checkEmail";

describe("CheckEmail", () => {
  let checker = new CheckEmail();
  describe("Check if an email is valid", () => {
    it("should return false for empty string", () => {
      const actual = checker.validate("");
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

    it("should return false if email has no dot", () => {
      const actual = checker.validate("test@emailcom");
      expect(actual).toBe(false);
    });

    it("should return false if email ends with dot", () => {
      const actual = checker.validate("test@email.com.");
      expect(actual).toBe(false);
    });

    it("should return false if no text before @", () => {
      const actual = checker.validate("@email.com");
      expect(actual).toBe(false);
    });

    it("should return false if no text after @", () => {
      const actual = checker.validate("test@");
      expect(actual).toBe(false);
    });
  });
});
