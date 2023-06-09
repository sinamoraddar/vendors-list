"use client";
import React, { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { incrementPage } from "../redux/features/vendors/venderSlice";
import { RootState } from "../redux/store";

type Props = {
  fetchData: any;
};
const InfiniteScroll = ({ fetchData }: Props) => {
  const page = useSelector((state: RootState) => state.vendors.page);

  const dispatch = useDispatch();

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchData?.();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (page === 0) {
      fetchData?.();
    }
  }, [page]);

  return <CardSkeleton />;
};

export default InfiniteScroll;
