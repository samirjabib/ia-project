import { cn } from "@/lib/utils";
import { ChatCompletionRequestMessage } from "openai";

export function ConversationMessages({
  messages,
}: {
  messages: ChatCompletionRequestMessage[];
}) {
  return (
    <div className="flex flex-col-reverse gap-y-4">
      {messages.map((message) => (
        <div
          key={message.content}
          className={cn(
            "p-8 w-full flex items-start gap-x-8 rounded-lg",
            message.role === "user"
              ? "bg-card border border-black/10"
              : "bg-muted"
          )}
        >
          {/* {message.role === "user" ? <UserAvatar /> : <BotAvatar />} */}
          {message.role === "user" ? <p>User</p> : <>Bot</>}

          <p className="text-sm">{message.content}</p>
        </div>
      ))}
    </div>
  );
}
