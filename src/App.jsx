import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
const [darkMode, setDarkMode] = useState(false)
  // TODO: Implement state for cart management
const [cartItems, setCartItems] = useState([])

  // TODO: Implement state for category filtering
  const [selectedCategory, setSelectedCategory] = useState('all')

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  
  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }


  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} 
      toggleDarkMode={toggleDarkMode} />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList selectedCategory={selectedCategory} onAddToCart={addToCart} />

      {/* TODO: Implement and render Cart component */}
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
