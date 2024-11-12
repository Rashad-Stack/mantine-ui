import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Products from "../components/Products";
import useGlobalState from "../hooks/useGlobalState";

export default function Home() {
  const books = useLoaderData();
  const { dispatch } = useGlobalState();

  useEffect(() => {
    dispatch({ type: "SET_BOOKS", payload: books });
  }, [books, dispatch]);

  return (
    <>
      <Products />
    </>
  );
}
