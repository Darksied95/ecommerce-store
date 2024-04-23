import getBillboard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import ProductList from "@/components/product-list"
import Billboard from "@/components/ui/billboard"
import Container from "@/components/ui/container"

const Homepage = async () => {
    const products = await getProducts({ isFeatured: true })
    const billboard = await getBillboard("65c009a231db1fa7d6dd4773")

    return (

        <Container>
            <div className="space-y-10 pb-10">Hello Store</div>
            <Billboard data={billboard} />
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products} />
            </div>
        </Container>
    )
}

export default Homepage