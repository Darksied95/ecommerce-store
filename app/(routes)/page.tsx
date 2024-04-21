import getBillboard from "@/actions/get-billboard"
import Billboard from "@/components/ui/billboard"
import Container from "@/components/ui/container"

const Homepage = async () => {
    const billboard = await getBillboard("65c009a231db1fa7d6dd4773")

    return (

        <Container>
            <div className="space-y-10 pb-10">Hello Store</div>
            <Billboard data={billboard} />
        </Container>
    )
}

export default Homepage