import React, { useState } from 'react'
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ToggleColorMode = () => {

    const { colorMode, toggleColorMode } = useColorMode();


    return (
        <Button onClick={() => toggleColorMode()}
            pos="absolute"
            top="0"
            right="0"
            m='1rem'
        >
            {colorMode === 'dark' ? <SunIcon color='orange.400' /> : <MoonIcon color='blue.700' />}
        </Button>
    )
}

export default ToggleColorMode