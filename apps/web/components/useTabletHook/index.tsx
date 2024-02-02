import { useMediaQuery } from "react-responsive";

export function useTablet() {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  return { isTablet: !isTablet };
}
