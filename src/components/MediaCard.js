import React from 'react'
import imageUrl from '../components/Assets/img.jpg'


export default function MediaCard(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <br></br>
        <p>{props.body}</p>
        <br></br>
        <img src={imageUrl} alt="Hamouda">{props.imageUrl}</img>
        </div>
    );
}




// class MediaCard extends React.Component {
//     render() {
        
//         return (
//             <div>
//                 <h2> {this.props.title}</h2>
//         <p>{this.props.body}</p>
//         <img src={this.props.imageUrl}/>
//         {/* <img >image{this.props.image}</img> */}
//             </div>
        
//         )
//     }
// }



// function hello(props) {
//     return(
//     <h1>hello {props.name}</h1>
//     )
// }
