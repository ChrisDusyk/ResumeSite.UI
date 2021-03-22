import React from "react";
import styles from "./Layout.module.css";

export default function Layout({ children }: React.PropsWithChildren<unknown>) {
    return <div className={styles.container}>{children}</div>;
}
