import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../components/Loading";
import Products from "../components/Products";

export default function Home() {
  const books = useLoaderData();
  const { state } = useNavigation();

  console.log(books);
  return <>{state === "idle" ? <Products /> : <Loading />}</>;
}
