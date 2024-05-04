import { revalidatePath, revalidateTag } from "next/cache";
import Image from "next/image";
import { off } from "process";

export interface Product{
  id?:number,
  product:string,
  price:string
}

export default async function Home() {
  
  const res = await fetch('https://66363e52415f4e1a5e26bf72.mockapi.io/product',{
   cache:'no-cache',
   next:{
    tags:['product']
   }

  })
  const products:Product[] = await res.json();

  const addProductToDatabase = async (e:FormData) =>{
    "use server"
    const product = e.get("product")?.toString;
    const price = e.get("price")?.toString;
    if(!product || price ) return;
    const newProduct: Product = {
      product:`${product}`,
      price:`${price}`
    }
await fetch('https://66363e52415f4e1a5e26bf72.mockapi.io/product',{
  method:'POST',
  body:JSON.stringify(newProduct),
  headers:{
    'Content-Type':'application/json'
  }

})
revalidateTag('product')
  }


  return (
    <main className="">
     <h1 className="text-3xl font-bold text-center">Products WareHouse</h1>
     <form action={addProductToDatabase} className="flex flex-col gap-5 max-w-xl mx-auto p-5">
      <input name="product" className="border border-gray-300 p-2 rounded-md"
      placeholder="Enter Product Name"
      />
      <input name="price" className="border border-gray-300 p-2 rounded-md" placeholder="Enter Product Price"/>
      <button className="border bg-blue-500 text-white p-2 rounded-md">Add Product</button>
     </form>
     <h2 className="font-bold p-5">List of Products</h2>
     <div className="flex flex-wrap gap-5">
      {
        products.map((product)=>(
          <div key={product.id} className="p-5 shadow">
            <p>{product.product}</p>
            <p>{product.price}</p>

          </div>
        ))
      }
     </div>
    </main>
  );
}
