import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    // const supabase = createServerComponentClient({ cookies });
    // const {
    //   data: { user },
    // } = await supabase.auth.getUser();

    const body = await req.json();
    const { messages } = body;

    console.log(messages);

    return NextResponse.json(messages);

    // if (!user?.id) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    // if (!configuration.apiKey) {
    //   return new NextResponse("OpenAI API Key not configured.", {
    //     status: 500,
    //   });
    // }

    // if (!messages) {
    //   return new NextResponse("Messages are required", { status: 400 });
    // }

    // const response = await openai.createChatCompletion({
    //   model: "gpt-3.5-turbo",
    //   messages,
    // });

    // return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
