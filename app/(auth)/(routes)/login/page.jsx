"use client";
import Image from "next/image";
import { Gantari } from "next/font/google";
import { useRouter } from "next/navigation";

const gantari = Gantari({
  subsets: ["latin"],
});

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex h-full  justify-between px-10 py-5 bg-[#FFFBF5] text-black ">
      <div className="flex w-full h-full items-center  justify-between ">
        <div className=" flex items-center justify-center flex-col ">
          <div className="absolute z-10 top-10 left-16 text-[96px] font-[350] text-left select-none ">
            FRIENDS
          </div>
          <div
            className="py-9 px-10 ml-16"
            style={{
              display: "grid",
              gridGap: "8px",
              gridTemplateColumns: "repeat(auto-fit, minmax(720px, auto))",
            }}
          >
            <div style={{ position: "relative", height: "590px" }}>
              <Image
                className="border-t-[1px] border-b-[1px] border-[#FAB300]"
                alt="Capa"
                src={"/capa1.svg"}
                fill
                sizes="(min-width: 80px) 55vw, 100vw"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="absolute z-10 -bottom-[62px] left-[60%] text-[90px] font-[350] text-left select-none ">
                GALLERY
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div
            className={`flex w-[26rem] flex-col px-10 py-5 gap-5 bg-[#FFFBF5] text-black ${gantari.className}`}
          >
            <h6 className="font-[500] text-xl">
              Sign Up to upload and comment your friend’s wedding
            </h6>

            <input
              className="border-[1px] p-2 border-black rounded-md"
              type="email"
              placeholder="Email"
            />

            <input
              className="border-[1px] p-2 border-black rounded-md"
              type="password"
              placeholder="Password"
            />

            <div className="flex gap-5 items-center justify-between">
              <button
                onClick={() => router.push("/sign-up")}
                className="w-48 text-base px-4 py-2 rounded-xl border-2 border-[#585858] text-[#9EA1A3] hover:text-[#000]"
              >
                Create Account
              </button>
              <button
                onClick={() => router.push("/login")}
                className="w-44 text-base px-4 py-2 rounded-xl border-2 border-[#585858] text-[#9EA1A3] hover:text-[#000]"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
