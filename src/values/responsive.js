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
    return [useWidth(size, 'md', baseRatio), useWidth(size, 'lg', baseRatio), useWidth(size, 'xl', baseRatio)];
}

export const genericStyles = makeStyles(() => ({
    genericFullWidth: {
        width: '100%'
    },
    ltr: {
        flip: false,
        textAlign: 'left',
        direction: 'ltr',
    },
    backgroundMainColor: {
        background: '#FF364A'
    },
    fontMainColor: {
        color: '#FF364A'
    },
    inlineFlex: {
        display: 'inline-flex'
    },
    fontGreenColor: {
        color: '#03B40F'
    },
    fontWhiteColor: {
        color: '#FFFFFF'
    },
    backgroundGreenColor: {
        background: '#03B40F'
    },
    centerJustifyContent: {
        justifyContent: 'center'
    },
    genericAutoWidth: {
        width: 'auto'
    },
    centerAlignItems: {
        alignItems: 'center'
    }
}));


export function useFont(size, weight = undefined, justify = false) {
    const [md, lg, xl] = useWidths(size);
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
            [theme.breakpoints.up('md')]: {
                fontSize: md,
            },
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
    const [Wmd, Wlg, Wxl] = useWidths(width);
    const [Hmd, Hlg, Hxl] = useWidths(height);
    const useStyles = makeStyles(theme => ({
        useSize: {
            [theme.breakpoints.up('md')]: {
                width: Wmd,
                height: Hmd,
            },
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
    const [Wmd, Wlg, Wxl] = useWidths(minWidth);
    const useStyles = makeStyles(theme => ({
        useSize: {
            [theme.breakpoints.up('md')]: {
                minWidth: Wmd,
            },
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
    const [mdBR, lgBR, xlBR] = useWidths(borderRadius);
    const useStyles = makeStyles(theme => ({
        useBorderRadius: {
            [theme.breakpoints.up('md')]: {
                borderRadius: mdBR
            },
            [theme.breakpoints.up('lg')]: {
                borderRadius: lgBR
            },
            [theme.breakpoints.up('xl')]: {
                borderRadius: xlBR
            },
        }
    }));
    return useStyles().useBorderRadius;
}

// noinspection DuplicatedCode
export function useBorderRadiuses(topLeft = undefined, topRight = undefined, bottomLeft = undefined, bottomRight = undefined) {
    const [mdTopLeft, lgTopLeft, xlTopLeft] = useWidths(topLeft);
    const [mdBottomLeft, lgBottomLeft, xlBottomLeft] = useWidths(bottomLeft);
    const [mdTopRight, lgTopRight, xlTopRight] = useWidths(topRight);
    const [mdBottomRight, lgBottomRight, xlBottomRight] = useWidths(bottomRight);
    const useStyles = makeStyles(theme => ({
        useBorderRadius: {
            [theme.breakpoints.up('md')]: {
                borderBottomLeftRadius: mdBottomLeft,
                borderBottomRightRadius: mdBottomRight,
                borderTopLeftRadius: mdTopLeft,
                borderTopRightRadius: mdTopRight
            },
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
    const [mdTop, lgTop, xlTop] = useWidths(top);
    const [mdBottom, lgBottom, xlBottom] = useWidths(bottom);
    const [mdLeft, lgLeft, xlLeft] = useWidths(left);
    const [mdRight, lgRight, xlRight] = useWidths(right);
    const useStyles = makeStyles(theme => ({
        usePadding: {
            [theme.breakpoints.up('md')]: {
                paddingTop: mdTop,
                paddingBottom: mdBottom,
                paddingLeft: mdLeft,
                paddingRight: mdRight
            },
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
    const [mdTop, lgTop, xlTop] = useWidths(top);
    const [mdBottom, lgBottom, xlBottom] = useWidths(bottom);
    const [mdLeft, lgLeft, xlLeft] = useWidths(left);
    const [mdRight, lgRight, xlRight] = useWidths(right);
    const useStyles = makeStyles(theme => ({
        useMargin: {
            [theme.breakpoints.up('md')]: {
                MarginTop: mdTop,
                marginBottom: mdBottom,
                marginLeft: mdLeft,
                marginRight: mdRight
            },
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