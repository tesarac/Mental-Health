import React from "react";

export default function contact() {
    return(
        <>
        <div class='container my-5' id="container6">
        <h1 id="container4">Get Help</h1>
                <div class="row">
                    <div class="col">
                    <img id="col1img3" src={require('../../images/cont1.png')} alt="one" />
                    </div>
                    <div class="col">
                <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter name here" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Phone Number</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />
                    </div>


                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Enter Message here</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-success">Send</button>
                </form>
                    </div>
                </div>
            </div>
            <div class='container'></div>
        </>
    )
}