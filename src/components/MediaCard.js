import React from 'react'
import imageUrl from '../components/Assets/img.jpg'

class MediaCard extends React.Component {
    render() {
        
        return (
            <div>
                <h2> {this.props.fullName}</h2>
                <h3>{this.props.profession}</h3>
        <p>{this.props.Bio}</p>
        <img src={imageUrl} alt="Hamouda">{this.props.imageUrl}</img>
            </div>
        
        )
    }
}







// function MediaCard(props) {
//     return (
//         <div>
//             <h2>{props.fullName}</h2>
//             <br></br>
//         <p><strong>{props.Bio}</strong></p>
//         <br></br>
//     <p>{props.profession}</p>
//         <img src={imageUrl} alt="Hamouda">{props.imageUrl}</img>
//         </div>
//     );
// }

export default MediaCard;


