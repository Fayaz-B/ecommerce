import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({rating, text, color}) => {
    return (
        <div className='ratings'>
            <span>
                <i  
                    style={{color}}
                    className={
                        rating >= 1 
                            ? 'fas fa-star'
                            : rating >= .5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                ></i>

                <i
                    style={{color}}
                    className={
                        rating >= 2 
                            ? 'fas fa-star'
                            : rating >= 1.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                ></i>

                <i
                    style={{color}}
                    className={
                        rating >= 3 
                            ? 'fas fa-star'
                            : rating >= 2.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                ></i>

                <i
                    style={{color}}
                    className={
                        rating >= 4 
                            ? 'fas fa-star'
                            : rating >= 3.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                ></i>

                <i
                    style={{color}}
                    className={
                        rating >= 5 
                            ? 'fas fa-star'
                            : rating >= 4.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                    }
                ></i>
            </span>

            <span>
                {text && text}
            </span>
        </div>
    )
}

Rating.defaultProps = {
    color: '#FFDF00'
}

Rating.propTypes = {
    rating: PropTypes.number,
    text: PropTypes.string,
    color: PropTypes.string
}
export default Rating
