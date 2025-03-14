import { HStack, Image} from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"


interface Props
{
    onSearch:(onSearch:string) => void;
}

const Navbar = ({onSearch}:Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px"></Image>
        <SearchInput onSearch={onSearch}></SearchInput>
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default Navbar
