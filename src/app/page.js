import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Link from "next/link";
import styles from "./Home.module.css"
import Head from "next/head";
import { Fragment } from "react";
export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta property="og:title" content="My page title" key="title" />
			</Head>
		<div>
			<h1 className={styles.title}>HomePage</h1>
			<p className={styles.text}> 
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
				illo inventore veritatis et quasi architecto beatae vitae dicta sunt
				explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
				od
			</p>
			<p className={styles.text}>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
				illo inventore veritatis et quasi architecto beatae vitae dicta sunt
				explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
				od
			</p>
      <Link className={styles.btn} href="/ninjas">ninjas</Link>
  		</div>
		  </>
	);
}
