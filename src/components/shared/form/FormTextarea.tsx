import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  label: string;
  placeholder?: string;
}

export default function FormTextarea({
  label,
  placeholder,
}: Props) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>

      <Textarea
        rows={4}
        placeholder={placeholder}
      />
    </div>
  );
}