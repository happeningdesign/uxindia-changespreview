import { formatPrice } from "@/types/format";

type PriceWithGstProps = {
  price: number;
  gstClassName?: string;
  className?: string;
};

/** Price in display serif with + 18% GST stacked below, right-aligned. */
export function PriceWithGst({
  price,
  gstClassName = "text-white/40",
  className = "",
}: PriceWithGstProps) {
  return (
    <div className={`text-right ${className}`}>
      <p className="font-uxi text-3xl font-medium leading-none sm:text-4xl">
        {price > 0 ? formatPrice(price) : "Sold Out"}
      </p>
      <p className={`mt-1 font-sans text-xs leading-none ${gstClassName}`}>
        {price > 0 ? "+ 18 % GST" : ""}
      </p>
    </div>
  );
}
