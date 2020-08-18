import React, { Component } from 'react'
import {Remarkable} from 'remarkable'
import ReactHtmlParser from 'react-html-parser'; 
import './editor.css'
import { MentionsInput, Mention } from 'react-mentions'
import axios from "axios";

import {Form,InputGroup,Button,FormControl} from 'react-bootstrap'


const MY_BLOG_POST = `plain text...
# h6 Heading
`

// export default class editor extends Component {

//      autoExpand = function (field) {

//     // Reset field height
//     field.style.height = 'inherit';

//     // Get the computed styles for the element
//     var computed = window.getComputedStyle(field);

//     // Calculate the height
//     var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
//         + parseInt(computed.getPropertyValue('padding-top'), 10)
//         + field.scrollHeight
//         + parseInt(computed.getPropertyValue('padding-bottom'), 10)
//         + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

//     field.style.height = height + 'px';

// };



//     componentWillMount() {
//         this.markdown = new Remarkable()
//     }

//     render() {
//         return (
//             <div>
//                 <textarea></textarea>
//                 <div style={{ color: 'white' }}>{ReactHtmlParser(this.markdown && this.markdown.render(MY_BLOG_POST))}</div>     
//                 <div style={{ color: 'white' }}> <p><strong>Solution with span:</strong> <span class="textarea" role="textbox" contenteditable></span></p></div>
//             </div>,
//             document.addEventListener('input', function (event) {
//                 if (event.target.tagName.toLowerCase() !== 'textarea') return;
//                 this.autoExpand(event.target);
//             }, false)
//         )
//     }
// }

export default class editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            rows: 5,
            minRows: 5,
            maxRows: 10,
       
        };
    }
 
inputchange(e){
this.setState({value:e.target.value})
}

sendfetch(){
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
                        onChange={(e)=>this.inputchange(e)}
                    />
                  
                    <Button type="submit" className="mb-2" onClick={()=>this.sendfetch()}>
                        Submit
  </Button>
                </Form>
           </div>
        );
    }
}

