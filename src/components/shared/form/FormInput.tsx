"use client";

import { FieldError, UseFormRegisterReturn } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

export default function FormInput({
  label,
  placeholder,
  type = "text",
  registration,
  error,
}: FormInputProps) {
  return (
    <div className="space-y-2">

      <Label>
        {label}
      </Label>

      <Input
        type={type}
        placeholder={placeholder}
        {...registration}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}

    </div>
  );
}