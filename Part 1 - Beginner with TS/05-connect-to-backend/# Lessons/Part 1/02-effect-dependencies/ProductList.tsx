import { useEffect, useState } from 'react'

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([])

  // # Warning: Maximum update depth exceeded -> no dep list
  // useEffect(() => {
  //   console.log('fetching products')
  //   setProducts(['product 1', 'product 2', 'product 3'])
  // })

  // # Add dependencies list
  useEffect(() => {
    console.log(`Fetching products for category ${category}`)
    setProducts(['product 1', 'product 2', 'product 3'])
  }, [category]) // fetching products when category changes

  return (
    <div>
      {products.map((product) => (
        <div key={product}>{product}</div>
      ))}
    </div>
  )
}

export default ProductList
