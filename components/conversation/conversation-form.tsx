import {
  Button,
  FormControl,
  FormField,
  FormItem,
  Input,
  Form,
} from "@/design-system";
import { conversationSchema } from "./validations/conversation";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export default function ConversationForm({
  form,
  isLoading,
  onSubmit,
}: {
  form: UseFormReturn<z.infer<typeof conversationSchema>>;
  onSubmit: (values: z.infer<typeof conversationSchema>) => Promise<void>;
  isLoading: boolean;
}) {
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="
              rounded-lg 
              border 
              w-full 
              p-4 
              px-3 
              md:px-6 
              focus-within:shadow-sm
              grid
              grid-cols-12
              gap-2
            "
        >
          <FormField
            name="prompt"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-10">
                <FormControl className="m-0 p-0">
                  <Input
                    className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isLoading}
                    placeholder="How do I calculate the radius of a circle?"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="col-span-12 lg:col-span-2 w-full"
            type="submit"
            disabled={isLoading}
            size="icon"
          >
            Generate
          </Button>
        </form>
      </Form>
    </div>
  );
}
