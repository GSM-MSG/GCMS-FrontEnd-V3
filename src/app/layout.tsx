import TanstackProviders from '@/lib/TanstackProviders';
import { pretendard } from '@/styles/fonts';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="font-Pretendard">
        <TanstackProviders>{children}</TanstackProviders>
      </body>
    </html>
  );
}
