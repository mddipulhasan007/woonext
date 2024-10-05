import React from "react";
import Image from "next/image";
import FooterPromotions from "@/components/ui/footer/FooterPromotions";
import FooterMenu from "@/components/ui/footer/FooterMenu";
import FooterCopyright from "@/components/ui/footer/FooterCopyright";

export default function Footer() {
  return (
    <footer className="footer-one border-t border-black/5  font-medium  bg-white">
      <div className="mx-auto max-w-[1380px] px-4 md:px-6 3xl:px-0">

          {/*<FooterPromotions/>*/}

          <FooterMenu/>
        </div>
        <FooterCopyright/>
    </footer>
  );
}
