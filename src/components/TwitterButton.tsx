import { Button, ButtonProps } from "@mantine/core";
import React from "react";
// import { TwitterIcon } from "@mantinex/dev-icons";
import { IconBrandTwitter } from "@tabler/icons-react";

export default function TwitterButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<"button">,
) {
  return (
    <Button
      leftSection={
        <IconBrandTwitter
          style={{ width: "1rem", height: "1rem" }}
          color="#00ACEE"
        />
      }
      variant="default"
      {...props}
    />
  );
}
