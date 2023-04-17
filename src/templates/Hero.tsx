import Link from "next/link";

import { Background } from "../background/Background";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";

const Logo = () => (
  <img src="/logo.png" alt="logo" className="pl-5 w-auto h-7" />
);
const Hero = () => (
  <Background color="bg-[#FFFF] ">
    <Section max top>
      <NavbarTwoColumns logo={<Logo />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a></a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pb-14 md:py-20" max top>
      <HeroOneButton
        title={
          <>
            {`Platform `}
            <span className="text-heliotrope-400">Terbaik</span>
            {` Untuk Mencari Lobi Bola Basket\n`}
          </>
        }
        description="Bergabung dalam lobi untuk bermain bersama dan bertemu teman basket baru di kota kamu."
      />
    </Section>
  </Background>
);

export { Hero };
