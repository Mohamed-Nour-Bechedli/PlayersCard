import Card from 'react-bootstrap/Card';
import players from "../players.js";

function Player({name,team, nationality, jersyNumber, image}) {
  return (
    <Card style={{ width: '250px',
                   height : '350px', 
                   margin: "10px",
                   border: "1px solid black",
                   borderRadius: "10px",
                   boxShadow: "10px 10px 5px hsla(0, 0%, 60%, 1.00)",
                   backgroundColor: " hsla(0, 4%, 74%, 1.00)",
                   padding: "10px 20px",
                   textAlign: "center", 
                   display: "inline-block" }}>
      <Card.Img style={{maxWidth:"90%",
                        height: "187.55px",
                        borderRadius: "10px"}} 
      variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "hsla(0, 0%, 20%, 1.00)",
          marginBottom:"10px"}}>{name}</Card.Title>
        <Card.Text style={{
          fontFamily: "Arial, sans-serif",
          fontSize: ".8rem",
          fontWeight: "bold",
          color: "hsla(0, 0%, 20%, 1.00)",
          marginBottom:"10px"}}>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality</strong> {nationality} <br />
          <strong>Jersy number:</strong> {jersyNumber}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Player.defaultProps = {
    name : "Unknown Player",
    team : "Unknown Team",
}

export default Player;