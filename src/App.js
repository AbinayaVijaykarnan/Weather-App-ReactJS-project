import React  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {WiThunderstorm,WiHail,WiRain,WiSnow,WiDayFog,WiNightClear,WiCloudy} from "weather-icons-react";
import HeaderComponent from './components/headercomponent';
import FormComponent from './components/formcomponent';
import WeatherComponent from './components/weathercomponent';
import FooterComponent from './components/footercomponent';

/*Key generated from API */
const API_key="7c4509edc237f487d7d6531dfd4d7362"

/*Class Based Component: */
class App extends React.Component{
 constructor(){
   super();
   this.state={
     city:undefined,
     country:undefined,
     icon:undefined,
     actual_temp:undefined,
     temp_max:undefined,
     temp_min:undefined,
     description:undefined,
     getId:undefined,
     backgroundimg:undefined,
     textcolour:undefined,
     error:false
    };

   /*this.getWeather();  /*Method call for testing*/ 

   /*Object is created for Fetching weather conditions and corresponding ID from https://openweathermap.org/weather-conditions 
     and fetching weather icons from https://najens.github.io/weather-icons-react/   :
   */ 
   this.weatherIcon={
     Thunderstorm:<WiThunderstorm className="icons-size" />,
     Drizzle:<WiHail className="icons-size" />,
     Rain:<WiRain className="icons-size" />,
     Snow:<WiSnow className="icons-size" />,
     Atmosphere:<WiDayFog className="icons-size" />,
     Clear:<WiNightClear className="icons-size" />,
     Clouds:<WiCloudy className="icons-size" />
   }
 }


  /*Method created for converting Kelvin to Celsius: */
 calCelsius(temp)
    {  let celsius=Math.floor(temp-273.15);
       return celsius;
    }
  
  /*Method created for displaying icons based on ID in API: */
  get_weatherIcon(icons,rangeId)
  { switch(true){
      case (rangeId>=200 && rangeId<=232): this.setState({icon:this.weatherIcon.Thunderstorm});
                                           break;
      case (rangeId>=300 && rangeId<=321): this.setState({icon:this.weatherIcon.Drizzle});
                                           break;
      case (rangeId>=500 && rangeId<=531): this.setState({icon:this.weatherIcon.Rain});
                                           break;
      case (rangeId>=600 && rangeId<=622): this.setState({icon:this.weatherIcon.Snow});
                                           break;                                   
      case (rangeId>=701 && rangeId<=781): this.setState({icon:this.weatherIcon.Atmosphere});
                                           break;
      case (rangeId=800)                 : this.setState({icon:this.weatherIcon.Clear});
                                           break;
      case (rangeId>=801 && rangeId<=804): this.setState({icon:this.weatherIcon.Cloud});
                                           break;
      default: this.setState({icon:this.weatherIcon.Clouds});
              
       }
  }

  /*Method for getting ID alone */
  get_backgroundImage(rangeId){
          let bgImage=rangeId;
          return bgImage;
  }

 /*Method for different background image - using ternary operator */
  background=(rangeId)=>{
    let backgroundimg=(rangeId>=200 && rangeId<=232)?'url(https://i.pinimg.com/564x/6d/5b/f8/6d5bf8c1474b33e553e8d1e572b28b54.jpg)':
                      (rangeId>=300 && rangeId<=321)?'url(https://i.pinimg.com/564x/7a/5d/87/7a5d87e8d478fb3685049c8ccdfbdb36.jpg)':
                      (rangeId>=500 && rangeId<=531)?'url(https://i.pinimg.com/564x/6c/bb/d9/6cbbd9cd3256c254ca025aff6270849a.jpg)':
                      (rangeId>=600 && rangeId<=622)?'url(https://i.pinimg.com/236x/02/42/90/024290eeec5ee797b9a29c3cd06e2e23.jpg)': 
                      (rangeId>=701 && rangeId<=781)?'url(https://i.pinimg.com/236x/8f/e0/52/8fe052d6e68c62330a3d8dcec2e52fc7.jpg)':
                      (rangeId==800)?'url(https://i.pinimg.com/564x/62/7e/54/627e542c74e2e76a3d1a40b0f71e43ae.jpg)':
                      (rangeId>=801 && rangeId<=804)?'url(https://i.pinimg.com/564x/7f/63/1e/7f631e577ed5e5ffbbce726f8ec03489.jpg)':
                     'url(https://i.pinimg.com/564x/bb/8d/03/bb8d03689b72fc4a6a23571bc8e3cf88.jpg)';
    return backgroundimg;
  }

   /*Method for different textcolor */
  text_color=(rangeId)=>{
    let textcolour=(rangeId>=200 && rangeId<=232)?'rgb(255, 255, 255)':(rangeId>=300 && rangeId<=321)?'	rgb(0, 0, 0)':(rangeId>=500 && rangeId<=531)?'rgb(255, 255, 0)':(rangeId>=600 && rangeId<=622)?'rgb(0, 0, 0)': (rangeId>=701 && rangeId<=781)?'rgb(255, 64, 0)':(rangeId==800)?'rgb(0, 0, 0)':(rangeId>=801 && rangeId<=804)?'rgb(0, 0, 0)':'rgb(255,255, 255)'  ;
    return textcolour;
  }

  /*Method created for Imporing API and updating state:  */
 getWeather= async(e)=>{

      e.preventDefault(); /*Onsubmitting event, it prevents the page reloading*/ 
      const city=e.target.elements.city.value; /*Storing the value from the users input*/ 
      const country=e.target.elements.country.value;

       /*Making API call from OpenWeather website */
   if(city&&country)
    {
       const API_call=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
  
       /*Converting JSON format to javascript object ,we use .json() method*/
       const response=await API_call.json();
       console.log(response);

       this.setState({
           /*city: response.name,
           country:response.sys.country,*/
           city:`${response.name},${response.sys.country}`,
           actual_temp:this.calCelsius(response.main.temp),
           temp_max:this.calCelsius(response.main.temp_max),
           temp_min:this.calCelsius(response.main.temp_min),
           description:response.weather[0].description,
           getId:this.get_backgroundImage(response.weather[0].id),
           backgroundimg:this.background(response.weather[0].id),
           textcolour:this.text_color(response.weather[0].id),
           error:false   /*if this step not used,error alert msg will appear even after user enters some input */
         /*icon:this.weatherIcon.Thunderstorm*/
        });

      this.get_weatherIcon(this.weatherIcon,response.weather[0].id); /*Method call-for displaying icons based on ID, ID is based on users input in city & country */
      
    }
    else
    {
      this.setState({error:true});
      console.log(this.state.error);
    }


    }

 render(){
   return(
          <div >
            <HeaderComponent/>

            <FormComponent loadweather={this.getWeather} error={this.state.error}/>

             <WeatherComponent
             city={this.state.city}
             country={this.state.country}
             icon={this.state.icon}
             actual_temp={this.state.actual_temp}
             temp_max={this.state.temp_max}
             temp_min={this.state.temp_min}
             description={this.state.description}
             getId={this.state.getId}
             backgroundimg={this.state.backgroundimg}
             textcolour={this.state.textcolour}
             > </WeatherComponent>

             <FooterComponent/>

            {/*  <ImageComponent loadimage={this.state  getId}/>
                   <SliderComponent/>
                  <FormComponent/>
            */}
          </div>
         )
   };

}

export default App;

/*Since fetching data from API - for dynamic data...creating class component instead of this functional comp. : 
 function App(){
return(
        <div>
          <WeatherComponent></WeatherComponent>
          
        </div>
      )
    }
    export default App;

*/