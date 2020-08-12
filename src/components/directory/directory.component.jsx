import React from 'react';
import SECTIONS from './../../data/directory.data'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';


class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections: SECTIONS 
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({id , ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps} /> )
                }
            </div>
        )
    }
}

export default Directory