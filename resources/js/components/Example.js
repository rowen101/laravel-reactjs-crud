import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Label,Input, FormGroup, ModalFooter,
    ModalBody,ModalHeader,Modal,Table,Button} from 'reactstrap';
class Example extends Component {

    constructor(props){
        super(props);
        this.state = {
            employee:[],
            form:{
                id:'',
                fname:'',
                lname:'',
                address:'',
                email:'',
                gender:''
            },
            newEmployeeModal: false,
            editEmployeeModal:false
        }
    }
    componentDidMount(){
        this._refreshEmployeelist();
    }
    toggleNewEmployee(){
        this.setState({
            newEmployeeModal: ! this.state.newEmployeeModal,
            form:{
                id:'',
                fname:'',
                lname:'',
                address:'',
                email:'',
                gender:''
            },
        });
    }
    toggleEditEmployee(){
        this.setState({
            editEmployeeModal: ! this.state.editEmployeeModal
        });
    }
    addEmployee(){
        axios.post('http://127.0.0.1:8000/api/addemployees',this.state.form).then((response)=>{
           let{employee} =this.state;
           employee.push(response.data);
           this.setState({employee, newEmployeeModal: false, form:{
            fname:'',
            lname:'',
            address:'',
            email:'',
            gender:''
        }});
        });
    }
    removeEmployee(id){
        axios.delete('http://127.0.0.1:8000/api/delete-employee/' + id).then((response) =>{
        this._refreshEmployeelist();
        });
    }
    editEmployee(val){
        this.setState({
            form:{
                id: val.id,
                fname: val.fname,
                lname: val.lname,
                address: val.address,
                gender: val.gender,
                email: val.email
            }, editEmployeeModal:! this.state.editEmployeeModal
        });

    }
    updateEmployee(){
        axios.put('http://127.0.0.1:8000/api/update-employee/' + this.state.form.id,this.state.form)
        .then((response)=>{
            this._refreshEmployeelist();
           this.setState({ editEmployeeModal: false, form:{
            id:'',
            fname:'',
            lname:'',
            address:'',
            email:'',
            gender:''
        }});
        });
    }
    _refreshEmployeelist(){
        axios.get('http://127.0.0.1:8000/api/employeelist').then((response)=>{
            this.setState({
                employee:response.data
            });
        });
    }

    render() {
        let employee = this.state.employee.map((employee)=>{
            return(
                <tr key={employee.id}>

                    <th>{employee.fname}</th>
                    <th>{employee.lname}</th>
                    <th>{employee.address}</th>
                    <th>{employee.gender}</th>
                    <th>{employee.email}</th>
                    <th>
                    <Button color="success" size="sm" className="mr-2" onClick={this.editEmployee.bind(this,employee)}>Edit</Button>
                    | <Button color="danger" size="sm" className="mr-2" onClick={this.removeEmployee.bind(this,employee.id)}>Remove</Button>
                    </th>
                </tr>
            )
        });
        return (
            <div className="container mt-2">
                <h1>Employee List</h1>
                    <Button color="primary" size="sm" className="mr-2" onClick={this.toggleNewEmployee.bind(this)}>Add Employee</Button>
                <Modal isOpen={this.state.newEmployeeModal} toggle={this.toggleNewEmployee.bind(this)}>
                    <ModalHeader toggle={this.toggleNewEmployee.bind(this)}>Add Employee</ModalHeader>
                    <ModalBody>
                       <FormGroup>
                           <Label for="First Name">First Name</Label>
                           <Input id="fname" value={this.state.form.fname.trim()} onChange={(e)=>{
                               let{ form } = this.state;
                               form.fname = e.target.value;
                               this.setState({form});
                           }} />
                       </FormGroup>
                       <FormGroup>
                           <Label for="Last Name">Last Name</Label>
                           <Input id="lname" value={this.state.form.lname.trim()} onChange={(e)=>{
                               let{ form} = this.state;
                               form.lname = e.target.value;
                               this.setState({form});
                           }}/>
                       </FormGroup>
                       <FormGroup>
                           <Label for="Address">Address</Label>
                           <Input id="address" value={this.state.form.address.trim()} onChange={(e)=>{
                               let{ form} = this.state;
                               form.address = e.target.value;
                               this.setState({form});
                           }}/>
                       </FormGroup>
                       <FormGroup>
                           <Label for="Gender">Gender</Label>
                           <Input id="gender" value={this.state.form.gender.trim()} onChange={(e)=>{
                               let{ form} = this.state;
                               form.gender = e.target.value;
                               this.setState({form});
                           }}/>
                       </FormGroup>
                       <FormGroup>
                           <Label for="Email">Email</Label>
                           <Input id="email" value={this.state.form.email.trim()} onChange={(e)=>{
                               let{ form} = this.state;
                               form.email = e.target.value;
                               this.setState({form});
                           }}/>
                       </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addEmployee.bind(this)}>Save Employee</Button>
                        <Button color="secondary" onClick={this.toggleNewEmployee.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                {/* Edit Modal */}
                <Modal isOpen={this.state.editEmployeeModal} toggle={this.toggleEditEmployee.bind(this)}>
                    <ModalHeader toggle={this.toggleEditEmployee.bind(this)}>Edit Employee</ModalHeader>
                    <ModalBody>
                       <FormGroup>
                           <Label for="First Name">First Name</Label>
                           <Input id="fname" value={this.state.form.fname.trim()} onChange={(e)=>{
                               let{ form } = this.state;
                               form.fname = e.target.value;
                               this.setState({form});
                           }} />
                       </FormGroup>
                       <FormGroup>
                           <Label for="Last Name">Last Name</Label>
                           <Input id="lname" value={this.state.form.lname.trim()} onChange={(e)=>{
                               let{ form} = this.state;
                               form.lname = e.target.value;
                               this.setState({form});
                           }}/>
                       </FormGroup>
                       <FormGroup>
                           <Label for="Address">Address</Label>
                           <Input id="address" value={this.state.form.address.trim()} onChange={(e)=>{
                               let{ form} = this.state;
                               form.address = e.target.value;
                               this.setState({form});
                           }}/>
                       </FormGroup>
                       <FormGroup>
                           <Label for="Gender">Gender</Label>
                           <Input id="gender" value={this.state.form.gender.trim()} onChange={(e)=>{
                               let{ form} = this.state;
                               form.gender = e.target.value;
                               this.setState({form});
                           }}/>
                       </FormGroup>
                       <FormGroup>
                           <Label for="Email">Email</Label>
                           <Input id="email" value={this.state.form.email.trim()} onChange={(e)=>{
                               let{ form} = this.state;
                               form.email = e.target.value;
                               this.setState({form});
                           }}/>
                       </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.updateEmployee.bind(this)}>Update Employee</Button>
                        <Button color="secondary" onClick={this.toggleEditEmployee.bind(this)}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <div className="row">
                    <div className="col-md-12">
                        <Table className="table">
                            <thead>
                                <tr>

                                    <th scope="col">Firs Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Email</th>
                                    <th scrope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employee}
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
        );
    }
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
