import Link from "next/link";
import classes from './index.module.css';
import StoreProvider from './providers'; // Импортируем StoreProvider

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <title>Отдых на природе в России</title>
      </head>
      <body className={classes.page}>
        <StoreProvider>
          <header>
            <h1>header</h1>
            <Link href={`/catalog`}>
              Каталог
            </Link>
          </header>
          <main>{children}</main>
          <footer>
            <p>footer</p>
          </footer>
        </StoreProvider>
      </body>
    </html>
  );
}