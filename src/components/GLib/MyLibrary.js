import React from "react";

function MyLibrary({ props }) {
    return (
        <div className="cards">
            <h1> My Bookshelf: </h1>
            {props.map((prop) => 
                <div className="card" key={prop.id}>
                    <img className="card-image" src={prop.volumeInfo.imageLinks.smallThumbnail} alt="..."></img>
                    <div className="container">
                        <h2 className="card-title"><b>Title: {prop.volumeInfo.title}</b></h2>
                        <h3 className="card-subtitle">Authors: {prop.volumeInfo.authors}</h3>
                        <p>Publisher:{prop.volumeInfo.publisher}</p>                  
                        <p>PublishedDate:{prop.volumeInfo.publishedDate}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MyLibrary;