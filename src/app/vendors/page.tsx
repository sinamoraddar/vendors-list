"use client";

import Link from "next/link";
import InfiniteScroll from "../components/InfiniteScroll/InfiniteScroll";
import styles from "./page.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  incrementPage,
  setVendors,
} from "../redux/features/vendors/venderSlice";
import { Card } from "../components/Card/Card";
export default function Home() {
  const firstRender = useRef(false);

  const { vendorList, page } = useSelector((state: RootState) => state.vendors);
  const dispatch = useDispatch();

  const fetchVendors = useCallback(() => {
    fetch(
      `https://snappfood.ir/mobile/v3/restaurant/vendors-list?lat=35.754&long=51.328&page =${page}&page_size=10`
    )
      .then((data) => data.json())
      .then((result) => {
        const data = result.data.finalResult.filter(
          (item: any) => item.type === "VENDOR"
        );

        dispatch(
          setVendors(
            result.data.finalResult.filter(
              (item: any) => item.type === "VENDOR"
            )
          )
        );
        dispatch(incrementPage());
      })
      .catch((e) => {});
  }, [dispatch, page]);

  useEffect(() => {
    if (!firstRender.current) {
      firstRender.current = true;
    }
  }, []);

  return (
    <main className={styles.Vendors}>
      <Link href="/">Go Home</Link>
      <div className={styles.CardContainer}>
        {vendorList.length > 0 &&
          vendorList.map((vendor) => (
            <Card data={vendor.data} key={vendor?.data?.id} />
          ))}
        <InfiniteScroll fetchData={fetchVendors} />
      </div>
    </main>
  );
}
