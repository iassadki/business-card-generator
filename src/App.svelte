<script>
  import BusinessCardDark1 from "./components/models/business-cards-dark/business-card-dark-1.svelte";
  import BusinessCardDark2 from "./components/models/business-cards-dark/business-card-dark-2.svelte";
  import BusinessCardLight1 from "./components/models/business-cards-light/business-card-light-1.svelte";
  import BusinessCardLight2 from "./components/models/business-cards-light/business-card-light-2.svelte";
  import Form from "./components/form/form.svelte";
</script>

<main>
  <div class="card">
    <BusinessCardDark1 />
    <BusinessCardDark2 />
    <BusinessCardLight1 />
    <BusinessCardLight2 />
    <Form />
  </div>
</main>

<style>
  main {
    background-color: grey;
  }
</style>
