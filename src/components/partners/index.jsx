import React from 'react'
import './styles.css';
import Vuna from './vuna.png';

const Partners = () => {
    return (
        <div className="part">
        
        <div className="main">
            <h2>Our partners & how we collaborate</h2>
            <p>Thuso is only as strong as its Partners. 
            Aligning with like-minded individuals and 
            incubating teams that share our vision of a
             sustainable and financially strong South Africa.
             
            </p>

            <button>VIEW ALL</button>
            
                <h1> Vuna Partners</h1>
               
                
            
        </div>
        <div className="vuna">
                <img src={Vuna} alt="vuna" />;
                </div>
            
        </div>
    )
}

export default Partners;
