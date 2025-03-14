import { Box, Flex, Grid, GridItem,Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatFormSelector from "./components/PlatFormSelector";
import { Platform } from "./hooks/useGames";
import SortOrder from "./components/SortOrder";
import GameHeading from "./components/GameHeading";


export interface GameQuery {
  genre: Genre;
  platform: Platform;
  sortOrder: string;
  searchText:string;
}

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar onSearch={(searchText) => setGameQuery({...gameQuery,searchText})}></Navbar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({...gameQuery,genre})}
            ></GenreList>
          </GridItem>``
        </Show>

        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} ></GameHeading>
            <Flex  marginBottom={5}>
              <Box marginRight={5}>
                <PlatFormSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
                ></PlatFormSelector>
              </Box>
              <SortOrder selectedSortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery,sortOrder})}></SortOrder>
            </Flex>
          </Box>
          <GameGrid
            gameQuery={gameQuery}
          ></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
