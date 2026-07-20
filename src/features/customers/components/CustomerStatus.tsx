interface CustomerStatusProps {
  status: "Novo" | "Frequente" | "VIP";
}

export default function CustomerStatus({
  status,
}: CustomerStatusProps) {
  const styles = {
    Novo: "bg-blue-100 text-blue-700",

    Frequente: "bg-amber-100 text-amber-700",

    VIP: "bg-emerald-100 text-emerald-700",
  };

  return (
    <span
      className={`
        inline-flex
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        ${styles[status]}
      `}
    >
      {status}
    </span>
  );
}