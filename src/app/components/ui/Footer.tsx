import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col gap-3 lg:gap-0 lg:flex-row w-full border-t justify-between items-center px-3 sm:px-20 py-4">
      <p>
        © Singularity Corp Pvt. Ltd. 2024. All rights reserved. Privacy Policy.
      </p>
      <Link href="https://www.linkedin.com/company/pype-ai/" target="_blank">
        <LinkedInLogoIcon className="w-8 h-8" color="#53535c" />
      </Link>
    </footer>
  );
}

export default Footer;
