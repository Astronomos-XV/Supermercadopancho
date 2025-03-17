<!--  <script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <div>
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style> -->

<script>
  import { products, saveProduct, deleteProduct } from "./stores.js";
  import ProductForm from "./ProductoForm.svelte";
  import ProductTable from "./ProductoTabla.svelte";
  import { slide } from "svelte/transition";

  let showModal = false;
  let selectedProduct = null;

  const handleEdit = (product) => {
    selectedProduct = product;
    showModal = true;
  };

  const handleDelete = (id) => {
    if (confirm("¿Estás seguro de eliminar este producto?")) {
      deleteProduct(id);
    }
  };

  const handleSave = (e) => {
    saveProduct(e.detail);
    selectedProduct = null;
  };
</script>

<div class="container">
  <h1>SuperPancho Arrechisimo 🛒</h1>

  <button
    on:click={() => {
      selectedProduct = {};
      showModal = true;
    }}
    class="add-button"
  >
    + Nuevo Producto
  </button>

  <ProductTable
    products={$products}
    onEdit={handleEdit}
    onDelete={handleDelete}
  />

  {#if showModal}
    <div class="modal-backdrop" on:click|self={() => (showModal = false)}>
      <div transition:slide>
        <ProductForm
          product={selectedProduct}
          on:save={handleSave}
          on:close={() => (showModal = false)}
        />
      </div>
    </div>
  {/if}
</div>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    color: #91ff00;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .add-button {
    background-color: #48bb78;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s ease;
    margin-bottom: 1rem;
  }

  .add-button:hover {
    background-color: #38a169;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
</style>
