import "@/app/ui/global.css";
import { inter, lusitana, outfit } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lusitana.className} ${outfit.className} antialiased`}>{children}</body>
    </html>
  );
}
