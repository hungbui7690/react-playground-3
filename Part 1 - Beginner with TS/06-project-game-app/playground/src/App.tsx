/*
  Chakra UI
  ~~ npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
    -> https://v2.chakra-ui.com/getting-started/vite-guide


\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Creating a Responsive Layout
  - SCREEN SIZES: https://v2.chakra-ui.com/docs/styled-system/responsive-styles
  - GRID: https://v2.chakra-ui.com/docs/components/grid/usage  

  - 2 rows and 2 columns: 
    "nav  nav"    -> row 1
    "aside main"  -> row 2

  - Solution 1: 
    -> <Grid templateAreas={`"nav nav" "aside main"`}>
  - Solution 2: for multiple screen sizes
    -> <Grid templateColumns={{ 
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}>


**************************

  Show & Hide
  - SHOW: https://v2.chakra-ui.com/docs/components/show-hide/usage

  - Example: 
    -> This text appears at the "sm" value screen width or greater.
    -> This text hides at the "md" value screen width and smaller.

      <>
        <Show above='sm'>
          <Box>This text appears at the "sm" value screen width or greater.</Box>
        </Show>
        <Hide below='md'>
          <Box>This text hides at the "md" value screen width and smaller.</Box>
        </Hide>
      </>


*/

import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem bg='coral' area={'nav'}>
        Nav
      </GridItem>
      <Show above='lg'>
        <GridItem bg='gold' area={'aside'}>
          Aside
        </GridItem>
      </Show>
      <GridItem bg='dodgerblue' area={'main'}>
        Main
      </GridItem>
    </Grid>
  )
}

export default App
