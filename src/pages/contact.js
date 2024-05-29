import React from "react"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <h1 className="title-header-large">Contact raushang4 Labs</h1>
      <p>
        We'd love to hear from you! Whether you have questions, feedback, or any
        inquiries, feel free to reach out to us through the following channels:
      </p>
      <hr />
      <h2>Email us!</h2>
      <p>For general inquiries or consulting services:</p>
      <i className="fa-regular fa-envelope"></i>&nbsp;
      <a className="regular-link" href="mailto:raushang4@gmail.com" target="_blank" rel="noreferrer">
      raushang4@gmail.com
      </a>
      <p>For support around our products and prior provided services:</p>
      <i className="fa-regular fa-envelope"></i>&nbsp;
      <a className="regular-link" href="mailto:raushang4@gmail.com" target="_blank" rel="noreferrer">
         support@raushang4labs.io
      </a>
      <br />
      <h2>Connect with us!</h2>
      <p>Follow or contact us on our social platforms:</p>
      <i className="fab fa-github"></i>&nbsp;
      <a className="regular-link"
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
      >
        raushang4 Labs on GitHub
      </a>
      <br /> <br />
      <i className="fab fa-linkedin"></i>&nbsp;
      <a className="regular-link"
        href="https://www.linkedin.com/in/raushang4"
        target="_blank"
        rel="noreferrer"
      >
        raushang4 Labs on LinkedIn
      </a>
      <br /> <br />
      <i className="fa-brands fa-x-twitter"></i>&nbsp;
      <a className="regular-link"
        href="https://twitter.com/raushang_4"
        target="_blank"
        rel="noreferrer"
      >
       @raushang4_Labs on X
      </a>
      <br />
      <h2>Share our website!</h2>
      <p>Know somebody that may need our help? Share the raushang4 Labs website with others:</p>
      <i class="fa-solid fa-briefcase"></i>&nbsp;
      <a className="regular-link"
         href="https://raushang4.tech" 
         target="_blank" 
         rel="noreferrer">
         raushang4.tech
      </a>
      <br />
      <br />
      <hr />
      <div className="closing-wrapper">
        <p>Like this website? Feel free to...Email<br />
        <br />
        <i id="github-fork" className="fa-solid fa-code-fork fa-bounce"></i>&nbsp;&nbsp;
          <a className="regular-link"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            {/* Fork and Star it on GitHub! */}
          </a>
          &nbsp;&nbsp;<i id="github-star" className="fa-solid fa-star fa-bounce"></i>
        </p>  
        <a href="https://github.com/">
          {/* <img
            src="/images/company/nol-footer.png"
            alt="Night Owl Labs"
            title="Night Owl Labs"
            className="landing-logo"
            id="landing-footer"
          /> */}
          </a>
      </div>
    </Layout>
  )
}
