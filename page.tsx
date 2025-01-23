"use client";

import { decrement, increment } from "@/features/counter/counterSlice";
import { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import styles from "@/app/page.module.css";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.flexContainer}>
          <button
            aria-label="Increment value"
            className={styles.button}
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          {count}
          <button
            aria-label="Decrement value"
            className={styles.button}
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </main>
    </div>
  );
}
