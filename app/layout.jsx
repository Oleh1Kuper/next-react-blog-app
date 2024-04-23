import { Roboto } from 'next/font/google';
import MainNavigation from '@/components/MainNavigation/MainNavigation';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Posts',
  description: 'Posts about web development',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <MainNavigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
