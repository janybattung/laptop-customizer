import React, {Component} from 'react';
import Total from "./Total";
import SummaryItems from "./SummaryItems";

export default class Summary extends Component {
    render() {
        const {USCurrencyFormat, selected} = this.props;
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <SummaryItems USCurrencyFormat={USCurrencyFormat} selected={selected} />
                <Total USCurrencyFormat={USCurrencyFormat} selected={selected} />
            </section>
        )
    }
}

