import React from "react";
import { Box, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

interface EmptyStateProps {
  message: string;
  icon?: React.ElementType;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  message,
  icon: IconComponent = InfoIcon,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        color: "#1976d2",
      }}
    >
      <IconComponent data-testid="InfoIcon" sx={{ fontSize: 80, mb: 2 }} />
      <Typography variant="h4">{message}</Typography>
    </Box>
  );
};

export default EmptyState;
