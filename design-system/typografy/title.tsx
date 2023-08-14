import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const title = cva("", {
  variants: {
    intent: {
      primary: ["text-white"],
      secondary: ["text-black"],
    },
    size: {
      textSubtitle: ["textSubtitle"],
      textTitle: ["text-title"],
      sectionSubtitle: ["section-subtitle"],
      sectionTitle: ["section-title"],
      mainTitle: ["main-title"],
    },
    family: {
      display: ["font-display"],
      sans: ["font-sans"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "textTitle",
    family: "display",
  },
});

interface TitleProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof title> {
  as?: HeadingLevel;
}

const Title: FC<TitleProps> = ({
  as: Component = "h2",
  className,
  intent,
  family,
  size,
  ...props
}) => {
  const classNames = twMerge(title({ intent, size, family }), className);

  return <Component className={classNames} {...props} />;
};

export default Title;
