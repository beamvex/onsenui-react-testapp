import React from 'react';
import './App.css';
import logoURL from './assets/img/iscream-logo.png';
import { Card, Input, Button, Col, Row} from 'react-onsenui';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
        }
    }

    render() {
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
                        <Button modifier="large--cta" >
                        Sign In!
                        </Button>
                        </Col>
                        <Col className="p50pButton">
                        <Button modifier="large--cta">
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

export default HomePage;
