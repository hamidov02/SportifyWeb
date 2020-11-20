import React from 'react';

const MainSignUp = () => {
    return (
        <div className="container">
            <h1 style={{padding: '6% 0' , color: 'green'}}>Sign Up</h1>
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
                <br />
                <br />
        </div>
    );
}
 
export default MainSignUp;