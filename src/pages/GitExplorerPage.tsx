import React from "react";
import { Header } from "../components/Header";
import { RepositoryList } from "../components/RepositoryList";

export default function GitExplorerPage() {
  return (
    <>
      <Header />
      <RepositoryList />
    </>
  );
}
