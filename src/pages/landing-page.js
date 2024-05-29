import React from "react"
import { Link } from "gatsby" // comment out if not using, and set <Layout> to <></> below
import Layout from "../components/layout"

export default function LandingPage() {
  return (
    <Layout>
      <div id="landinglogo">
        <Link to="/">
          <br />
          <img
            src="/images/landing/landing-banner.png"
            alt="Night Owl Labs"
            title="Night Owl Labs"
            className="landing-logo"
          />
        </Link>
      </div>
      <div className="landing-container">
        <h1 className="landing-title">Welcome to the raushang4! 👋</h1>
        <h2 className="landing-subtitle">
          Add a subtitle for your landing page here!
        </h2>
        <p>This is where you can mention a new project/product release!</p>
        <p>
          Product release comming soon .....
        </p>
      </div>
    </Layout>
  )
}
