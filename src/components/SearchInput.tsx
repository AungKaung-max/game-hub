import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (onSearch: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />}></InputLeftElement>
          <Input
            ref={ref}
            variant="filled"
            placeholder="Search games..."
            borderRadius={20}
          ></Input>
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
