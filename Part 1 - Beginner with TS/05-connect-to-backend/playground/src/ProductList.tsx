import { useEffect, useState } from 'react'

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([])

  useEffect(() => {
    console.log(`Fetching products for category ${category}`)
    setProducts(['product 1', 'product 2', 'product 3'])
  }, [category])

  return (
    <div>
      {products.map((product) => (
        <div key={product}>{product}</div>
      ))}
    </div>
  )
}

export default ProductList
