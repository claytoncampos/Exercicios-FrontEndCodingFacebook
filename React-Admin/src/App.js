import React from "react";
import SideBarNav from "./components/SideBarNav"
import "../src/app.css";
import '../src/geral.css';
import TopBarNav from "./components/TopBarNav";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import CardCentral from "./components/CardCentral";
import Cardcategorias from "./components/CardCategorias";

export default function App() {
  return (
    <>
      <TopBarNav />
      <div className="container-geral">

        <div className="container-sidebar">
          <SideBarNav />
        </div>

        <div className="container-cards">
          <Cards />
          <CardCentral />
          <Cardcategorias />





          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
