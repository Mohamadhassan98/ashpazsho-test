import useTheme from "@material-ui/styles/useTheme";

export function useWidth(size, targetRatio, baseRatio = 'xl') {
    const theme = useTheme();
    const initialRatio = theme.breakpoints.values[baseRatio];
    const finalRatio = theme.breakpoints.values[targetRatio];
    return size * finalRatio / initialRatio;
}