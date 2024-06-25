import AppDrawer from "@/components/organisms/app.drawer.component";
// import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./providers";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <AppDrawer>{children}</AppDrawer>
        </body>
      </html>
    </StoreProvider>
  );
}
