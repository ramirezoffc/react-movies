export default function Footer() {
  return (
    <footer className="page-footer indigo darken-1">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            Git
          </a>
        </div>
      </div>
    </footer>
  )
}
