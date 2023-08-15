import { Empty, Loader } from "@/design-system";

export default function PictureViewState({
  isLoading,
  pictures,
}: {
  isLoading: boolean;
  pictures: string[];
}) {
  return (
    <>
      {isLoading && (
        <div className="p-20">
          <Loader />
        </div>
      )}
      {pictures.length === 0 && !isLoading && (
        <Empty label="No images generated." />
      )}
    </>
  );
}
