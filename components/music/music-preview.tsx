export default function MusicPreview({ music }: { music: string | undefined }) {
  return (
    <>
      {music && (
        <audio controls className="w-full mt-8">
          <source src={music} />
        </audio>
      )}
    </>
  );
}
