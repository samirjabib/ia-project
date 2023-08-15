"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FileAudio } from "lucide-react/dist/esm/lucide-react";
import { useRouter } from "next/navigation";

import { useProModal } from "@/hooks/use-pro-modal";
import { videoSchema } from "./validations/video";
import VideoForm from "./video-form";
import VideoPreview from "./video-preview";
import { Heading } from "@/design-system/elements/heading";

const VideoPage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [video, setVideo] = useState<string>();

  const form = useForm<z.infer<typeof videoSchema>>({
    resolver: zodResolver(videoSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof videoSchema>) => {
    try {
      setVideo(undefined);

      const response = await axios.post("/api/video", values);

      setVideo(response.data[0]);
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
        title="Video Generation"
        description="Turn your prompt into video."
        icon={FileAudio}
        iconColor="text-foreground/80"
        bgColor=""
      />
      <div className="px-4 lg:px-8">
        <VideoForm form={form} isLoading={isLoading} onSubmit={onSubmit} />
        <VideoPreview video={video} />
      </div>
    </div>
  );
};

export default VideoPage;
