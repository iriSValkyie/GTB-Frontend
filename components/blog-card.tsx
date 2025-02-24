import React from "react";
import { Card, CardHeader, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { User } from "@heroui/user";

export const BlogCard = () => {
  return (
    <Card
      isFooterBlurred
      isPressable
      className="w-80 h-[300px] col-span-12 sm:col-span-5"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="text-black font-sans font-bold text-2xl">
          個人的にテックブログを作ってみた
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="https://heroui.com/images/card-example-6.jpeg"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <User isFocusable description="Product Designer" name="IriSValkyrie" />
        <p className="text-black text-tiny">2025.02.10</p>
      </CardFooter>
    </Card>
  );
};
