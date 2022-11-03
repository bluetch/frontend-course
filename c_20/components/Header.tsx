import Image from "next/image";
import Link from "next/link";
export const Header = () => {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <Image src={require("public/images/mcdonalds-logo.webp")} width={32} height={32} alt="McDonalds" />
          <span>McDonalds</span>
        </Link>
      </div>
    </header>
  )
}