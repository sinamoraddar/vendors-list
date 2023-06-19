"use client";
import React, { useCallback, useEffect } from "react";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

type Props = {
  fetchData: any;
};
const InfiniteScroll = ({ fetchData }: Props) => {
  const page = useSelector((state: RootState) => state.vendors.page);
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchData?.();
    }
  }, [fetchData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  useEffect(() => {
    if (page === 0) {
      fetchData?.();
    }
  }, [fetchData, page]);

  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
};

export default InfiniteScroll;
