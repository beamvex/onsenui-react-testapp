import React from 'react';
import './App.css';
import logoURL from './assets/img/iscream-logo.png';
import { Card, Input, Button, Col, Row} from 'react-onsenui';
import { connect } from "react-redux";
import { signIn, signUp, updateEmail } from "./actions/index"
import memoize from "memoize-one";

const mapStateToProps = state => {
    console.log('homepage', state);
    return state;
};

function mapDispatchToProps(dispatch) {
    return {
        signIn: (email, password) => dispatch(signIn(email, password)),
        signUp: (email, password) => dispatch(signUp(email, password)),
        updateEmail: (email) => dispatch(updateEmail(email))
    };
}

class HomePageBase extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {

        }
    }

    componentDidUpdate(prevProps) {
        //console.log('homepage CDU', prevProps, this.props);
        if (prevProps.authReducer.email !== this.props.authReducer.email) {
            this.setState({email: this.props.authReducer.email})
        }        
    }

    render() {

        //console.log('homepage render', this.props);

        return (
            <div className="homepage-div">
                <div>
                    <img src={logoURL} alt="iscream.app" className="home-logo-center"/>
                    
                    <Card>
                        <Row><Col>
                        <p>Sign in or Sign up</p>
                        </Col></Row>
                        <Row><Col>
                        <Input className="width-max"
                            value={this.state.email} float
                            onChange={(event) => { this.setState({email: event.target.value})} }
                            placeholder='E-mail Address' />
                        </Col></Row>
                        <Row><Col>
                        <Input className="width-max"
                            value={this.state.password} float
                            onChange={(event) => { this.setState({password: event.target.value})} }
                            placeholder='Password' type="password" />
                        </Col></Row>
                        <Row>                            
                        <Col className="p50pButton">
                        <Button modifier="large--cta" onClick={() => {this.props.signIn(this.state.email, this.state.password)}}>
                        Sign In!
                        </Button>
                        </Col>
                        <Col className="p50pButton">
                        <Button modifier="large--cta" onClick={() => {this.props.signUp(this.state.email, this.state.password)}}>
                        Sign Up!
                        </Button>
                        </Col>
                        </Row>
                    </Card>
                </div>
            </div>
        );
    }
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageBase);
