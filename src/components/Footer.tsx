export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-center text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Darshit Varshney. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
