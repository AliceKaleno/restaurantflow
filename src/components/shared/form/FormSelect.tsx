import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  label: string;
}

export default function FormSelect({
  label,
}: Props) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>

      <Select>

        <SelectTrigger>

          <SelectValue placeholder="Selecione" />

        </SelectTrigger>

        <SelectContent>

          <SelectItem value="pizza">
            Pizza
          </SelectItem>

          <SelectItem value="burger">
            Hambúrguer
          </SelectItem>

          <SelectItem value="drink">
            Bebida
          </SelectItem>

          <SelectItem value="dessert">
            Sobremesa
          </SelectItem>

        </SelectContent>

      </Select>

    </div>
  );
}