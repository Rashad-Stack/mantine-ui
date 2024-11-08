import { Button, ButtonProps } from "@mantine/core";
import React from "react";

import { IconBrandTwitter } from "@tabler/icons-react";
import { signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import auth from "../firebase/config";

export default function TwitterButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<"button">,
) {
  const handleTwitterSignIn = async () => {
    const provider = new TwitterAuthProvider();

    try {
      const response = await signInWithPopup(auth, provider);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

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
      onClick={handleTwitterSignIn}
    />
  );
}
