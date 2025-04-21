import { PropsWithChildren } from "react";
import styles from "@/app/page.module.css";

const Layout: React.FC<
  PropsWithChildren<{
    modal: React.ReactNode;
  }>
> = ({ children, modal }) => {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
};

export default Layout;
