import { Button, CardContent, CardFooter } from "@/design-system";
import { DownloadIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function PictureList({ pictures }: { pictures: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
      {pictures.map((src) => (
        <CardContent key={src} className="rounded-lg overflow-hidden">
          <div className="relative aspect-square">
            <Image fill alt="Generated" src={src} />
          </div>
          <CardFooter className="p-2">
            <Button
              onClick={() => window.open(src)}
              variant="secondary"
              className="w-full"
            >
              <DownloadIcon className="h-4 w-4 mr-2" />
              Download
            </Button>
          </CardFooter>
        </CardContent>
      ))}
    </div>
  );
}
