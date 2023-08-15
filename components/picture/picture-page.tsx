"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { useProModal } from "@/hooks/use-pro-modal";

import { Heading } from "../../design-system/elements/heading";

import { pictureSchema } from "./validations/pictures";
import PictureList from "./picture-list";
import PictureForm from "./picture-form";
import PictureViewState from "./picture-view-state";

export default function PicturePage() {
  const proModal = useProModal();
  const router = useRouter();
  const [pictures, setPictures] = useState<string[]>([]);

  const form = useForm<z.infer<typeof pictureSchema>>({
    resolver: zodResolver(pictureSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof pictureSchema>) => {
    try {
      setPictures([]);
      const response = await axios.post("/api/picture", values);
      console.log(response);
      const urls = response.data.map((picture: { url: string }) => picture.url);
      setPictures(urls);
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Image Generation"
        description="Turn your prompt into an image."
        icon={ImageIcon}
        iconColor="text-primary/60"
        bgColor=""
      />
      <PictureForm form={form} isLoading={isLoading} onSubmit={onSubmit} />
      <div className="px-4 lg:px-8">
        <PictureViewState isLoading={isLoading} pictures={pictures} />
        <PictureList pictures={pictures} />
      </div>
    </div>
  );
}
