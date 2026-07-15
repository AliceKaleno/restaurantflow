"use client";

import { useRef } from "react";
import Image from "next/image";
import { ImagePlus, Trash2 } from "lucide-react";

interface ImageUploadProps {
  value?: string;
  onImageChange?: (image: string | null) => void;
}

const MAX_WIDTH = 600;
const MAX_HEIGHT = 600;
const QUALITY = 0.7;

function compressImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = document.createElement("img");

      img.onload = () => {
        let { width, height } = img;

        if (width > MAX_WIDTH || height > MAX_HEIGHT) {
          const ratio = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height);
          width = width * ratio;
          height = height * ratio;
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Não foi possível processar a imagem."));
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);

        resolve(canvas.toDataURL("image/jpeg", QUALITY));
      };

      img.onerror = () => reject(new Error("Não foi possível carregar a imagem."));

      img.src = event.target?.result as string;
    };

    reader.onerror = () => reject(new Error("Não foi possível ler o arquivo."));

    reader.readAsDataURL(file);
  });
}

export default function ImageUpload({
  value,
  onImageChange,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      const compressed = await compressImage(file);
      onImageChange?.(compressed);
    } catch (error) {
      console.error(error);
    }
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