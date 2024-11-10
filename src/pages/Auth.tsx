import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { upperFirst, useToggle } from "@mantine/hooks";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GoogleButton from "../components/GoogleButton";
import Loading from "../components/Loading";
import TwitterButton from "../components/TwitterButton";
import { auth } from "../firebase/config";
import useGlobalState from "../hooks/useGlobalState";

export default function Auth(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useGlobalState();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      photoUrl: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val: string) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val: string) =>
        val.length <= 1
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    setLoading(true);
    const { email, password, name, photoUrl } = values;

    try {
      if (type === "register" && values.terms) {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        // Set the user's display name
        await updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrl,
        });

        dispatch({
          type: "SET_USER",
          payload: result.user,
        });
      } else {
        const result = await signInWithEmailAndPassword(auth, email, password);
        dispatch({
          type: "SET_USER",
          payload: result.user,
        });
      }

      navigate(from, { replace: true });
    } catch (error: unknown) {
      const err = error as { code: string };
      const errorMessage = err.code?.split("/")[1] || "An error occurred";
      if (err.code.startsWith("auth/")) {
        if (err.code.includes("password")) {
          form.setErrors({ password: errorMessage });
        } else if (err.code.includes("email")) {
          form.setErrors({ email: errorMessage });
        } else {
          form.setErrors({ email: errorMessage, password: errorMessage });
        }
      } else {
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  });

  const handleForgetPassword = async () => {
    // Handle forgot password
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, form.values.email);
    } catch (error) {
      console.error(error);
    } finally {
      alert("Password reset email sent");
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <Container size="xl" className="grid min-h-screen place-content-center">
        <Paper
          radius="lg"
          p="xl"
          withBorder
          {...props}
          className="col-span-2 w-full max-w-xl sm:w-[450px]"
        >
          <Text size="lg" fw={500}>
            Welcome to Mantine, {type} with
          </Text>

          <Group grow mb="md" mt="md">
            <GoogleButton radius="xl">Google</GoogleButton>

            <TwitterButton radius="xl">Twitter</TwitterButton>
          </Group>

          <Divider
            label="Or continue with email"
            labelPosition="center"
            my="lg"
          />

          <form onSubmit={handleSubmit}>
            <Stack>
              {type === "register" && (
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  value={form.values.name}
                  onChange={(event) =>
                    form.setFieldValue("name", event.currentTarget.value)
                  }
                  radius="md"
                />
              )}

              {type === "register" && (
                <TextInput
                  label="Profile Picture"
                  placeholder="Your profile picture"
                  value={form.values.photoUrl}
                  onChange={(event) =>
                    form.setFieldValue("photoUrl", event.currentTarget.value)
                  }
                  radius="md"
                />
              )}

              <TextInput
                required
                label="Email"
                placeholder="hello@mantine.dev"
                value={form.values.email}
                onChange={(event) =>
                  form.setFieldValue("email", event.currentTarget.value)
                }
                error={form.errors.email}
                radius="md"
              />

              <PasswordInput
                required
                label="Password"
                placeholder="Your password"
                value={form.values.password}
                onChange={(event) =>
                  form.setFieldValue("password", event.currentTarget.value)
                }
                error={form.errors.password}
                radius="md"
              />

              {type === "register" && (
                <Checkbox
                  label="I accept terms and conditions"
                  checked={form.values.terms}
                  onChange={(event) =>
                    form.setFieldValue("terms", event.currentTarget.checked)
                  }
                />
              )}
            </Stack>

            {type === "login" && (
              <Group justify="space-between" mt="xl">
                <Anchor
                  component="button"
                  type="button"
                  c="dimmed"
                  onClick={handleForgetPassword}
                  size="xs"
                >
                  Forget password?
                </Anchor>
              </Group>
            )}

            <Group justify="space-between" mt="xs">
              <Anchor
                component="button"
                type="button"
                c="dimmed"
                onClick={() => toggle()}
                size="xs"
              >
                {type === "register"
                  ? "Already have an account? Login"
                  : "Don't have an account? Register"}
              </Anchor>
              <Button type="submit" radius="xl">
                {upperFirst(type)}
              </Button>
            </Group>
          </form>
        </Paper>
      </Container>
    </>
  );
}
