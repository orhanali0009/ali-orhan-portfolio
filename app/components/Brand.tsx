import Link from 'next/link';

export default function Brand({ href = '/' }: { href?: string }) {
  return (
    <Link className="brand brand-wordmark" href={href} aria-label="Ali Orhan — home">
      <span className="brand-name">ALI ORHAN</span>
      <span className="brand-tagline">Beyond the obvious.</span>
    </Link>
  );
}
