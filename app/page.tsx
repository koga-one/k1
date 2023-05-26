import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-1 items-center grid-rows-3 h-screen">
        <Header />
        <p className="text-[28vmin] text-blue-200 uppercase tracking-[-0.1em] leading-[0.75em] text-center font-serif whitespace-nowrap">
          André
          <br />
          Koga
        </p>
        <div className="text-center uppercase text-2xl font-thin">
          bridging technology and art since 2002
        </div>
      </section>
    </main>
  );
}
