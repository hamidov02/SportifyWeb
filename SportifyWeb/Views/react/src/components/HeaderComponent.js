import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isModalOpenSignUp: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModalSignUp = this.toggleModalSignUp.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignUp =  this.handleSignUp.bind(this);
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    toggleModalSignUp() {
        this.setState({
            isModalOpenSignUp: !this.state.isModalOpenSignUp
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }  

    handleSignUp(event) {
        this.toggleModalSignUp();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }  

    render() {
        return(
            <div>
                <Navbar dark color="dark" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand style={{color: 'lightGreen', fontSize: '30px'}}  className="mr-6" href="/home">Sportify.com</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/currency'><span className="fa fa-bank fa-lg"></span>  </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/language'><span className="fa fa-globe fa-lg"></span>  </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to="/user"><p className="btn-dark text-dark">1</p></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to="/owner"><p className="btn-dark text-dark">2</p></NavLink>
                            </NavItem>
                            </Nav>
                            {/* LOGIN */}
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button color="success" outline onClick={this.toggleModal} className="mr-4"><span className="fa fa-sign-in fa-lg"></span> Login </Button>
                                    <Button color="success" outline onClick={this.toggleModalSignUp} className="mr-4"><span className="fa fa-user fa-lg"></span> Sign Up </Button>
                                    {/* <Link to="/signup"><Button variant="success">Sign Up</Button></Link> */}
                                    {/* <Link to="/signup"><Button color="success" outline ><span className="fa fa-user fa-lg"></span> Sign up</Button></Link> */}
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Lorem Ipsum</h1>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="success">Login</Button>
                        </Form>                    
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModalOpenSignUp} toggle={this.toggleModalSignUp}>
                    <ModalHeader toggle={this.toggleModalSignUp}>Sign Up</ModalHeader>
                    <ModalBody>
                        <form>
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                <label for="validationServer01">First name</label>
                                <input type="text" class="form-control is-valid" id="validationServer01" placeholder="Akbar" required />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                <label for="validationServer02">Last name</label>
                                <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Hamidov" required />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                <label for="validationServer02">Username</label>
                                <input type="text" class="form-control is-valid" id="validationServer02" placeholder="akbar_hamidov" required />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control is-valid" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="akbar.hamidov.02@gmail.com" required /> 
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="col-md-12 mb-3">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                <input type="password" class="form-control is-valid" id="inputPassword" />
                                </div>
                            </div>                
                            <div class="form-row">
                                <div class="col-md-6 mb-3">
                                <label for="validationServer03">Country</label>
                                <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                                <div id="validationServer03Feedback" class="invalid-feedback">
                                    Please provide a valid country.
                                </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                <label for="validationServer03">City</label>
                                <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                                <div id="validationServer03Feedback" class="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                <label for="validationServer03">Street Name</label>
                                <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                                <div id="validationServer05Feedback" class="invalid-feedback">
                                    Please provide a valid street name.
                                </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                <label for="validationServer05">Street Number</label>
                                <input type="number" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required />
                                <div id="validationServer05Feedback" class="invalid-feedback">
                                    Please provide a valid street number.
                                </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                <label for="validationServer05">Zip</label>
                                <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required />
                                <div id="validationServer05Feedback" class="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
                                <label class="form-check-label" for="invalidCheck3">
                                    Agree to terms and conditions
                                </label>
                                <div  id="invalidCheck3Feedback" class="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                                </div>
                            </div>
                            <button class="btn btn-lg btn-success" type="submit">Sign Up</button>
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
 
export default Header;