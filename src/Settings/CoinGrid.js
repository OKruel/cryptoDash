import React from 'react';
import { AppContext } from '../App/AppProvider';
import styled from 'styled-components';
import CoinTile from './CoinTile';


export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 15px;
    margin-top: 40px;
`
function getCoinsToDisplay(coinList, topSection, favorites) {
    return topSection ? favorites : Object.keys(coinList).slice(0, 100)
}

export default function ({topSection}) {
    return <AppContext.Consumer>
        {({ coinList, favorites }) => <CoinGridStyled >
            {getCoinsToDisplay(coinList, topSection, favorites).map((coinKey, index) => <CoinTile key={index} topSection={topSection} coinKey={coinKey}/> )}
        </CoinGridStyled>}
    </AppContext.Consumer>
}