const categories = [
  "Todos",
  "Pizza",
  "Hambúrguer",
  "Bebida",
  "Sobremesa",
];

interface Props {
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`
            rounded-full
            px-4
            py-2
            text-sm
            font-medium
            transition

            ${
              selected === category
                ? "bg-orange-500 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-orange-100"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}