import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | ACME Dashboard - Okeke Divine-Vessel',
    default: 'ACME Dashboard - Okeke Divine-Vessel',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <title>Next.js Dashboard - Okeke Divine-Vessel</title> */}
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="text-center">
          Built by <b><a className='text-blue-400' href="https://okekedivine.vercel.app" target={'_blank'}>Dev Divine</a></b>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
