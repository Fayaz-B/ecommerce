import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'


const Product = ({product}) => {


    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img variant='top' src={product.image}>
                </Card.Img>
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='h6' className='text-primary'>
                        {product.name}
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <div className='my-3'>
                        <Rating rating={product.rating} text={`${product.numReviews} reviews`}/>
                    </div>
                </Card.Text>

                <Card.Text as='h4'>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
