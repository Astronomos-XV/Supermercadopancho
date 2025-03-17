<script>
    import { fade } from "svelte/transition";
    export let products;
    export let onEdit;
    export let onDelete;
</script>

<div class="table-container">
    <table class="product-table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {#each products as product (product.id)}
                <tr transition:fade>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>{product.stock}</td>
                    <td class="actions">
                        <button
                            on:click={() => onEdit(product)}
                            class="edit-btn">✏️</button
                        >
                        <button
                            on:click={() => onDelete(product.id)}
                            class="delete-btn">🗑️</button
                        >
                    </td>
                </tr>
            {:else}
                <tr>
                    <td colspan="5" class="empty-state"
                        >No hay productos registrados</td
                    >
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .table-container {
        overflow-x: auto;
        margin: 2rem 0;
        background: rgb(255, 255, 255);
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }

    .product-table {
        width: 100%;
        border-collapse: collapse;
    }

    th,
    td {
        padding: 1rem;
        text-align: left;
        border-bottom: 1px solid #e2e8f0;
        color: #000000;
    }

    th {
        background-color: #ffffff;
        font-weight: 600;
        color: #000000;
    }

    .actions {
        display: flex;
        gap: 0.5rem;
    }

    button {
        padding: 0.5rem;
        border: none;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .edit-btn {
        background-color: #f6e05e;
        color: #975a16;
    }

    .edit-btn:hover {
        background-color: #ecc94b;
    }

    .delete-btn {
        background-color: #fc8181;
        color: #9b2c2c;
    }

    .delete-btn:hover {
        background-color: #f56565;
    }

    .empty-state {
        text-align: center;
        padding: 2rem;
        color: #718096;
    }
</style>
