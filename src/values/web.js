import useTheme from "@material-ui/styles/useTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";

export function useWidth(size, targetRatio, baseRatio = 'xl') {
    const theme = useTheme();
    if (!size) {
        return undefined;
    }
    const initialRatio = theme.breakpoints.values[baseRatio];
    const finalRatio = theme.breakpoints.values[targetRatio];
    return size * finalRatio / initialRatio;
}

export function useWidths(size, baseRatio = 'xl') {
    return [useWidth(size, 'xl', baseRatio), useWidth(size, 'lg', baseRatio), useWidth(size, 'md', baseRatio), useWidth(size, 'sm', baseRatio), useWidth(size, 'xs', baseRatio)];
}




export function useFont(size, weight = undefined, justify = false) {
    const [xl, lg, md] = useWidths(size);
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
            fontSize: md,
            [theme.breakpoints.up('lg')]: {
                fontSize: lg,
            },
            [theme.breakpoints.up('xl')]: {
                fontSize: xl
            },
        }
    }));
    return useStyles().useFont;
}

export function useSize(width = undefined, height = undefined) {
    const [Wxl, Wlg, Wmd] = useWidths(width);
    const [Hxl, Hlg, Hmd] = useWidths(height);
    const useStyles = makeStyles(theme => ({
        useSize: {
            width: Wmd,
            height: Hmd,
            [theme.breakpoints.up('lg')]: {
                width: Wlg,
                height: Hlg,
            },
            [theme.breakpoints.up('xl')]: {
                width: Wxl,
                height: Hxl
            },
        }
    }));
    return useStyles().useSize;
}

export function useMinWidth(minWidth = undefined) {
    const [Wxl, Wlg, Wmd] = useWidths(minWidth);
    const useStyles = makeStyles(theme => ({
        useSize: {
            minWidth: Wmd,
            [theme.breakpoints.up('lg')]: {
                minWidth: Wlg,
            },
            [theme.breakpoints.up('xl')]: {
                minWidth: Wxl,
            },
        }
    }));
    return useStyles().useSize;
}

export function useBorderRadius(borderRadius) {
    const [xlBR, lgBR, mdBR] = useWidths(borderRadius);
    const useStyles = makeStyles(theme => ({
        useBorderRadius: {
            borderRadius: mdBR,
            [theme.breakpoints.up('lg')]: {
                borderRadius: lgBR,
            },
            [theme.breakpoints.up('xl')]: {
                borderRadius: xlBR,
            },
        }
    }));
    return useStyles().useBorderRadius;
}

// noinspection DuplicatedCode
export function useBorderRadiuses(topLeft = undefined, topRight = undefined, bottomLeft = undefined, bottomRight = undefined) {
    const [xlTopLeft, lgTopLeft, mdTopLeft] = useWidths(topLeft);
    const [xlBottomLeft, lgBottomLeft, mdBottomLeft] = useWidths(bottomLeft);
    const [xlTopRight, lgTopRight, mdTopRight] = useWidths(topRight);
    const [xlBottomRight, lgBottomRight, mdBottomRight] = useWidths(bottomRight);
    const useStyles = makeStyles(theme => ({
        useBorderRadius: {
            borderBottomLeftRadius: mdBottomLeft,
            borderBottomRightRadius: mdBottomRight,
            borderTopLeftRadius: mdTopLeft,
            borderTopRightRadius: mdTopRight,
            [theme.breakpoints.up('lg')]: {
                borderBottomLeftRadius: lgBottomLeft,
                borderBottomRightRadius: lgBottomRight,
                borderTopLeftRadius: lgTopLeft,
                borderTopRightRadius: lgTopRight
            },
            [theme.breakpoints.up('xl')]: {
                borderBottomLeftRadius: xlBottomLeft,
                borderBottomRightRadius: xlBottomRight,
                borderTopLeftRadius: xlTopLeft,
                borderTopRightRadius: xlTopRight
            },
        }
    }));
    return useStyles().useBorderRadius;
}

// noinspection DuplicatedCode
export function usePadding(top = undefined, bottom = undefined, left = undefined, right = undefined) {
    const [xlTop, lgTop, mdTop] = useWidths(top);
    const [xlBottom, lgBottom, mdBottom] = useWidths(bottom);
    const [xlLeft, lgLeft, mdLeft] = useWidths(left);
    const [xlRight, lgRight, mdRight] = useWidths(right);
    const useStyles = makeStyles(theme => ({
        usePadding: {
            paddingTop: mdTop,
            paddingBottom: mdBottom,
            paddingLeft: mdLeft,
            paddingRight: mdRight,
            [theme.breakpoints.up('lg')]: {
                paddingTop: lgTop,
                paddingBottom: lgBottom,
                paddingLeft: lgLeft,
                paddingRight: lgRight
            },
            [theme.breakpoints.up('xl')]: {
                paddingTop: xlTop,
                paddingBottom: xlBottom,
                paddingLeft: xlLeft,
                paddingRight: xlRight
            },
        }
    }));
    return useStyles().usePadding;
}

// noinspection DuplicatedCode
export function useMargin(top = undefined, bottom = undefined, left = undefined, right = undefined) {
    const [xlTop, lgTop, mdTop] = useWidths(top);
    const [xlBottom, lgBottom, mdBottom] = useWidths(bottom);
    const [xlLeft, lgLeft, mdLeft] = useWidths(left);
    const [xlRight, lgRight, mdRight] = useWidths(right);
    const useStyles = makeStyles(theme => ({
        useMargin: {
            marginTop: mdTop,
            marginBottom: mdBottom,
            marginLeft: mdLeft,
            marginRight: mdRight,
            [theme.breakpoints.up('lg')]: {
                marginTop: lgTop,
                marginBottom: lgBottom,
                marginLeft: lgLeft,
                marginRight: lgRight
            },
            [theme.breakpoints.up('xl')]: {
                marginTop: xlTop,
                marginBottom: xlBottom,
                marginLeft: xlLeft,
                marginRight: xlRight
            },
        }
    }));
    return useStyles().useMargin;
}