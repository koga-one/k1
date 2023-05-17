import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="py-20" />
      <p className="text-[15.5vw] leading-[1.1em] text-center whitespace-nowrap font-semibold">
        ANDRÉ KOGA
      </p>
      <div className="relative w-full h-[70vh]">
        <Image
          src={"/images/dummy.jpg"}
          alt="Hot guy"
          fill={true}
          className="object-cover object-top"
        />
      </div>
    </main>
  );
}
