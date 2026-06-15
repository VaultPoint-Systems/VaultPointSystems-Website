import Image from "next/image";

export function Mark({ small }: { small?: boolean; tone?: "accent" | "signal" }) {
  const s = small ? 22 : 32;
  return (
    <Image src="/vaultpoint.svg" alt="VaultPoint Systems" width={s} height={s} />
  );
}
