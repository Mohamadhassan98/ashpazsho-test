import React from "react";
import PropTypes from 'prop-types';

export default function HiddenScroll(props) {
    const {horizontal, vertical} = props;
    const containerStylesGenerator = () => {
        const style = {
            width: '100%',
            height: '100%',
        };
        if (horizontal && vertical) {
            style.overflow = 'hidden';
        } else if (horizontal) {
            style.overflowX = 'hidden';
        } else if (vertical) {
            style.overflowY = 'hidden';
        }
        return style;
    };

    const wrapperStylesGenerator = () => {
        const style = {
            height: '100%',
            width: '100%'
        };
        if (horizontal && vertical) {
            style.overflow = 'scroll';
            style.marginBottom = '-50px';
            style.paddingBottom = '50px';
            style.marginLeft = '-50px';
            style.paddingLeft = '50px';
        } else if (horizontal) {
            style.overflowX = 'scroll';
            style.marginBottom = '-50px';
            style.paddingBottom = '50px';
        } else if (vertical) {
            style.overflowY = 'scroll';
            style.marginLeft = '-50px';
            style.paddingLeft = '50px';
        }
        return style;
    };
    return (
        <div style={containerStylesGenerator()}>
            <div style={wrapperStylesGenerator()}>
                {props.children}
            </div>
        </div>
    );
}

HiddenScroll.propTypes = {
    horizontal: PropTypes.bool,
    vertical: PropTypes.bool,
    children: PropTypes.node.isRequired
};