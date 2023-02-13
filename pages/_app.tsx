import Layout from '@/components/Layout'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import { Domine } from '@next/font/google'

const domine = Domine({
  subsets: ['latin'],
  weight: '400',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Layout>
        <main className={domine.className}>
        <Component {...pageProps} />
        </main>
          
      </Layout>
    </ThemeProvider>
  )
}
