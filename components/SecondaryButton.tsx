import Button from "@/components/Button";
import type { ComponentProps } from "react";

type SecondaryButtonProps = Omit<ComponentProps<typeof Button>, "variant">;

export default function SecondaryButton({
  children,
  ...props
}: SecondaryButtonProps) {
  return (
    <Button variant="secondary" {...props}>
      {children}
    </Button>
  );
}
