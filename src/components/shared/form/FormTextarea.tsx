"use client";

import { FieldError, UseFormRegisterReturn } from "react-hook-form";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FormTextareaProps {
  label: string;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

export default function FormTextarea({
  label,
  placeholder,
  registration,
  error,
}: FormTextareaProps) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>

      <Textarea
        rows={4}
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