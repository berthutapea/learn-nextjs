import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
import Script from "next/script";
import Image from "next/image";

const Navbar = () => {
  const { data }: any = useSession();
  return (
    <div className={styles.navbar}>
      <div className="big" id="title">
        Navbar
      </div>
      <Script id="script-title" strategy="lazyOnload">
        {`document.getElementById("title").innerHTML = "Navbar";`}
      </Script>
      <div className={styles.profile}>
        {data?.user?.image && (
          <Image
            width={30}
            height={30}
            className={styles.avatar}
            src={data.user.image}
            alt={data.user.fullname}
          />
        )}
        {data && data.user.fullname}{" "}
        {data ? (
          <button className={styles.button} onClick={() => signOut()}>
            Sign out
          </button>
        ) : (
          <button className={styles.button} onClick={() => signIn()}>
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
