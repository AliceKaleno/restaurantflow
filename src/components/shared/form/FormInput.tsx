import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormInputProps {
  label: string;
  placeholder?: string;
  type?: string;
}

export default function FormInput({
  label,
  placeholder,
  type = "text",
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>

      <Input
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}