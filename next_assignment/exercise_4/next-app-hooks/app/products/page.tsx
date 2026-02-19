"use client"
import { useReducer, useEffect, useContext, useState } from "react"
import { LoaderContext } from "../context/LoaderContext"
import styles from "./Products.module.css"

type Product = {
    id: number
    title: string
}

type State = {
    products: Product[]
}

type Action =
    | { type: "GET_PRODUCTS"; payload: Product[] }
    | { type: "ADD_PRODUCT"; payload: Product }
    | { type: "DELETE_PRODUCT"; payload: number }

const initialState: State = {
    products: []
}

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload }

        case "ADD_PRODUCT":
            return { ...state, products: [...state.products, action.payload] }

        case "DELETE_PRODUCT":
            return {
                ...state,
                products: state.products.filter(p => p.id !== action.payload)
            }

        default:
            return state
    }
}

export default function ProductsPage() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { setLoading } = useContext(LoaderContext)
    const [productTitle, setProductTitle] = useState<string>("")

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true)
            const res = await fetch("https://dummyjson.com/products?limit=5")
            const data = await res.json()
            dispatch({ type: "GET_PRODUCTS", payload: data.products })
            setLoading(false)
        }
        fetchProducts()
    }, [setLoading])

    const addProduct = () => {
        if (!productTitle.trim()) return

        const newProduct: Product = {
            id: Date.now(),
            title: productTitle
        }

        dispatch({ type: "ADD_PRODUCT", payload: newProduct })
        setProductTitle("")
    }

    return (
        <div className={styles.container}>
            <div className={styles.mainCard}>
                <h2 className={styles.title}>Products</h2>

                <div className={styles.inputSection}>
                    <input
                        className={styles.input}
                        type="text"
                        value={productTitle}
                        onChange={(e) => setProductTitle(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") addProduct()
                        }}
                        placeholder="Enter product name"
                    />

                    <button
                        onClick={addProduct}
                        className={styles.addButton}
                    >
                        Add
                    </button>
                </div>

                {state.products.map(product => (
                    <div key={product.id} className={styles.card}>
                        <span>{product.title}</span>

                        <button
                            onClick={() =>
                                dispatch({ type: "DELETE_PRODUCT", payload: product.id })
                            }
                            className={styles.deleteButton}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}