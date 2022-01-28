import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Footer from "../components/footer"
import Header from "../components/header"

export default function Home() {
  
  return (
    <div className={styles.container}>
       <Header />
       <Footer />
    </div>
  )
}
