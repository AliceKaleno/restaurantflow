import TableCard from "./TableCard";

const tables = [
  {
    number: 1,
    status: "Livre",
    people: 0,
    total: "—",
  },
  {
    number: 2,
    status: "Ocupada",
    people: 4,
    total: "R$ 182,00",
  },
  {
    number: 3,
    status: "Reservada",
    people: 6,
    total: "R$ 0,00",
  },
  {
    number: 4,
    status: "Livre",
    people: 0,
    total: "—",
  },
  {
    number: 5,
    status: "Ocupada",
    people: 2,
    total: "R$ 96,00",
  },
  {
    number: 6,
    status: "Livre",
    people: 0,
    total: "—",
  },
] as const;

export default function TablesGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {tables.map((table) => (
        <TableCard
          key={table.number}
          number={table.number}
          status={table.status}
          people={table.people}
          total={table.total}
        />
      ))}
    </section>
  );
}