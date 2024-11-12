import { Box, Container } from "@mantine/core";
import useGlobalState from "../hooks/useGlobalState";
import ProductCard from "./ProductCard";

export default function Products() {
  const { books } = useGlobalState();
  return (
    <Box>
      <section>
        <Container size="xl" py="sm">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
              <ProductCard key={book.id} />
            ))}
          </div>
        </Container>
      </section>
    </Box>
  );
}
