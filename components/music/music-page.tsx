"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Music } from "lucide-react/dist/esm/lucide-react";

import { useProModal } from "@/hooks/use-pro-modal";
import { musicSchema } from "./validations/music";
import { Heading } from "@/design-system/elements/heading";

import MusicForm from "./music-form";
import MusicPreview from "./music-preview";
import MusicStatePreview from "./music-state-preview";

const MusicPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [music, setMusic] = useState<string>();

  const form = useForm<z.infer<typeof musicSchema>>({
    resolver: zodResolver(musicSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof musicSchema>) => {
    try {
      setMusic(undefined);

      const response = await axios.post("/api/music", values);

      setMusic(response.data.audio);
      form.reset();
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
        title="Music Generation"
        description="Turn your prompt into music."
        icon={Music}
        iconColor="text-foreground/80"
        bgColor=""
      />
      <div className="px-4 lg:px-8">
        <MusicForm form={form} isLoading={isLoading} onSubmit={onSubmit} />
        <MusicStatePreview isLoading={isLoading} music={music} />
        <MusicPreview music={music} />
      </div>
    </div>
  );
};

export default MusicPage;
