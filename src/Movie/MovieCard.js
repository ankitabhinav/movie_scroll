import React, { useState } from 'react'
import './card.css'

const MovieCard = ({ imageLink, movieName }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <div style={{
            display: 'flex', flexDirection: 'column',
            width: '268px', margin: '10px', height: '288px', cursor: 'pointer'

        }}>

            <div className='zoom'
                style={{
                    display: 'flex', flexDirection: 'row', flex: 1,
                    backgroundImage: `url(${imageLink})`, height: '258px', width: '172px', borderRadius: '10px',
                    marginTop: '20px'
                }}
                onMouseOver={() => setShowDetails(true)}
                onMouseLeave={() => setShowDetails(false)}
            >
                {showDetails &&
                    <div style={{
                        display: 'flex', flex: 1, justifyContent: 'flex-end',
                        flexDirection: 'column',
                        background: 'linear-gradient(rgba(255,0,0,0), rgba(55,71,79,1))',
                        padding: '20px',
                        borderRadius: '10px'

                    }}>
                        <span style={{ color: 'white' }}>{movieName}</span>
                        <span style={{ color: 'white', fontSize: '10px' }}>2hr 30min Action, Adventure</span>
                    </div>}
            </div>

        </div>
    )
}

export default MovieCard;