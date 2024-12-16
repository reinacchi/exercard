import Navbar from "@/components/UI/functional/Navbar";

const AddCard: React.FC = () => {
    return (
        <main className="w-full flex flex-col">
            <Navbar />

            <section className="p-[10px] h-full flex flex-col">
                <section className="mb-2 ">
                    <h2 className="text-responsive-md font-semibold">Add Cards</h2>
                    <p className="text-responsive-sm text-light">
                        What do you want to learn?
                    </p>
                </section>
            </section>
        </main>
    )
}

export default AddCard;