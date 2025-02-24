import React, { Component} from "react";
import PropTypes from 'prop-types';

class MyComponent extends Component {
    //  방법 1 : props 값을 지정되지 않을 때 기본 값으로 설정하는 defaultProps값 설정
    static defaultProps = {
        name: '기본 이름(위)'
    }
    // (소문자 대문자 주의) property 타입 설정
    static propTypes = {
        name: PropTypes.string, // name props 타입을 문자열로 설정합니다. 
        age: PropTypes.number.isRequired // 숫자이며, 필수적 존재
    }
    // 부모 컴포넌트 설정하기    
    constructor(props) {
        super(props);
        // this.state = {
        //     number: 0
        // }
    }
    // state 값을 밖으로 빼서 작성할 수 있음
    state = {
        number: 0
    }
    render() {
        return (
            <div>
                <p>안녕하세요, 제이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age}살 입니다.</p>
                <p>숫자 : {this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>더하기</button>
            </div>
        )
    }
}

// 방법 2 : 기본방식 : props 값을 지정되지 않을 때 기본 값으로 설정하는 defaultProps값 설정
// MyComponent.defaultProps = {
//     name: '기본 이름(아래)'
// }

// 소문자 대문자 주의
// MyComponent.propTypes = {
//     name: PropTypes.string // name props 타입을 문자열로 설정합니다. 
// }

export default MyComponent;