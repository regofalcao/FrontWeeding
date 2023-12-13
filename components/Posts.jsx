import Image from "next/image";
import React from "react";

const Posts = ({ authorName, photoSrc, caption, comments, index }) => {
  const shouldReverseOrder = index % 2 === 1; // Inverte a ordem em posts com índices ímpares

  return (
    <div className="pt-10 pl- flex justify-center items-start ">
      {shouldReverseOrder ? (
        <div className="flex">
          <div className="flex-col justify-start items-end gap-3 inline-flex">
            <div className="flex-col justify-center items-end gap-3 flex">
              <div className="flex-col justify-end items-end gap-3 flex">
                <div className="justify-start items-center gap-1 inline-flex">
                  <div className="w-[76px] text-black text-xl font-medium ">
                    {authorName}:
                  </div>
                  <div className="w-[520px] text-black text-[40px] font-medium font-['Literata']">
                    {caption}
                  </div>
                </div>
                <div className="w-[496px] text-black text-xl font-medium font-['Gantari']">
                  {comments.map((comment, index) => (
                    <div key={index}>
                      <span className="text-black text-base font-medium font-['Literata'] uppercase">
                        {comment.author}:
                      </span>
                      <span className="text-black text-base font-normal font-['Gantari']">
                        {comment.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Image
            className="w-[30rem] h-[576px]"
            src={photoSrc}
            alt={authorName}
            width={1}
            height={1}
          />
        </div>
      ) : (
        <>
          <Image
            width={1}
            height={1}
            className="w-[30rem] h-[576px]"
            src={photoSrc}
            alt={authorName}
          />
          <div className="pl-5 flex-col justify-start items-end gap-3 inline-flex">
            <div className="flex-col justify-center items-end gap-3 flex">
              <div className="flex-col justify-end items-end gap-3 flex">
                <div className="justify-start items-center gap-1 inline-flex">
                  <div className="w-[76px] text-black text-xl font-medium font-['Literata']">
                    {authorName}:
                  </div>
                  <div className="w-[520px] text-black text-[40px] font-medium font-['Literata']">
                    {caption}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[496px] text-black text-xl font-medium font-['Gantari']">
              {comments.map((comment, index) => (
                <div key={index}>
                  <span className="text-black text-base font-medium font-['Literata']">
                    {comment.author}:
                  </span>{" "}
                  <span className="text-black text-base font-normal font-['Gantari']">
                    {comment.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Posts;
