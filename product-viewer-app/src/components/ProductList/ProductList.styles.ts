import { SxProps, Theme } from "@mui/material";

export const productListStyles: { [key: string]: SxProps<Theme> } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    minHeight: "100vh",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  gridContainer: {
    maxWidth: "100%",
    py: 4,
  },
  loadingIndicator: {
    textAlign: "center",
    py: 4,
  },
};
