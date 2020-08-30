import React, {Component} from 'react'
import FeatureOption from "./FeatureOption";
import slugify from "slugify";

export default class FeatureOptions extends Component {

    render() {

        return (
            <>
                {
                    this.props.feature.map(el => {
                        const itemHash = slugify(JSON.stringify(el));
                        return <FeatureOption updateFeature={this.props.updateFeature} selected={this.props.selected}
                                              itemHash={itemHash} feature={this.props.featureName} item={el}/>
                    })

                }
            </>
        )
    }
}