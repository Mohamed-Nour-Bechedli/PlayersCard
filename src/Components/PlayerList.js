import Player from './Player.js';
import players from '../players.js';

const PLayerList = () => {
    return(
        <>
            {players.map( (player, index) =>(
                 <Player {...player} key={index} />
            ))}


        </>
    );
   
}

export default PLayerList;