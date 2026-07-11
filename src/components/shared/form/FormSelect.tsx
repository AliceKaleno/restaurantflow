"use client";

import {
  ControllerRenderProps,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";

import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> {
  label: string;
  placeholder?: string;
  field: ControllerRenderProps<TFieldValues, TName>;
  error?: FieldError;
  options: Option[];
}

export default function FormSelect<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
>({
  label,
  placeholder,
  field,
  error,
  options,
}: FormSelectProps<TFieldValues, TName>) {
  return (
    <div className="space-y-2">

      <Label>{label}</Label>

      <Select
        value={field.value ?? ""}
        onValueChange={field.onChange}
      >
        <SelectTrigger>

          <SelectValue placeholder={placeholder} />

        </SelectTrigger>

        <SelectContent>

          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}

        </SelectContent>

      </Select>

      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}

    </div>
  );
}