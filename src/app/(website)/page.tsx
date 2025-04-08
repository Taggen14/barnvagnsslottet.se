import content from "@/app/sv.json";

export default function Home() {
  const { h1, description } = content.landingPage;

  return (
    <div className="p-2 py-10 sm:p-8 flex flex-col gap-10 h-screen">
      <h1>{h1}</h1>
      <p>{description}</p>
    </div>
  );
}
