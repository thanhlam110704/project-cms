import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/blocks/HeroSection";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  return { ...data.data };
}


export default async function HomeRoute() {
  const data = await loader();
  const blocks = data?.blocks || [];
  return (
    <div>
      <div className="container">
        <HeroSection {  ...blocks[0]} />
      </div>
    </div>
  );
}