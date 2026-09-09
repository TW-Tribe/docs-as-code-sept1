import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p className="hero__subtitle">
          {siteConfig.tagline}
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Product documentation">

      <HomepageHeader />

      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <div className="text--center">
                  <h3>Getting Started</h3>
                  <p>
                    Learn the basics and get up and running quickly with
                    step-by-step guides.
                  </p>
                </div>
              </div>

              <div className="col col--4">
                <div className="text--center">
                  <h3>Installation & Configuration</h3>
                  <p>
                    Install the product and configure it for your
                    environment.
                  </p>
                </div>
              </div>

              <div className="col col--4">
                <div className="text--center">
                  <h3>Troubleshooting</h3>
                  <p>
                    Find solutions to common problems and learn how to
                    resolve issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}