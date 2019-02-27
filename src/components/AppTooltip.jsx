/**
 * @module AppTooltip
 * @version 0.1.4
 * @since 0.1.3 - Can use single props.text or multi line props
 */

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #666;
    border-radius: 1.5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    color: #fff;
    display: none;
    font-family: 'Verdana', sans-serif;
    font-size: 12px;
    letter-spacing: 0.0425em;
    max-width: 200px;
    padding: 3px 6px;
    pointer-events: none;
    position: absolute;
    text-align: center;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
    top: -30px;
    z-index: 1030;
    transform-origin: 50% 100%;
`;

class AppTooltip extends React.Component {
    render() {
        return (
            <Wrapper className="tooltip">
                <div>{this.props.text}</div>
                <div>{this.props.date}</div>
                <div>{this.props.conditions}</div>
            </Wrapper>
        );
    }
}

export default AppTooltip;
