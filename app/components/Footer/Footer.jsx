export default function Footer() {
  return (
    <footer className="py-4 text-center bg-black text-light">
      © {new Date().getFullYear()} <span className="text-warning text-uppercase">$o$</span>-Music Studio. Tous droits reservés.
    </footer>
  );
}
