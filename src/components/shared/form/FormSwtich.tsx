import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface Props {
  label: string;
}

export default function FormSwitch({
  label,
}: Props) {
  return (
    <div className="flex items-center justify-between rounded-xl border p-4">

      <Label>{label}</Label>

      <Switch />

    </div>
  );
}