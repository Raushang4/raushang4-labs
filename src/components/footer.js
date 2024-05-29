import React from "react"
import { CONFIG } from "./config.js"
import Icon from './icons/icon.js'; // Corrected import statement

const Footer = () => {
  const showFooter = CONFIG.showFooter

  return (
    <>
      <div id="pagefoot" style={{ display: showFooter ? "block" : "none" }}>
        <div className="social-links-wrapper">
          <div className="social-links-footer">
            <a
              href="mailto:raushang4@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-envelope"></i>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/raushang4"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/raushang_4"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://prgportfolio.com" target="_blank" rel="noreferrer">
              <Icon name="PRG" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-code-fork"></i>{" "}
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-star"></i>{" "}
            </a>
          </div>
        </div>
        <div id="pagefoot">
          Copyright © 2024-{new Date().getFullYear()} raushang4 Labs, LLC. - All
          Rights Reserved.
        </div>
      </div>
    </>
  )
}

export default Footer
