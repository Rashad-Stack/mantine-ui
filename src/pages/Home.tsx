import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Loading from "../components/Loading";
import Products from "../components/Products";
import useGlobalState from "../hooks/useGlobalState";

export default function Home() {
  const books = useLoaderData();
  const { dispatch, isLoading } = useGlobalState();

  useEffect(() => {
    dispatch({ type: "SET_BOOKS", payload: books });
  }, [books, dispatch]);

  return <>{isLoading ? <Loading /> : <Products />}</>;
}
