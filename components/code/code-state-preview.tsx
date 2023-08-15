import { Empty, Loader } from "@/design-system";
import { ChatCompletionRequestMessage } from "openai";

export default function CodeStatePreview({
  isLoading,
  messages,
}: {
  isLoading: boolean;
  messages: ChatCompletionRequestMessage[];
}) {
  return (
    <>
      {isLoading && (
        <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
          <Loader />
        </div>
      )}
      {messages.length === 0 && !isLoading && (
        <Empty label="No conversation started." />
      )}
    </>
  );
}
