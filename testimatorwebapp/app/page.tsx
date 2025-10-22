import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Calculate Your Exact Savings with
            <br />
            <span className={styles.highlight}>AI Testing Automation</span>
          </h1>

          <p className={styles.subtitle}>
            See how much you'll save by replacing manual{" "}
            <strong>QA automation</strong> with our advanced{" "}
            <strong>test automation platform</strong>
          </p>

          <div className={styles.calculator}>
            <h3>Tell us about your team</h3>
            <div className={styles.inputGroup}>
              <label htmlFor="testers">Number of testers on your team</label>
              <input 
                type="number" 
                id="testers" 
                placeholder="5" 
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="cost">Per tester per month</label>
              <input 
                type="number" 
                id="cost" 
                placeholder="5000" 
                className={styles.input}
              />
            </div>
            <button className={styles.calculateBtn}>Calculate Savings</button>
          </div>
        </div>
      </section>

      <section className={styles.demo}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            See <span className={styles.highlight}>AI Testing Automation</span> Work. No Sales Pitch.
          </h2>

          <p className={styles.demoText}>
            We respect your time. This isn't a sales call—it's a working demo of our{" "}
            <strong>AI QA tools</strong>. In 15 minutes, you'll see Testimator.ai run real{" "}
            <strong>automated testing</strong> on your application. Watch it find bugs, 
            generate test cases, and automate your entire <strong>QA automation</strong> workflow. 
            Then decide if you want it. That's it.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.icon}>🎯</span>
              <p>Live <strong>AI testing automation</strong> demo - not slides</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.icon}>🔧</span>
              <p>Test your actual application with <strong>automated testing</strong></p>
            </div>
            <div className={styles.feature}>
              <span className={styles.checkmark}>✓</span>
              <p>See results in 15 minutes</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.checkmark}>✓</span>
              <p>No pressure, no follow-ups</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.checkmark}>✓</span>
              <p>Buy or walk away</p>
            </div>
          </div>

          <button className={styles.ctaBtn}>Get Started</button>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>
            Stop Wasting Budget on Manual Testing - Switch to{" "}
            <span className={styles.highlight}>AI Testing Automation</span>
          </h2>

          <p className={styles.ctaSubtitle}>
            15 minutes. Real <strong>automated testing</strong> demo. No sales pitch. 
            See if our <strong>AI QA tools</strong> work for you.
          </p>

          <button className={styles.demoBtn}>Schedule Demo</button>
        </div>
      </section>
    </main>
  );
}
