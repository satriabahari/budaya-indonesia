import Card from "@/common/components/elements/Card";
import { DestinationProps } from "@/common/types/destination";
import Image from "next/image";

export default function LombaCard({ title, image }: DestinationProps) {
  return (
    <Card>
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="h-full w-full rounded-xl object-cover"
        />
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-xl bg-neutral-900 opacity-0 transition-opacity duration-300 hover:opacity-80">
          <h3 className="text-2xl text-neutral-50">{title}</h3>
        </div>
      </div>
    </Card>
  );
}