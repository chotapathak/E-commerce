import React from "react";
import {client, urlFor} from '../../lib/client'


const ProductDetails = ({product , products}) => {
  const {image, name, details, price} = product;
  return (
    <div className="product-detail-container">
      <div className="Imge-container">
        <img src={urlFor(image && image[0])} />
      </div>
    </div>
  );
};

export default ProductDetails;


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
