export default function VideoPreview({ video }: { video: string | undefined }) {
  return (
    <>
      {video && (
        <video
          controls
          className="w-full aspect-video mt-8 rounded-lg border bg-black"
        >
          <source src={video} />
        </video>
      )}
    </>
  );
}
