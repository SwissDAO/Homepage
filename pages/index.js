import Head from 'next/head'
import LandingPageHero from '../components/sections/landing_page/hero/hero';

import NavBar from '../components/navbar/Navbar';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Swiss DAO - The First DAO for Switzerland</title>
        <meta name="description"
              content="Swiss Web3 Community for everyone.
                      Connect with other Developers, Blockchain Enthusiasts, Web3 Newcomers
                      and shape the Web3 and Blockchain Space in Switzerland.
                      We host hackathons, meetups and networking for
                      Swiss Web3 and Blockchain developers."
        />
        <meta property="og:title" content="Swiss DAO - The First DAO for Switzerland" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://swiss-dao.eth.link/" />
        <meta property="og:image" content="https://swiss-dao.eth.link/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <NavBar/>

      <LandingPageHero/>
 

      
    </div>
  )
}
