"use client";

import {
  ControllerRenderProps,
  FieldValues,
  Path,
} from "react-hook-form";

import { Label } from "@/components/ui/label";
import Switch from "@/components/ui/switch";

interface FormSwitchProps
  <TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> {
  label: string;
  field: ControllerRenderProps<TFieldValues, TName>;
}

export default function FormSwitch
  <TFieldValues extends FieldValues,
  TName extends Path<TFieldValues>
>({
  label,
  field,
}: FormSwitchProps<TFieldValues, TName>) {
  return (
    <div className="flex items-center justify-between rounded-xl border p-4">

      <Label>{label}</Label>

      <Switch
        checked={field.value}
        onChange={field.onChange}
      />

    </div>
  );
}