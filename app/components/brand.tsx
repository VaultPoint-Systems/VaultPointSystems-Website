import Image from "next/image";

export function Mark({ small = false }: { small?: boolean }) {
  const s = small ? 28 : 42;
  return (
    <Image src="/vaultpoint.svg" alt="VaultPoint Systems" width={s} height={s} />
  );
}
