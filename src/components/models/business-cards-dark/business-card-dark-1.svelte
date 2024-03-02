<script>
    export let civility = "";
    export let logo = "Logo";
    export let firstname = "Firstname";
    export let name = "Name";
    export let adress = "Adress";
    export let job = "Job";
    export let phone = "Phone";
</script>

<div class="card">
    <div class="card-header">
        <p>{logo}</p>
        <h2>{civility} {firstname} {name}</h2>
    </div>
    <div class="card-body">
        <p>{adress}</p>
        <p>{job}</p>
        <p>{phone}</p>
    </div>
</div>

<style>
    .card {
        background-color: #000;
        border-radius: 5px;
        color: #FFF;
        padding: 1em;
        margin: 1em;
        width: 500px;
    }
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .card-body {
        padding: 1em;
    }
</style>
