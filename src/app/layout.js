"use client";
// external
import "react-toastify/dist/ReactToastify.css";

// base css file
import "@/assets/css/scrollbar.css";
import "@/assets/css/swiper-carousel.css";
import "@/assets/css/custom-plugins.css";
import "@/assets/css/rc-drawer.css";
import "@/assets/css/themes.scss";
import "@/assets/css/google-font.css";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";

//import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from "react-redux";
import { store } from "@/store";
import Footer from "@/components/Footer";

//const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head />
      <body>
        <Provider store={store}>
          <Header />
          <main className="relative flex-grow pt-5 xl:pt-8 ">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
