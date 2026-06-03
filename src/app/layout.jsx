import '../index.css';

export const metadata = {
  title: 'Little Oaks | Premium Pre School & Play School in Bhubaneswar, Odisha',
  description: 'Little Oaks is a premium play school and pre school in Bhubaneswar (BBSR) & Cuttack, Odisha. Find the best school for kids near me with AC campus, smart classes, and zero punishment.',
  keywords: 'premium school, pre school, playschool, kids school, school for kids, bbsr, bhubaneswar, odisha, cuttack, near me, best preschool in bhubaneswar, top play school patrapada',
  authors: [{ name: 'Jupiter Group of Institutions' }],
  creator: 'Little Oaks Pre School',
  publisher: 'Little Oaks Pre School',
  openGraph: {
    title: 'Little Oaks | Premium Pre School in Bhubaneswar',
    description: 'Looking for the best school for kids near you? Discover Little Oaks in BBSR & Cuttack, Odisha - a premium play school focusing on holistic development.',
    siteName: 'Little Oaks Pre School',
    images: [
      {
        url: '/gallery/gallery_img_10.jpeg',
        width: 1200,
        height: 630,
        alt: 'Little Oaks Pre School Campus',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Little Oaks | Top Pre School in BBSR',
    description: 'Looking for the best school for kids near you? Discover Little Oaks in BBSR, Odisha.',
    images: ['/gallery/gallery_img_10.jpeg'],
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
