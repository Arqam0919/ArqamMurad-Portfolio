import "../styles/footer.css";

const Footer = () => (
  <footer className="siteFooter">
    <span>© {new Date().getFullYear()} Arqam Murad</span>
    <span>Built with intention <b>✦</b></span>
    <a href="#home" aria-label="Back to top">Back to top ↑</a>
  </footer>
);

export default Footer;