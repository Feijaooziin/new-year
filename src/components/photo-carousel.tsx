"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface PhotoCarouselProps {
  images: string[];
}

export function PhotoCarousel({ images }: PhotoCarouselProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Carousel
        plugins={[Autoplay({ delay: 2500 })]}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="px-4">
              <Card className="rounded-3xl overflow-hidden">
                <CardContent className="relative h-[240px] sm:h-[300px]">
                  {/* Fundo borrado */}
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover blur-xl scale-110 opacity-60"
                  />

                  {/* Imagem principal */}
                  <Image
                    src={src}
                    alt={`Foto ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
}
