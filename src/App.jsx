import { useEffect, useState } from "react";

async function fetchProducts() {
    const response = await fetch("products.json");
    return response.json();
}
export default function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await fetchProducts();
            setProducts(data);
        })();
    }, []);
    return (
        <>
            <header>
                <h1>The Can Store</h1>
            </header>
            <div>
                <aside>
                    <form>
                        <div>
                            <label htmlFor="category">Choose a category:</label>
                            <select id="category">
                                <option>All</option>
                                <option>Vegetables</option>
                                <option>Meat</option>
                                <option>Soup</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="searchTerm">Enter search term:</label>
                            <input type="text" id="searchTerm" placeholder="e.g. beans" />
                        </div>
                        <div>
                            <button>Filter results</button>
                        </div>
                    </form>
                </aside>
                <main>
                    {products.map((product) => {
                        return (
                            <section class={product.type}>
                                <h2>{product.name}</h2>
                                <p>{'$' + product.price}</p>
                                <img key={product} src={'image/' + product.image} alt={product.name} />
                            </section>
                        );
                    })}
                </main>
            </div>
            <footer>
                <p>All icons found at the Noun Project:</p>
                <ul>
                    <li>
                        Bean can icon by{" "}
                        <a href="https://thenounproject.com/yalanis/">Yazmin Alanis</a>
                    </li>
                    <li>
                        Vegetable icon by{" "}
                        <a href="https://thenounproject.com/skatakila/">Ricardo Moreira</a>
                    </li>
                    <li>
                        Soup icon by{" "}
                        <a href="https://thenounproject.com/ArtZ91/">Arthur Shlain</a>
                    </li>
                    <li>
                        Meat Chunk icon by{" "}
                        <a href="https://thenounproject.com/smashicons/">Oliviu Stoian</a>.
                    </li>
                </ul>
            </footer>
        </>
    );
}