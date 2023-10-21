import * as React from "react"


import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'

import Navbar from "../components/Navbar";
import Card from "../components/Card"
import duallayer from '../images/duallayer.png';
import bluecreek from '../images/bluecreek.png';
import bluestone from '../images/bluestone.png';
import fortune from '../images/fortune.png';
import cmx from '../images/cmx.png';
import rba from '../images/rba.png';
import farazi from '../images/farazi.png';
import lepetit from '../images/lepetit.png';
import sunmark from '../images/sunmark.png';
import dhikar from '../images/dhikar.png';
import bennonsolutions from '../images/bennonsolutions.png';
import knowledgehut from '../images/knowledgehut.png';
import ibbma from '../images/ibbma.png';
import yasmeenbaig from '../images/yasmeenbaig.png';



const IndexPage = () => {
  return (
    <main>
        <Navbar/>
        <section className="container my-5">
          <h2 className="text-center" id="portfolio">Portfolio</h2>
          <div className="row">
            <Card title="Duallayer Cyber" description="" img={duallayer} link="https://duallayercyber.com"/>
            <Card title="Bluecreek Asset" description="" img={bluecreek} link="https://www.bluecreekasset.com/"/>
            <Card title="Bluestone TS" description="" img={bluestone} link="https://bluestonets.com/"/>
            <Card title="Fortune Cloud" description="" img={fortune} link="https://fortunecloud.us/"/>
            <Card title="Cmx Chat" description="" img={cmx} link="https://www.cmxchat.com/"/>
            <Card title="RBA Ammo" description="" img={rba} link="https://rbaammo.com/"/>
            <Card title="Farazi Technology" description="" img={farazi} link="https://farazitechnology.com.bd/"/>
            <Card title="Lepetit Boismoseley" description="" img={lepetit} link="https://lepetitboismoseley.com/"/>
            <Card title="Sunmark Media" description="" img={sunmark} link="https://sunmarkbd.com/"/>
            <Card title="Dhikar.org" description="" img={dhikar} link="https://dhikar.org/"/>
            <Card title="Bennon Solutions" description="" img={bennonsolutions} link="https://bennonsolutions.com/"/>
            <Card title="KnowledgeHut London" description="" img={knowledgehut} link="https://knowledgehut.org.uk"/>
            <Card title="ibbma" description="" img={ibbma} link="https://ibbma.net/"/>
            <Card title="yasmeenbaig" description="" img={yasmeenbaig} link="https://yasmeenbaig.com/"/>
          </div>
        </section>
    </main>
  )
}

export default IndexPage

export const Head = () => <title> Shahadat Hossain | Portfolio </title>
