import Hero from "@/components/Hero/Hero";
import FlagGrid from "@/components/Sections/FlagGrid/FlagGrid";
import Navbar from "@/components/Navbar/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function Page() {
  return (
    <main>
      <div className="shadow-sm bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <Navbar />
        <Hero />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-[1500px] pt-5">
          <SearchBar />
          <FlagGrid />
        </div>
      </div>
    </main>
  );
}
