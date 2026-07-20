interface Props {
  status:
    | "Agendada"
    | "Confirmada"
    | "Finalizada"
    | "Cancelada";
}

export default function ReservationStatus({
  status,
}: Props) {
  const styles = {
    Agendada:
      "bg-blue-100 text-blue-700",

    Confirmada:
      "bg-green-100 text-green-700",

    Finalizada:
      "bg-slate-200 text-slate-700",

    Cancelada:
      "bg-red-100 text-red-700",
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