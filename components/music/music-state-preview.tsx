import { Empty, Loader } from "@/design-system";

export default function MusicStatePreview({
  music,
  isLoading,
}: {
  music: string | undefined;
  isLoading: boolean;
}) {
  return (
    <>
      {!music && !isLoading && <Empty label="No music generated." />}
      {isLoading && (
        <div className="p-20">
          <Loader />
        </div>
      )}
    </>
  );
}
