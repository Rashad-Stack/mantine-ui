import { Box, LoadingOverlay } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Loading() {
  const [visible] = useDisclosure(true);

  return (
    <Box pos="absolute" className="inset-0">
      <LoadingOverlay
        style={{ height: "100vh", width: "100vw" }}
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "orange", type: "bars" }}
      />
    </Box>
  );
}
