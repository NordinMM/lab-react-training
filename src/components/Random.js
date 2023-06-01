import './Random.css';

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);    
}

export default function Random ({min, max}){
   const randomValue = randomIntFromInterval(min, max)
   return (
        <p className='rO'>
            Random value between {min} and {max}= {randomValue}
            
        </p>
    )
}