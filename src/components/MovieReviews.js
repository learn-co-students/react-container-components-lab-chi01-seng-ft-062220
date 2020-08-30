import React from 'react';

const MovieReviews = (props) =>{
    console.log(props)
    return (
        <div className='review-list'>
            <form onSubmit={props.handleSubmit}>
                <input type='text' name='searchTerm' placeholder='Enter film title here'/>
                <input type='submit' value="Submit"/>
            </form>
                {props.reviews.map((film) =>{
                    return (
                        <div className='review'>
                            <h3>Film: {film.display_title}</h3>
                            <h5>Headline: {film.headline}</h5>
                            <h5>Critic: {film.byline}</h5>
                            <h5><a href={film.link.url}>Full Review Here</a></h5>
                            <h5>Rating: {film.mpaa_rating}</h5>
                        </div>
                    )
                })}
        </div>
    )
}

export default MovieReviews
