import { styled } from "@mui/material/styles";
import { Container, AppBar, Toolbar, Box } from "@mui/material";

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing(4)} 0;
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    padding-left: ${({ theme }) => theme.spacing(3)};
    padding-right: ${({ theme }) => theme.spacing(3)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    padding-left: ${({ theme }) => theme.spacing(5)};
    padding-right: ${({ theme }) => theme.spacing(5)};
  }
  max-width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledAppBar = styled(AppBar)`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  background: linear-gradient(to right, #1976d2, #42a5f5);
  box-shadow: ${({ theme }) => theme.shadows[3]};
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    justify-content: space-between;
    flex-direction: row;
    gap: 0;
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  flex: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    flex: 1;
  }
`;

export const FilterBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    flex-direction: row;
    width: auto;
  }
`;

export const ContentBox = styled(Box)`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 100%;
`;
