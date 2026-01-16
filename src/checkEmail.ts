export class CheckEmail {
  validate(email: string): boolean {
    if (email === "") return false;

    const parts = email.split("@");
    if (parts.length !== 2) return false;

    const [before, after] = parts;

    if (email.includes(" ")) return false;

    if (!after.includes(".") || after.endsWith(".")) return false;

    if (!before || !after) return false;

    return true;

  }

}
