import React, {Component} from 'react';
import Total from "./Total";

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

class SummaryItems extends Component {

    render() {

        return Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];

            return (
                <div className="summary__option" key={featureHash}>
                    <div className="summary__option__label">{feature} </div>
                    <div className="summary__option__value">{selectedOption.name}</div>
                    <div className="summary__option__cost">
                        {this.props.USCurrencyFormat.format(selectedOption.cost)}
                    </div>
                </div>
            );
        })
    }
}