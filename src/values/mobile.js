import makeStyles from "@material-ui/core/styles/makeStyles";

export function useFont(size, weight = undefined, justify = false) {
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
            fontSize: size
        }
    }));
    return useStyles().useFont;
}

export function useSize(width = undefined, height = undefined) {
    const useStyles = makeStyles(theme => ({
        useSize: {
            width: width,
            height: height,
        }
    }));
    return useStyles().useSize;
}

export function useMinWidth(minWidth = undefined) {
    const useStyles = makeStyles(theme => ({
        useSize: {
            minWidth: minWidth,
        }
    }));
    return useStyles().useSize;
}

export function useBorderRadius(borderRadius) {
    const useStyles = makeStyles(theme => ({
        useBorderRadius: {
            borderRadius: borderRadius,
        }
    }));
    return useStyles().useBorderRadius;
}

// noinspection DuplicatedCode
export function useBorderRadiuses(topLeft = undefined, topRight = undefined, bottomLeft = undefined, bottomRight = undefined) {
    const useStyles = makeStyles(theme => ({
        useBorderRadius: {
            borderBottomLeftRadius: bottomLeft,
            borderBottomRightRadius: bottomRight,
            borderTopLeftRadius: topLeft,
            borderTopRightRadius: topRight,
        }
    }));
    return useStyles().useBorderRadius;
}

// noinspection DuplicatedCode
export function usePadding(top = undefined, bottom = undefined, left = undefined, right = undefined) {
    const useStyles = makeStyles(theme => ({
        usePadding: {
            paddingTop: top,
            paddingBottom: bottom,
            paddingLeft: left,
            paddingRight: right,
        }
    }));
    return useStyles().usePadding;
}

// noinspection DuplicatedCode
export function useMargin(top = undefined, bottom = undefined, left = undefined, right = undefined) {
    const useStyles = makeStyles(theme => ({
        useMargin: {
            marginTop: top,
            marginBottom: bottom,
            marginLeft: left,
            marginRight: right,
        }
    }));
    return useStyles().useMargin;
}