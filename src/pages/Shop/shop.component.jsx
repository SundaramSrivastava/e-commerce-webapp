import React, { Component } from 'react'
import './shop.styles.scss'
import SHOP_DATA from '../../data/shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            Collections: SHOP_DATA
        }
    }
    
    render() {
        const {Collections} = this.state
        return (
            <div className='shop'>
                {
                    Collections.map( ({id, ...otherCollectionProps}) =>(
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ) )
                }
            </div>
        )
    }
}

export default ShopPage