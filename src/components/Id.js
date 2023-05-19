import './Id.css';

export default function Id(props) {
  return (
    
    <div className="IdCard">
      <img
        className="ImgCard"
        src={props.picture}
        alt='profile picture'
      />
      <div className='InfoCard'>
        <p>
          <span style={{"fontWeight" : "bold"}}>First Name:</span>
          {props.firstName}
        </p>
        <p>
          <span style={{"fontWeight" : "bold"}}>Last Name:</span>
          {props.lastName}
        </p>
        <p>
          <span style={{"fontWeight" : "bold"}}>Gender:</span>
          {props.gender}
        </p>
        <p>
          <span style={{"fontWeight" : "bold"}}>Height:</span>
          {props.height/100 + ' m'}
        </p>
        <p>
          <span style={{"fontWeight" : "bold"}}>Birth:</span>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}
