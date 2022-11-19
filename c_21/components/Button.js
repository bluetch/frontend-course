import Link from "next/link";
import styles from "./Button.module.scss";

export const Button = ({href="/", children, ...rest}) =>{
  return(
    <Link href={href} className={styles.btn} {...rest}>{children}</Link>
  )
}