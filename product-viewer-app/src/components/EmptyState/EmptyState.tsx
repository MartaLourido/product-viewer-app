import React from "react";
import { Box, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { emptyStateStyles } from "./EmptyState.styles";

interface EmptyStateProps {
  message: string;
  icon?: React.ElementType;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  message,
  icon: IconComponent = InfoIcon,
}) => {
  return (
    <Box sx={emptyStateStyles.container}>
      <IconComponent data-testid="InfoIcon" sx={emptyStateStyles.icon} />
      <Typography variant="h4">{message}</Typography>
    </Box>
  );
};

export default EmptyState;
