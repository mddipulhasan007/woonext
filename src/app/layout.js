// app/layout.js
// external
import "react-toastify/dist/ReactToastify.css";

// base css file
import "@/assets/css/scrollbar.css";
import "@/assets/css/swiper-carousel.css";
import "@/assets/css/custom-plugins.css";
import "@/assets/css/rc-drawer.css";
import "@/assets/css/themes.scss";
import "@/assets/css/google-font.css";
import "@/app/globals.css";
import ClientProvider from "@/components/ClientProvider";

export default function RootLayout({ children }) {
    return (
        <html lang="en" dir="ltr">
        <head />
        <body>
        <ClientProvider>{children}</ClientProvider>
        </body>
        </html>
    );
}
