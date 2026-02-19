import { ReactNode } from "react"
import { LoaderProvider } from "./context/LoaderContext"
import Loader from "./components/Loader"
import { Providers } from "./store/store"

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <LoaderProvider>
            <Loader />
            {children}
          </LoaderProvider>
        </Providers>
      </body>
    </html>
  )
}