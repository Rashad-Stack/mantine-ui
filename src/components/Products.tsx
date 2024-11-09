import { Box, Container } from "@mantine/core";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <Box>
      <section>
        <Container size="xl" py="sm">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </Container>
      </section>
    </Box>
  );
}
