import React from 'react';



function ImageComponent(props) {
     console.log("callImage value:"+props.loadimage);
  return (
    <div
      style={{
        backgroundColor: props.loadimage? 'blue':'red',
      }}
    > lorem ipsum
    </div>
  );
}



/*
function ImageCompo(range){
    return(<div>
                <h1>Image component</h1>
                  {displayImage(330)}
          </div>
        
    )
    
}

function displayImage(range){
    switch(true){
        case (range>=1&&range<=100): return(<div>
                                             <h1>hellooo</h1>
                                             <h5>fist case</h5>
                                            </div>) 
                                     break;
        case (range>=101&&range<=200):document.getElementsById('root').style.backgroundImage  = "url('https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg');
                                      break;
        case (range>=201&&range<=300):showImage('./images/cycle2.jpg', 500, 500, 'cycle');
                                      break; 
        case (range>=301&&range<=400):return( <div className='image'>hi </div> );
                                      break;                              
        default:showImage('./images/mike1.jpg', 500, 500, 'mike');
                  <h1> This is the default case</h1>
      
                                    break;                          
        }
}

*/
       /*Method for storing/fetching image: */ /*
function showImage(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
} */

export default ImageComponent;  