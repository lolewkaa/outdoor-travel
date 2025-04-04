import Link from "next/link";


export default function RootLayout({ children }) {
    return (
      <html lang="ru">
        <head>
          <title>Отдых на природе в России</title>
        </head>
        <body>
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
        </body>
      </html>
    );
  }