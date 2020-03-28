import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/styles/useTheme";

export function useWidth(size, targetRatio, baseRatio = 'xs') {
    const theme = useTheme();
    if (!size) {
        return undefined;
    }
    const initialRatio = theme.breakpoints.values[baseRatio];
    const finalRatio = theme.breakpoints.values[targetRatio];
    return size * finalRatio / initialRatio;
}

export function useWidths(size, baseRatio = 'xs') {
    return [useWidth(size, 'xs', baseRatio), useWidth(size, 'sm', baseRatio)];
}

export function useFont(size, weight = undefined, justify = false) {
    const [xs, sm] = useWidths(size);
    let fontWeight;
    switch (weight) {
        case 'Medium':
        case 'medium':
            fontWeight = 500;
            break;
        case 'Bold':
        case 'bold':
            fontWeight = 'bold';
            break;
        default:
            fontWeight = undefined;
            break;
    }
    const useStyles = makeStyles(theme => ({
        useFont: {
            textAlign: justify ? 'justify' : undefined,
            fontWeight: fontWeight,
            fontSize: xs,
            [theme.breakpoints.up('xs')]: {
                fontSize: sm,
            },
        }
    }));
    return useStyles().useFont;
}

export function useSize(width = undefined, height = undefined) {
    const [Wxs, Wsm] = useWidths(width);
    const [Hxs, Hsm] = useWidths(height);
    const useStyles = makeStyles(theme => ({
        useSize: {
            width: Wxs,
            height: Hxs,
            [theme.breakpoints.up('xs')]: {
                width: Wsm,
                height: Hsm,
            },
        }
    }));
    return useStyles().useSize;
}

export function useMinWidth(minWidth = undefined) {
    const [Wxs, Wsm] = useWidths(minWidth);
    const useStyles = makeStyles(theme => ({
        useSize: {
            minWidth: Wxs,
            [theme.breakpoints.up('xs')]: {
                minWidth: Wsm,
            },
        }
    }));
    return useStyles().useSize;
}

export function useBorderRadius(borderRadius) {
    const [xsBR, smBR] = useWidths(borderRadius);
    const useStyles = makeStyles(theme => ({
        useBorderRadius: {
            borderRadius: xsBR,
            [theme.breakpoints.up('xs')]: {
                borderRadius: smBR
            },
        }
    }));
    return useStyles().useBorderRadius;
}

// noinspection DuplicatedCode
export function useBorderRadiuses(topLeft = undefined, topRight = undefined, bottomLeft = undefined, bottomRight = undefined) {
    const [xsTopLeft, smTopLeft] = useWidths(topLeft);
    const [xsBottomLeft, smBottomLeft] = useWidths(bottomLeft);
    const [xsTopRight, smTopRight] = useWidths(topRight);
    const [xsBottomRight, smBottomRight] = useWidths(bottomRight);
    const useStyles = makeStyles(theme => ({
        useBorderRadius: {
            borderBottomLeftRadius: xsBottomLeft,
            borderBottomRightRadius: xsBottomRight,
            borderTopLeftRadius: xsTopLeft,
            borderTopRightRadius: xsTopRight,
            [theme.breakpoints.up('xs')]: {
                borderBottomLeftRadius: smBottomLeft,
                borderBottomRightRadius: smBottomRight,
                borderTopLeftRadius: smTopLeft,
                borderTopRightRadius: smTopRight
            },
        }
    }));
    return useStyles().useBorderRadius;
}

// noinspection DuplicatedCode
export function usePadding(top = undefined, bottom = undefined, left = undefined, right = undefined) {
    const [xsTop, smTop] = useWidths(top);
    const [xsBottom, smBottom] = useWidths(bottom);
    const [xsLeft, smLeft] = useWidths(left);
    const [xsRight, smRight] = useWidths(right);
    const useStyles = makeStyles(theme => ({
        usePadding: {
            paddingTop: xsTop,
            paddingBottom: xsBottom,
            paddingLeft: xsLeft,
            paddingRight: xsRight,
            [theme.breakpoints.up('xs')]: {
                paddingTop: smTop,
                paddingBottom: smBottom,
                paddingLeft: smLeft,
                paddingRight: smRight
            },
        }
    }));
    return useStyles().usePadding;
}

// noinspection DuplicatedCode
export function useMargin(top = undefined, bottom = undefined, left = undefined, right = undefined) {
    const [xsTop, smTop] = useWidths(top);
    const [xsBottom, smBottom] = useWidths(bottom);
    const [xsLeft, smLeft] = useWidths(left);
    const [xsRight, smRight] = useWidths(right);
    const useStyles = makeStyles(theme => ({
        useMargin: {
            marginTop: xsTop,
            marginBottom: xsBottom,
            marginLeft: xsLeft,
            marginRight: xsRight,
            [theme.breakpoints.up('xs')]: {
                MarginTop: smTop,
                marginBottom: smBottom,
                marginLeft: smLeft,
                marginRight: smRight
            },
        }
    }));
    return useStyles().useMargin;
}