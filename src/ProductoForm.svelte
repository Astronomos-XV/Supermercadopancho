<script>
    import { createEventDispatcher } from "svelte";
    export let product = {};
    const dispatch = createEventDispatcher();

    const handleSubmit = () => {
        if (!product.name || !product.price) return;
        dispatch("save", product);
        dispatch("close");
    };
</script>

<div class="form-container">
    <h2>{product.id ? "Editar Producto" : "Nuevo Producto"}</h2>

    <form on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
            <label for="name">Nombre:</label>
            <input
                type="text"
                id="name"
                bind:value={product.name}
                class="input-field"
                required
            />
        </div>

        <div class="form-group">
            <label for="price">Precio:</label>
            <input
                type="number"
                id="price"
                bind:value={product.price}
                step="0.01"
                class="input-field"
                required
            />
        </div>

        <div class="form-group">
            <label for="stock">Stock:</label>
            <input
                type="number"
                id="stock"
                bind:value={product.stock}
                class="input-field"
            />
        </div>

        <div class="form-group">
            <label for="description">Descripción:</label>
            <textarea
                id="description"
                bind:value={product.description}
                class="input-field textarea"
            />
        </div>

        <div class="button-group">
            <button
                type="button"
                class="btn secondary"
                on:click={() => dispatch("close")}
            >
                Cancelar
            </button>
            <button type="submit" class="btn primary">
                {product.id ? "Guardar Cambios" : "Crear Producto"}
            </button>
        </div>
    </form>
</div>

<style>
    h2 {
        color: black;
    }
    .form-container {
        background: #ffffff;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 500px;
        margin: 1rem auto;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: #000000;
    }

    .input-field {
        width: auto;
        padding: 0.75rem;
        border: 1px solid #000000;
        border-radius: 6px;
        transition: border-color 0.3s ease;
        background-color: rgb(255, 255, 255);
        color: #000000;
    }

    .input-field:focus {
        outline: none;
        border-color: #4299e1;
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
    }

    .textarea {
        min-height: 100px;
        resize: vertical;
    }

    .button-group {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        justify-content: flex-end;
    }

    .btn {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
    }

    .primary {
        background-color: #4299e1;
        color: rgb(255, 255, 255);
    }

    .primary:hover {
        background-color: #3182ce;
    }

    .secondary {
        background-color: #e2e8f0;
        color: #2d3748;
    }

    .secondary:hover {
        background-color: #cbd5e0;
    }
</style>
