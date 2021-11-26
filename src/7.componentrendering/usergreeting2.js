import React, { Component } from 'react'

export class Usergreeting2 extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             islogin:true
        }
    }
    
    render() {
        return (this.islogin ? "<div>welcome ishan</div>":"<div>false</div>"
        )
    }
}

export default Usergreeting2
