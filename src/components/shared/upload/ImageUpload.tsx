"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ImagePlus, Trash2 } from "lucide-react";

interface ImageUploadProps {
  onImageChange?: (file: File | null) => void;
}

export default function ImageUpload({
  onImageChange,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);

    onImageChange?.(file);
  }

  function removeImage() {
    setPreview(null);

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
          h-64
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

        {preview ? (

          <>
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-cover"
            />

            <button
              type="button"
              onClick={removeImage}
              className="
                absolute
                right-3
                top-3
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
            "
          >
            <ImagePlus
              size={48}
              className="text-slate-400"
            />

            <p className="mt-4 text-slate-500">
              Clique para enviar uma imagem
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