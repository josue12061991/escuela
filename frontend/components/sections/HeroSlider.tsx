"use client";

import {
  ArrowRight  
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"

import type { Slider } from "@/types/slider"
import Image from "next/image";

type HeroSliderProps = {
  ListaHeros: Slider[];
};

export default function HeroSlider({ ListaHeros }: HeroSliderProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      className="flex flex-col justify-center items-center relative flex-1 px-8 z-2 "
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
    >
      <CarouselContent className="h-full">
        {ListaHeros.map(item => (
          <CarouselItem key={item.id_slider} className="flex justify-between flex-col-reverse items-center md:flex-row">
            <div className="flex flex-col items-center gap-4 md:items-start">
              <h1 className="text-3xl text-center md:text-5xl md:text-start lg:text-6xl md:text-star">{item.titulo_slider}</h1>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl font-light hidden md:flex">{item.descripcion_slider}</p>
              
              <button className="mt-6 inline-flex items-center gap-3 rounded-full bg-iconos px-6 py-3 font-semibold text-white shadow-lg shadow-iconos-400/20 transition ">
                          Conocer más
                          <ArrowRight className="size-5" />
                        </button>
            </div>
            <div className="h-full relative">
              <Card className="h-full bg-transparent">
                <CardContent className="flex aspect-square items-center justify-center h-full">
                  <Image
                    src={item.url_imagen}
                    alt={item.titulo_slider}
                    fill
                    className="object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex gap-2 py-4">
        {ListaHeros.map((item, index) => (
          <button
            key={item.id_slider}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Ir al slide ${index + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-slideractual"
                : "w-3 bg-bolitas "
            }`}
          />
        ))}
      </div>

      <CarouselPrevious className={"-left-4"} size="icon-lg" />
      <CarouselNext className={"-right-4"} size="icon-lg" />
    </Carousel>
  )
}