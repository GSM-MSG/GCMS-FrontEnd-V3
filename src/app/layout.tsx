import './globals.css';
import './fonts/fonts.css';
import TanstackProviders from '@/utils/TanstackProviders';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-Pretendard">
        <TanstackProviders>{children}</TanstackProviders>
      </body>
    </html>
  );
}
