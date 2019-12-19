import React from 'react';
import WelcomeMsg from './WelcomeMsg';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';
import Search from './Search';

export default function () {
    return <Page name='settings'>
        <WelcomeMsg />
        <CoinGrid topSection/>
        <ConfirmButton />
        <Search/>
        <CoinGrid/>
    </Page>
}