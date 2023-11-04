import React from 'react'
import { Link} from "gatsby"
import cv from '../images/Shahadat_hossain_cv.pdf'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand h5" href="/">Shahadat Hossain</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#portfolio">Portfolio</a>
                <a class="nav-link" href={cv} download>Download CV</a>

            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}
