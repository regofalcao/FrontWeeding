"use client";
import Image from "next/image";
import { Gantari } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";

const gantari = Gantari({
  subsets: ["latin"],
});

export default function Page() {
  const router = useRouter();
  const [imgURL, setImgURL] = useState();

  const handleSubmit = (event) => {
    const file = event;

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImgURL(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col h-full w-full justify-between  items-center px-10 py-10 bg-[#FFFBF5] text-black ">
      <div className="flex justify-center gap-32 w-[100%]">
        <div>
          <div className="flex cursor-pointer flex-col gap-2 items-center justify-center text-black mt-2 p-2">
            <form
              className="flex  flex-col justify-center items-center"
              onSubmit={handleSubmit}
            >
              <div
                className={
                  imgURL
                    ? " border-[1px] border-black rounded-md flex font-bold items-center justify-center flex-col w-[401px] h-[331px]"
                    : "bg-white rounded-md border-[1px] border-black shadow-xl flex font-bold items-center justify-center flex-col w-[401px] h-[331px]"
                }
              >
                {imgURL ? (
                  <label
                    htmlFor="arquivo"
                    className="flex  items-center text-xl flex-col justify-center"
                  >
                    <Image
                      htmlFor="arquivo"
                      src={imgURL}
                      alt="Capa Post"
                      width={431}
                      height={431}
                      className="flex cursor-pointer text-black rounded-md items-center justify-center object-contain"
                    />
                  </label>
                ) : (
                  <label
                    htmlFor="arquivo"
                    className="flex cursor-pointer items-center text-xl flex-col justify-center"
                  >
                    <Image
                      htmlFor="arquivo"
                      src={"/upload.svg"}
                      alt="Imagem"
                      width={55}
                      height={100}
                      className="flex cursor-pointer object-contain text-black items-center max-w-56 max-h-56 justify-center "
                    />
                    <h2 className="text-xl text-[#5D6265] font-medium mb-3">
                      Upload your best photo here!
                    </h2>
                  </label>
                )}
                <input
                  onChange={(event) => {
                    handleSubmit(event.target.files[0]);
                  }}
                  type="file"
                  accept="image/*"
                  id="arquivo"
                  name="arquivo"
                  className="hidden"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-around">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl select-none">
              Insert a title for you photo ...
            </h2>
            <input
              className="border-[1px] p-2 border-black rounded-md"
              type="text"
              placeholder="Insert a Title"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-[40px] w-3/4 select-none">
              Insert a comment with your feelings ...
            </h2>

            <textarea
              className="border-[1px] p-2 border-black rounded-md"
              type="text"
              placeholder="Insert a Comment"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-10 w-[100%]">
        <h2 className="text-4xl text-left w-[90%] pl-40 pt-10 select-none">
          Now, Select the best frame for the Picture!
        </h2>

        <div> Frames</div>
      </div>
    </div>
  );
}
