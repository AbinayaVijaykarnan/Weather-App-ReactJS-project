import React from 'react'
import './form.css'


const FormComponent = (props) => {
    return (
        <div className='container' id="search">
            <h2 className='border-bottom border-warning text-center py-3 mt-4' style={{ color: 'rgb(255,255,255)' }}> SEARCH WEATHER</h2>

            <form onSubmit={props.loadweather} className='mt-4 mb-2 py-md-5 border rounded-pill'>
                <div className='row'>
                    <div className='col-12 col-md-3 my-2 my-md-0'>
                        <input type="text" name="city" className='form-control' placeholder="Enter City" />
                    </div>
                    <div className='col-12 col-md-3 my-2 my-md-0'>
                        <input type="text" name="country" className='form-control' placeholder="Enter Country" />
                    </div>
                    <div className='col-12 col-md-3 text-center text-md-left'>
                        <button className='btn btn-warning my-3 my-md-0 '>Get Weather <i className='fas fa-search ps-2'></i> </button>
                    </div>
                </div>
            </form>
            <div>
                {props.error ? error() : null}
            </div>
        </div>
    )
};

/*When the user doesn't enter any input this function is invoked: */
function error() {
    return (
        <div className="alert alert-danger m-3">
            Please enter city and country ;
        </div>
        /*Aliter Method: using javascript alert:
          <div>
              {alert("Please enter City and Country")} ;
          </div> */

    );
}

export default FormComponent;