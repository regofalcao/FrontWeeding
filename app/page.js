"use client";

const postsData = [
  {
    authorName: "Alice",
    photoSrc: "/index (9) 1.svg",
    caption: "Enjoying a sunny day at the beach!",
    comments: [
      { author: "Bob", text: "Looks like a great day!" },
      { author: "Charlie", text: "Beautiful view!" },
    ],
  },
  {
    authorName: "Eva",
    photoSrc: "/index (9) 1.svg",
    caption: "Exploring new places ✈️",
    comments: [
      { author: "Frank", text: "Where is this? Looks amazing!" },
      { author: "Grace", text: "Wish I could be there too!" },
      { author: "Grace", text: "Wish I could be there too!" },
      { author: "Grace", text: "Wish I could be there too!" },
      { author: "Grace", text: "Wish I could be there too!" },
    ],
  },
  {
    authorName: "David",
    photoSrc: "/index (9) 1.svg",
    caption: "Coding all night! 💻🌙",
    comments: [
      { author: "Helen", text: "Keep up the good work!" },
      { author: "Isaac", text: "What are you working on?" },
    ],
  },
];

import Image from "next/image";
import { useRouter } from "next/navigation";
import Posts from "../components/Posts";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <div className="flex min-h-screen w-full flex-col items-center p-2 md:px-24 bg-[#FFFBF5] text-black">
        <div className="relative w-full flex items-center justify-center flex-col">
          {/* <div className="absolute z-10 top-4 right-4 text-3xl sm:text-5xl font-light text-left select-none">
            CAROLINE
          </div> */}
          <div className="flex w-full">
            <div className="relative w-[96%] h-[30rem]">
              <Image
                className="border-t-1 border-b-1 border-[#FAB300] w-full h-full object-cover"
                alt="Capa"
                src="/capa.svg"
                fill
              />
              {/* <div className="absolute z-10 bottom-4 left-1/2 transform -translate-x-1/2 text-4xl sm:text-6xl font-bold text-left select-none">
                DANIEL
              </div> */}
            </div>
          </div>
        </div>
        <button
          onClick={() => router.push("/upload")}
          className="border-2 border-[#585858] px-5 py-3 rounded-xl mt-10 text-[#5D6265]"
        >
          You Want to Upload a Photo?
        </button>

        <div className="flex flex-col gap-2">
          {postsData.map((post, index) => (
            <Posts key={index} index={index} {...post} />
          ))}
        </div>
      </div>
    </main>
  );
}
