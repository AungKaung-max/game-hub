import { HStack, List, ListItem, Image, Button, Heading } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props{
  onSelectGenre:(genre:Genre) => void;
  selectedGenre:Genre | null
}


const GenreList = ({onSelectGenre,selectedGenre}:Props) => {
  const { data, loading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
      {loading &&
        skeletons.map((skeleton) => (
          <List key={skeleton}>
            <GenreSkeleton ></GenreSkeleton>
          </List>
        ))}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              ></Image>
              <Button
                textAlign="left"
                whiteSpace="normal"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
