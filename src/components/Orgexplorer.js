import React, { Component } from 'react'
import axios from "axios";
import {Link} from "react-router-dom"

import { Form, InputGroup, Button, FormControl } from 'react-bootstrap'


export default class Orgexplorer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            rows: 5,
            minRows: 5,
            maxRows: 10,
            orgnames:['']

        };
    }

    componentDidMount(){
        this.getOrgdetails()
    }

    inputchange(e) {
        this.setState({ value: e.target.value })
    }

  

    getOrgdetails() {

        axios.get('http://localhost:5000/get_org', { withCredentials: true })
            .then( (response) => {
               this.setdata(response)
            })
            .catch( (error) => {
                console.log(error);
            });


    }
    setdata(response) {
        this.setState({ orgnames: response.data })
    }
    sendfetch() {
        const data = { "org_name": this.state.value };

        axios.post('http://localhost:5000/create_org', data, { withCredentials: true })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    render() {
        return (
            <div>
                <Form inline>
                    <Form.Label htmlFor="inlineFormInputName2" srOnly>
                        Name
                    </Form.Label>
                    <Form.Control
                        className="mb-2 mr-sm-2"
                        id="inlineFormInputName2"
                        placeholder="Jane Doe"
                        onChange={(e) => this.inputchange(e)}
                    />

                    <Button type="submit" className="mb-2" onClick={() => this.sendfetch()}>
                        Submit
                    </Button>
                </Form>
                

                <div>{this.state.orgnames.map((i) => { return <div><Link to={{ pathname:'/app/organisation',orgname:{name:i}}}>{i}</Link></div>})}</div>
            </div>

        );
    }
}

