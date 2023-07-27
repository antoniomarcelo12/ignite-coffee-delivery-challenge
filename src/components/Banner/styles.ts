import { styled } from "styled-components";

export const BannerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    margin-top: 5rem;

    position: relative;

    .bannerBackLayer {
        position: absolute;
        margin: 0;
        padding: 0;
        left: -30rem;
        height: 100%;
        width: 99.8vw;
        z-index: -19;
    }
`

export const DescriptionWrapper = styled.div`
    max-width: 32rem;

`

export const BannerHeaderWrapper = styled.div`

    h1 {    
        font-family: 'Baloo 2';
        font-size: 2.5rem;
        font-weight: 800;
        line-height: 130%;
    }

    p {
        font-family: Roboto;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 130%;

        margin-top: 1rem;
    }
`

export const BannerFooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 5.25rem;

    margin-top: 4.125rem;
    
    
`

const BackItemColors = {
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    baseText: 'base-text',
    purple: 'purple'
}

interface BannerFooterWrapperItemProps {
    $BackColor: keyof typeof BackItemColors
}

export const BannerFooterWrapperItem = styled.div<BannerFooterWrapperItemProps>`
    display: flex;
    align-items: center;
    gap: .75rem;
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5rem;
        border-radius: 50%;

        background-color: ${props => props.theme[BackItemColors[props.$BackColor]]}
    }
    p {
        font-family: Roboto;
        font-size: .875rem;
        font-weight: 400;
        line-height: 130%;
        color: ${props => props.theme['base-text']}

    }

`

export const BannerImageWrapper = styled.div`

`