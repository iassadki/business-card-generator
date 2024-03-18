<script>
    import BusinessCardDark1 from "./models/business-cards-dark/business-card-dark-1.svelte";
    import BusinessCardDark2 from "./models/business-cards-dark/business-card-dark-2.svelte";
    import BusinessCardLight1 from "./models/business-cards-light/business-card-light-1.svelte";
    import BusinessCardLight2 from "./models/business-cards-light/business-card-light-2.svelte";

    let choix = 0;
</script>

<div class="card">
    <h1>Welcome in Business Card Generator</h1>

    <p>Choose a model</p>

    <input
        type="number"
        bind:value={choix}
        placeholder="Choose a model"
        min="1"
        max="4"
    />

    <select bind:value={choix}>
        <option value={1}>Business Card Dark 1</option>
        <option value={2}>Business Card Dark 2</option>
        <option value={3}>Business Card Light 1</option>
        <option value={4}>Business Card Light 2</option>
    </select>

    {#if choix === 1}
        <BusinessCardDark1 />
    {:else if choix === 2}
        <BusinessCardDark2 />
    {:else if choix === 3}
        <BusinessCardLight1 />
    {:else if choix === 4}
        <BusinessCardLight2 />
    {/if}
</div>
