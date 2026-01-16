export class CheckEmail {
  validate(email: string): boolean {
    if (email === "") return false;

    const parts = email.split("@");
    if (parts.length !== 2) return false;
    
    return true;
  }
}
