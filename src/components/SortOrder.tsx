import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props
{
        onSelectSortOrder:(sortOrder:string) => void;
        selectedSortOrder:string;
}

const SortOrder = ({onSelectSortOrder,selectedSortOrder}:Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released Date" },
    { value: "-added", label: "Date Added" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

   const currentSortOrder = sortOrder.find(order => order.value === selectedSortOrder)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
                {sortOrder.map(order =><MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default SortOrder;
