import React, { useState } from 'react';
import styled from 'styled-components';

const Button = ({ children, isPurple, onClick }) => {
    const [isButtonActive, setButtonActivity] = useState(false);

    return (
        <StyledButton
            isButtonActive={isButtonActive}
            isPurple={isPurple}
            onClick={onClick ? onClick : () => { }}
            onTouchStart={() => setButtonActivity(true)}
            onTouchEnd={() => setButtonActivity(false)}
            onMouseOver={() => setButtonActivity(true)}
            onFocus={() => setButtonActivity(true)}
            onMouseOut={() => setButtonActivity(false)}
            onBlur={() => setButtonActivity(false)}
        >
            {children}
            <div className="ripple"></div>
        </StyledButton>
    );
}

const StyledButton = styled.button`
    display: block;
    overflow: hidden;
    position: relative;
    color: ${({ theme, isPurple }) => isPurple ? theme.colors.primary : 'white'};
    font-weight: ${({ theme }) => theme.font.bold};
    font-size: ${({ theme }) => theme.font.s};
    letter-spacing: .2px;
    padding: 1.5rem 3rem;
    border: 4px solid ${({ theme, isPurple }) => isPurple ? theme.colors.primary : 'white'};
    cursor: pointer;
    & .ripple {
        border-radius: 40%;
        background-color: ${({ theme, isPurple }) => isPurple ? theme.colors.primary : 'white'};
        opacity: .3;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 60px;
        height: 20px;
        transform: translate(-50%, -50%) scale(0);
        animation: ${({ isButtonActive }) => isButtonActive ? 'rippleIn .3s linear' : 'rippleOut 1s linear'};
    }
    @keyframes rippleIn {
        to {
            transform: translate(-50%, -50%) scale(10);
            opacity: 0;
        }
    }
    @keyframes rippleOut {
        to {
            transform: translate(-50%, -50%) scale(0);
            opacity: .3;
        }
    } 
`;

export default Button;