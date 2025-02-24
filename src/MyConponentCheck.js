import React, { Component} from "react";
import PropTypes from 'prop-types';

class MyComponentCheck extends Component {    
    render() {

        

        return (
            <div>              
                <p>안녕하세요, 제이름은 {this.props.name} 입니다.</p>
            </div>
            
        )
    }
}


export default MyComponentCheck;