export class CheckEmail {
  validate(email: string): boolean {
    if (email === "") return false;

     if (email.includes(" ")) return false;

    const parts = email.split("@");

    if (parts.length !== 2) return false;

    const [before, after] = parts;

    if (!before || !after) return false;

    if (!after.includes(".") || after.endsWith(".")) return false;

    return true;

  }

}
