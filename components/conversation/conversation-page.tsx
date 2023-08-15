"use client";

import * as z from "zod";
import axios from "axios";
import { MessageSquare } from "lucide-react/dist/esm/lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";

import { useProModal } from "@/hooks/use-pro-modal";
import { conversationSchema } from "./validations/conversation";
import { zodResolver } from "@hookform/resolvers/zod";

import { Heading } from "../../design-system/elements/heading";
import ConversationForm from "./conversation-form";
import { ConversationMessages } from "./conversation-messages";
import ConversationViewState from "./conversation-view-state";

const ConversationPage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof conversationSchema>>({
    resolver: zodResolver(conversationSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof conversationSchema>) {
    try {
      //get message from promp user
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };

      //mantein the state on chat.
      const newMessages = [...messages, userMessage];

      //get bot response
      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });

      //pass the new message to state
      setMessages((prevState) => [...prevState, userMessage, response.data]);
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
  }

  return (
    <div className="mt-4">
      <Heading
        title="Conversation"
        description="Advanced conversation model"
        icon={MessageSquare}
        iconColor="text-primary/60"
        bgColor=""
      />
      <div className="px-4 lg:px-8">
        <ConversationForm
          form={form}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
        <div className="space-y-4 mt-4">
          <ConversationViewState isLoading={isLoading} messages={messages} />
          <ConversationMessages messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
