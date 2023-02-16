<Show above='sm' >
    <Box>This text appears at the "sm" value screen width or greater.</Box>
  </Show>
  <Hide below='md'>
    <Box>This text hides at the "md" value screen width and smaller.</Box>
</Hide>

this can be use to create nav bar "https://chakra-ui.com/docs/components/show-hide/usage#above--below"






background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;


<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'><rect fill='#ffffff' width='1600' height='900'/><defs><linearGradient id='a' x1='0' x2='0' y1='1' y2='0'><stop offset='0' stop-color='#0FF'/><stop offset='1' stop-color='#CF6'/></linearGradient><linearGradient id='b' x1='0' x2='0' y1='0' y2='1'><stop offset='0' stop-color='#F00'/><stop offset='1' stop-color='#FC0'/></linearGradient></defs><g fill='#FFF' fill-opacity='0' stroke-miterlimit='10'><g stroke='url(#a)' stroke-width='2'><path transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/><circle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/><path transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/></g><g stroke='url(#b)' stroke-width='4'><path transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/><rect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/><path transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/></g></g></svg>



navbar component
<Flex
      id="nav-menu"
      // border="1px solid red"
      // bg="#EAE7DC"
      bg="#005c9f"
      position={"sticky"}
      top={0}
      h={"60px"}
      alignItems={"center"}
      zIndex={9}
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
    >
      {/* <Box ml="20px"><Image src={Madhur_crop.png} width={"60%"} /> </Box> */}
      <Spacer />
      <Hide below="md">
        <Box border={"1px solid re"} mr="40px" minWidth={"550px"} >
          <Flex alignItems={"center"}>
            <NavbarButton text={"Home"} className={"nav-link home"} />
            <Spacer />
            <NavbarButton text={"About"} className={"nav-link about"} />

            <Spacer />
            <NavbarButton text={"Skills"} className={"nav-link skills"} />

            <Spacer />

            <NavbarButton text={"Projects"} className={"nav-link projects"} />

            <Spacer />
            <NavbarButton text={"Contacts"} className={"nav-link contact"} />

            <Spacer />
            <NavbarButton
              text={"Resume"}
              color="#fff"
              bgcolor="#ff0000"
              className={"nav-link resume"}
              id="resume-button-1"
            />

            <Spacer />
          </Flex>
        </Box>
      </Hide>

      <Show below="md">
        <MobNavbar />
      </Show>
    </Flex>