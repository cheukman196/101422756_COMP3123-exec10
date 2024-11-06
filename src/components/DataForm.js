import React, { Component } from 'react'

export default class DataForm extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            email: '',
            name: '',
            address: '',
            address2: '',
            city: '',
            province: '',
            postalCode: '',
            agreeTerms: false,
            formData: null
        }

        this.provinceList = [
            {id: 1, name: 'NL'},
            {id: 2, name: 'PE'},
            {id: 3, name: 'NS'},
            {id: 4, name: 'NB'},
            {id: 5, name: 'QC'},
            {id: 6, name: 'ON'},
            {id: 7, name: 'MB'},
            {id: 8, name: 'SK'},
            {id: 9, name: 'AB'},
            {id: 10, name: 'BC'},
            {id: 11, name: 'YT'},
            {id: 12, name: 'NT'},
            {id: 13, name: 'NU'},
        ]
    }

    handleInput = (e) => {
        const {name, value} = e.target;
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            formData: {
                email: this.state.email,
                name: this.state.name,
                address: this.state.address,
                address2: this.state.address2,
                city: this.state.city,
                province: this.state.province,
                postalCode: this.state.postalCode
            }
        })
    }

    render() {
            return (
            <div class="w-100 d-flex flex-column justify-content-around p-5">
                <div>
                    <form onSubmit={this.handleSubmit}>
                    <h1>Data Entry Form</h1>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                Email<br/>
                                <input type='text' class="form-control" name='email' value={this.state.email} 
                                placeholder='Email' onChange={this.handleInput}></input>
                            </div>
                            <div class="col-md-6">
                                Full Name<br/>
                                <input type='text' class="form-control" name='name' value={this.state.name} 
                                placeholder='Full Name' onChange={this.handleInput}></input>
                            </div>
                        </div>

                        Address<br/><input type='text' class="form-control" name='address' value={this.state.address} 
                        placeholder='1234 Main St' onChange={this.handleInput}></input>
                        <br/>

                        Address2<br/><input type='text' class="form-control" name='address2' value={this.state.address2} 
                        placeholder='Apartment, Studio or Floor' onChange={this.handleInput}></input>
                        <br/>
                        
                        <div class="flex row mb-3">
                            <div class="col-md-4">
                                City<br/><input type='text' class="form-control" name='city' value={this.state.city} 
                                onChange={this.handleInput}></input>
                            </div>

                            <div class="col-md-4">
                                Province<br/><select name="province" class="form-select" value={this.state.province} 
                                    onChange={this.handleInput}>
                                {this.provinceList.map((p) => (
                                    <option key={p.id} value={p.name}>{p.name}</option>
                                ))}
                                </select>
                            </div>

                            <div class="col-md-4">          
                                Postal Code<br/><input type='text' class="form-control" name='postalCode' 
                                    value={this.state.postalCode} onChange={this.handleInput}></input>
                            </div>  
                        </div>

                        <div class="d-flex justify-content-center m-3">          
                            <div class="form-check">
                                <label class="form-check-label" for="terms">Agree Terms & Conditions</label>
                                <input type='checkbox' class="form-check-input" value={this.state.agreeTerms} 
                                    name='terms' onChange={this.handleInput}/>
                            </div>
                        </div>  

                        <div class="d-flex justify-content-center">      
                            <button name='btnSubmit' class="btn btn-primary" value='submit' type='submit'>
                                Submit
                            </button>
                        </div>              

                    </form>
                </div>    

                <div class="m-4 p-3">                   
                    <table class="table table-bordered table-striped">
                        <tbody>
                            <tr>
                                <td class="col-3">Email</td>
                                <td>{this.state.formData == null? "" : this.state.formData.email}</td>
                            </tr>
                            <tr>
                                <td class="col-3">Name</td>
                                <td>{this.state.formData == null? "" : this.state.formData.name}</td>
                            </tr>
                            <tr>
                                <td class="col-3">Address</td>
                                <td>{this.state.formData == null? "" : this.state.formData.address}
                                    {" "} 
                                    {this.state.formData == null? "" : this.state.formData.address2}
                                </td>
                            </tr>
                            <tr>
                                <td class="col-3">City</td>
                                <td>{this.state.formData == null? "" : this.state.formData.city}</td>
                            </tr>
                            <tr>
                                <td class="col-3">Province</td>
                                <td>{this.state.formData == null? "" : this.state.formData.province}</td>
                            </tr>
                            <tr>
                                <td class="col-3">Postal Code</td>
                                <td>{this.state.formData == null? "" : this.state.formData.postalCode}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>                
            </div>
            )
    }
}
