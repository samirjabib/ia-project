"use client";

import * as z from "zod";
import axios from "axios";
import { Code } from "lucide-react/dist/esm/lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";

import { zodResolver } from "@hookform/resolvers/zod";

import { useProModal } from "@/hooks/use-pro-modal";
import { codeSchema } from "./validators/code";
import { Heading } from "@/design-system/elements/heading";
import CodeStatePreview from "./code-state-preview";
import CodeMessages from "./code-messages";
import CodeForm from "./code-form";

const CodePage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof codeSchema>>({
    resolver: zodResolver(codeSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof codeSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/code", { messages: newMessages });
      setMessages((current) => [...current, userMessage, response.data]);

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
        title="Code Generation"
        description="Generate code using descriptive text."
        icon={Code}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />
      <div className="px-4 lg:px-8">
        <CodeForm form={form} isLoading={isLoading} onSubmit={onSubmit} />
        <div className="space-y-4 mt-4">
          <CodeStatePreview isLoading={isLoading} messages={messages} />
          <CodeMessages messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default CodePage;
