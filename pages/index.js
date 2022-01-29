import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Link from "next/link"
import Footer from "../components/footer"
import Header from "../components/header"
import RandomLoc from '../components/random'

export default function Home() {
  
  return (
    <div >
       <Header />
       <RandomLoc />
       <Footer />
    </div>
  )
}
