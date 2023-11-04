import { Box, Flex, IconButton, Spacer, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Link from "next/link";
import { GiPenguin } from "react-icons/gi";

const Header = () => {
  //ダークモード用
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex mx={{ base: 3, lg: 10 }} my={{ base: 5, lg: 0 }}>
      <Link href="/">
        <GiPenguin size="80" />
      </Link>
      <Spacer />
      <Flex
        alignItems="center"
        gap="10"
        fontSize="xl"
        mr={3}
        display={{ base: "none", xl: "flex" }}
      >
        <Link href="/about">ペンギンとは</Link>
        <Link href="/login">無料会員登録/ログイン</Link>
      </Flex>
      <Flex align="center" mx={3}>
        <IconButton
          onClick={toggleColorMode}
          aria-label="Change color mode"
          icon={
            colorMode === "light" ? (
              <MdDarkMode size="1.4rem" />
            ) : (
              <MdLightMode size="1.3rem" />
            )
          }
        />
      </Flex>
      <Box display={{ lg: "flex", xl: "none" }} my="auto"></Box>
    </Flex>
  );
};

export default Header;
