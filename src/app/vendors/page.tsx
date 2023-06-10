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
import { getVendors } from "../api";

export default function Home() {
  const { vendorList, page } = useSelector((state: RootState) => state.vendors);
  const dispatch = useDispatch();

  const fetchVendors = useCallback(async () => {
    try {
      const result = await getVendors(page);
      const data = result.data.finalResult.filter(
        (item: any) => item.type === "VENDOR"
      );
      dispatch(setVendors(data));
      dispatch(incrementPage());
    } catch (e) {}
  }, [dispatch, page]);

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
