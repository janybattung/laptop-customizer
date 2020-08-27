import React, {Component} from 'react';
import slugify from 'slugify'
import FeatureOption from './FeatureOption'

export default class Features extends Component {

    render() {
        return <form>
            <h2>Customize your laptop</h2>
            {Object.keys(this.props.features).map((feature, idx) => {
                const featureHash = feature + '-' + idx;
                const options = this.props.features[feature].map(item => {
                    const itemHash = slugify(JSON.stringify(item));
                    return <FeatureOption updateFeature={this.props.updateFeature} selected={this.props.selected}
                                    itemHash={itemHash} feature={feature} item={item}/>
                });

                return (
                    <fieldset className="feature" key={featureHash}>
                        <legend className="feature__name">
                            <h3>{feature}</h3>
                        </legend>
                        {options}
                    </fieldset>
                );
            })}
        </form>
    }
}