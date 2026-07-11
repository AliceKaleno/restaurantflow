"use client";

import { ImagePlus } from "lucide-react";

interface Props {
  image?: string;
}

export default function ImageUpload({
  image,
}: Props) {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium">
        📷 Foto do prato
      </label>

      <label
        className="
          flex
          h-56
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-2xl
          border-2
          border-dashed
          border-slate-300
          transition
          hover:border-orange-500
          hover:bg-orange-50
        "
      >

        {image ? (
          // eslint-disable-next-line @next/next/no-img-element  
          <img
            src={image}
            alt="Preview"
            className="h-full w-full rounded-2xl object-cover"
          />
        ) : (
          <>
            <ImagePlus
              size={42}
              className="text-slate-400"
            />

            <p className="mt-4 text-slate-500">
              Clique para enviar uma imagem
            </p>
          </>
        )}

        <input
          type="file"
          className="hidden"
        />

      </label>

    </div>
  );
}