import React, { Component } from 'react';

const cc = require('cryptocompare');

export const AppContext = React.createContext();

export class AppProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 'dashboard'
        }
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data
        this.setState({coinList})
        console.log(coinList);
    }

    componentDidMount() {
        this.fetchCoins()
    }

    setPage = page => this.setState({ page })

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
