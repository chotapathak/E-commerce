import React, {useState} from "react";
import {client, urlFor} from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components';

const ProductDetails = ({product , products}) => {
  // console.log(product)
  const {image, name, details, price} = product;
  const [index, setIndex] = useState(0);

  return (
    <div>
    <div className="product-detail-container">
      <div className="Imge-container">
        <img src={urlFor(image && image[index])} className='product-detail-image' />
      </div>
      <div className='small-images-container'>
      {image?.map((item, i) => (
        <img
        key={1}
        src={urlFor(item)}
        className={i == index ? 'small-image selected-image' : 'small-image'}
        onMouseEnter={() => setIndex(i)}
        />
      ))}
    </div>
    </div>
    </div>
  );
};


// function to get static path
export const getStaticPaths = async () => {

    const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  // queried the product
  const products = await client.fetch(query);
  // mapping product path to product slug
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));
  // returns path and fallback function
  return {
    paths,
    fallback: 'blocking'
  }
}


// function ot generate page at StaticSide
export const getStaticProps = async ({params: { slug } }) => {

  const query = `*[_type == "product"  && slug.current == '${slug}'][0]`;
  const productsQuery =  '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);


  return {
    props: {products, product}
  }
}




export default ProductDetails;
