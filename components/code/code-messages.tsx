import { cn } from "@/lib/utils";
import { ChatCompletionRequestMessage } from "openai";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function CodeMessages({
  messages,
}: {
  messages: ChatCompletionRequestMessage[];
}) {
  return (
    <>
      <div className="flex flex-col-reverse gap-y-4">
        {messages.map((message) => (
          <div
            key={message.content}
            className={cn(
              "p-8 w-full flex items-start gap-x-8 rounded-lg",
              message.role === "user"
                ? "bg-white border border-black/10"
                : "bg-muted"
            )}
          >
            {message.role === "user" ? <p>User</p> : <p>Bot</p>}
            <ReactMarkdown
              components={{
                pre: ({ node, ...props }) => (
                  <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                    <pre {...props} />
                  </div>
                ),
                code: ({ node, ...props }) => (
                  <code className="bg-black/10 rounded-lg p-1" {...props} />
                ),
              }}
              className="text-sm overflow-hidden leading-7"
            >
              {message.content || ""}
            </ReactMarkdown>
          </div>
        ))}
      </div>
    </>
  );
}
