import React, { useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Product = () => {
    const [products, getProducts] = useState([]);
    useEffect(() => {
        //api
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => getProducts(result))
    }, []);
    
const cards = products.map(product => (
    <div className='col-md-3'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130px'}}/>
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
        $: {product.price}
      </Card.Text>
      <Button variant="primary">Add To Cart</Button>
    </Card.Body>
  </Card>
  </div>

))
  return (
    <div>
        <h1>Products</h1>
        <div className="row">
            {cards}
        </div>
    </div>
  )
}

export default Product