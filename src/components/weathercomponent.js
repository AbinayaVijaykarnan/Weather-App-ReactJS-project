import React from 'react';


const WeatherComponent = (props) => {
  console.log("ID value:" + props.getId);
  console.log("backgroundimg value:" + props.backgroundimg);

  return (
    <div className='container p-5 my-2 w-50 alignCenter weather'
      style={{
        backgroundImage: props.backgroundimg, color: props.textcolour, border: props.backgroundimg ? '4px solid white' : 'null',
        borderRadius: props.backgroundimg ? '30px' : 'null', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'
      }} >

      <div className='cards container'>
        <h1>
          {/* {props.city},{props.country}*/}
          {props.city}
        </h1>

        <h5 className='py-1 py-md-3'>
          {/* <i className="fas fa-cloud-moon-rain fs-1"></i> */}
          <span >{props.icon}</span>
          <span className='fw-bolder'>{props.description}</span>
        </h5>

        {/* {props.actual_temp}&deg; */}
        {props.actual_temp ? <h1 className='py-1 py-md-2 actualtemp-size'>{props.actual_temp}&deg;</h1> : null}

        {/*To show max and min temperature */}
        {minmaxTemp(props.temp_min, props.temp_max)}



      </div>
    </div>
  )
}

function minmaxTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span className='px-3'>Min:{min}&deg;</span>
        <span className='px-3'>Max:{max}&deg;</span>
      </h3>
    );
  }
}

export default WeatherComponent;