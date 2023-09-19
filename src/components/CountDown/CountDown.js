import React from 'react'
import './CountDown.css'

var countDownDate= new Date("Dec 4, 2023 09:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = '00';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
    }
},1000);


const CountDown = () => {
  return (
    <div className='container'>
        <div className='content'>
            <div className='pizza'>Countdown</div>
            <div className='countdown'>
                <div>
                    <p id='days'>00</p>
                    <span>Days</span>    
                </div>
                <div>
                    <p id='hours'>00</p>
                    <span>Hours</span>
                </div>
                <div>
                    <p id='minutes'>00</p>
                    <span>Minutes</span>
                </div>
                <div>
                    <p id='seconds'>00</p>
                    <span>Seconds</span>
                </div>

            </div>
        </div>
        <div className='rsvp_section'>
            <div className='date'>December 4th</div>
            <div className='location'>San Francisco</div>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className='rsvp_button'>RSVP</a>
        </div>
    </div>


  )
}

export default CountDown