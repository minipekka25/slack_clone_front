import React, { Component } from 'react'

export default class Organisation extends Component {


    render() {
        console.log(this.props.location.orgname)
        return (
            <div>
                hello{this.props.location.orgname ? this.props.location.orgname.name : 'holy duck ! get out of here soon'}
            </div>
        )
    }
}
