import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Replicate from "replicate";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const supabase = createServerComponentClient({ cookies });
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const body = await req.json();
    const { prompt } = body;

    if (!user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!process.env.REPLICATE_API_TOKEN!) {
      return new NextResponse("Replicate api key is required", { status: 400 });
    }
    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    const model =
      "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05";

    //put the promp with the model for create song
    const response = await replicate.run(model, {
      input: {
        prompt_a: prompt,
      },
    });



    return NextResponse.json(response);
  } catch (error) {
    console.log("[MUSIC_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
