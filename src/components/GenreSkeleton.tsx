import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react"


const GenreSkeleton = () => {
  return (
        <>
             <ListItem paddingY={1}>
              <HStack>
                <Skeleton boxSize="32px" borderRadius={8}/>
                <SkeletonText  noOfLines={1}  width="55%" />
              </HStack>
            </ListItem>
        </>
  )
}

export default GenreSkeleton
