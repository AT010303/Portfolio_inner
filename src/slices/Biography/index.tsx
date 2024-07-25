import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import IdCard from "./idcard";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */

const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <div className="relative">
      <div className="relative  inset-0  z-0 h-[70vh] md:absolute md:h-screen ">
        <IdCard />
      </div>
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
          <Heading as="h1" size="xl" className="z-10 col-start-1">
            {slice.primary.heading}
          </Heading>
          <div className="prose prose-xl prose-slate prose-invert z-10 col-start-1">
            <PrismicRichText field={slice.primary.description} />
          </div>
          <Button
            linkField={slice.primary.button_link}
            label={slice.primary.button_text}
            className="row-start-3"
          />
        </div>
      </Bounded>
    </div>
  );
};

export default Biography;
