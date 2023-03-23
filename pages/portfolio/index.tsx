import Head from 'next/head'
import { ReactNode } from 'react'
import { BaseLayout} from '../../src/layouts'
import { OurProjectsPortfolio } from '../../src/modules'
export default function Portfolio() {
  return (
    <main>
		<OurProjectsPortfolio/>
    </main>
  )
}

Portfolio.getLayout = (page: ReactNode) => (
  <BaseLayout>
    <Head>
      <title>Piybeep - Портфолио</title>
      <meta name='description' content='Наше портфолио' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    {page}
  </BaseLayout>
)
