import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/images/1143430.jpg';
import '../../styles/images.scss';

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todos')
        // }, 3000)
    }

    render() {
        console.log('>>>check props:', this.props)
        return (
            <>
                <div>
                    Hello world from Homepage
                </div>
                <div className="logo">
                    <img className="logo-1" src={logo} />
                </div>
            </>
        )
    }
}



// export default withRouter(Home);
export default Color(Home);