import { Empty, Loader } from "@/design-system";

export default function VideoStatePreview({
  isLoading,
  video,
}: {
  isLoading: boolean;
  video: string | undefined;
}) {
  return (
    <>
      {isLoading && (
        <div className="p-20">
          <Loader />
        </div>
      )}
      {!video && !isLoading && <Empty label="No video files generated." />}
    </>
  );
}
