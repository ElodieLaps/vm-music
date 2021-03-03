import Head from 'next/head'
import { ReactNode } from 'react'
import styles from '../../styles/Layout.module.scss'

export interface LayoutProps {
   pageTitle?: string
   children?: ReactNode | ReactNode[];
}

export default function Layout({ pageTitle, children }: LayoutProps) {
   return (
      <div className={styles.container}>
         <Head>
            <title>{pageTitle}</title>
         </Head>
         <header></header>
         <main>{children}</main>
         <footer></footer>
      </div>
   )
}