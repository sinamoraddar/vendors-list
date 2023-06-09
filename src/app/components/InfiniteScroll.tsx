"use client";
import React, { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";

type Props = {
  fetchData: any;
};
const InfiniteScroll = ({ fetchData }: Props) => {
  const [page, setPage] = useState(0);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetchData?.(page);
  }, [page]);

  return <CardSkeleton />;
};

export default InfiniteScroll;