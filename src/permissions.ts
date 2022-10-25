import { PermissionFlagsBits, type PermissionFlags } from "./types";
export class Permissions {
  constructor(private types: PermissionFlags[]) {}

  compute() {
    let permission = 0n;
    this.types.forEach((type) => (permission += PermissionFlagsBits[type]));
    return String(permission);
  }
}
