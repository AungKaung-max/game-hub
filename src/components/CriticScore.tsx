import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 65 ? "yello" : "";
  return (
    <Badge fontSize="14px" paddingX={2} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
