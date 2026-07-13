"use client";

import { useRef } from "react";
import Image from "next/image";
import { ImagePlus, Trash2 } from "lucide-react";

interface ImageUploadProps {
  value?: string;
  onImageChange?: (image: string | null) => void;
}

export default function ImageUpload({
  value,
  onImageChange,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      onImageChange?.(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  function removeImage() {
    if (inputRef.current) {
      inputRef.current.value = "";
    }

    onImageChange?.(null);
  }

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        📷 Foto do prato
      </label>

      <div
        className="
          relative
          flex
          h-40
          items-center
          justify-center
          overflow-hidden
          rounded-2xl
          border-2
          border-dashed
          border-slate-300
          transition
          hover:border-orange-500
        "
      >
        {value ? (
          <>
            <Image
              src={value}
              alt="Preview"
              fill
              className="object-cover"
            />

            <button
              type="button"
              onClick={removeImage}
              className="
                absolute
                right-2
                top-2
                rounded-full
                bg-white
                p-2
                shadow-lg
                transition
                hover:bg-red-50
              "
            >
              <Trash2
                size={18}
                className="text-red-500"
              />
            </button>
          </>
        ) : (
          <label
            className="
              flex
              h-full
              w-full
              cursor-pointer
              flex-col
              items-center
              justify-center
              gap-2
            "
          >
            <ImagePlus
              size={30}
              className="text-slate-400"
            />

            <p className="text-sm text-slate-500">
              Clique para escolher uma imagem
            </p>

            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              onChange={handleFile}
              className="hidden"
            />
          </label>
        )}
      </div>
    </div>
  );
}