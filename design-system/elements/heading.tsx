import { Icon } from "lucide-react/dist/esm/lucide-react";

import { cn } from "@/lib/utils";
import { Title } from "@/design-system";

interface HeadingProps {
  title: string;
  description: string;
  icon: Icon;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <>
      <div className="px-4 lg:px-8 flex flex-col justify-center items-center gap-x-3 mb-8">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
          <Icon className={cn("w-10 h-10", iconColor)} />
        </div>
        <div>
          <Title as="h2" size={"sectionTitle"} className="text-center">
            {title}
          </Title>
          <p className="text-sm text-muted-foreground text-center">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
