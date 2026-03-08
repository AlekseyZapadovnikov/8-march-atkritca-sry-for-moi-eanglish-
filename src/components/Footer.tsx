export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-ink text-paper/70 text-center">
      <p className="text-sm font-light tracking-wide">
        Сделано с уважением. 8 Марта {new Date().getFullYear()}
      </p>
    </footer>
  );
}
