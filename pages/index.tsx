import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Template</title>
        <meta name="Next.js template" content="Created by Abraham J. Ahn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div>
        <h1>Hello world!</h1>
      </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
