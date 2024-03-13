<script>
    let form;
    let civility = localStorage.getItem("civility")
        ? localStorage.getItem("civility")
        : "Civility";
    let name = localStorage.getItem("name")
        ? localStorage.getItem("name")
        : "Name";
    let firstname = localStorage.getItem("firstname")
        ? localStorage.getItem("firstname")
        : "Firstname";
    let email = localStorage.getItem("email")
        ? localStorage.getItem("email")
        : "Email";
    let phone = localStorage.getItem("phone")
        ? localStorage.getItem("phone")
        : "Phone";
    let adress = localStorage.getItem("adress")
        ? localStorage.getItem("adress")
        : "Adress";
    let job = localStorage.getItem("job") ? localStorage.getItem("job") : "Job";
    let company = localStorage.getItem("societe")
        ? localStorage.getItem("societe")
        : "Company";

    $: if (form) {
        document
            .getElementById("carteForm")
            .addEventListener("change", function () {
                localStorage.setItem("name", name);
                localStorage.setItem("firstname", firstname);
                localStorage.setItem("email", email);
                localStorage.setItem("phone", phone);
                localStorage.setItem("adress", adress);
                localStorage.setItem("job", job);
                localStorage.setItem("societe", company);
            });
    }

    import html2pdf from "html2pdf.js";
    import Test from "../../form/test.svelte";

    let divContent = "";

    // html to pdf function
    function generatePDF3() {
        let cards = document.getElementById("cards");

        let opt = {
            margin: 1,
            filename: "business-card-dark-1.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };

        html2pdf().set(opt).from(cards).save();
    }
</script>

<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>

<h3>Carte modifiable</h3>
<div id="cards">
    <div class="card-front" id="card-front">
        <div class="card-header">
            <p id="company" contenteditable="true">{company}</p>
            <h2 id="civility" contenteditable="true">{civility}</h2>
            <h2 id="firstname" contenteditable="true">{firstname}</h2>
            <h2 id="name" contenteditable="true">{name}</h2>
        </div>
        <div class="card-body">
            <div class="informations">
                <img alt="job" src="./src/assets/dark/case.png" />
                <p id="job" contenteditable="true">
                    {job}
                </p>
            </div>
            <div class="informations">
                <img alt="email" src="./src/assets/dark/enveloppe.png" />
                <p id="email" contenteditable="true">
                    {email}
                </p>
            </div>

            <div class="informations">
                <img alt="adress" src="./src/assets/dark/location.png" />
                <p id="adress" contenteditable="true">
                    {adress}
                </p>
            </div>

            <div class="informations">
                <img alt="phone" src="./src/assets/dark/telephone.png" />
                <p id="phone" contenteditable="true">
                    {phone}
                </p>
            </div>
        </div>
    </div>
    <div class="card-back" id="card-back">
        <div class="card-header">
            <p id="company" contenteditable="true">{company}</p>
        </div>
    </div>
</div>

<form bind:this={form} id="carteForm">
    <label for="nom">Nom:</label>
    <input type="text" bind:value={name} id="nom" name="nom" required />

    <label for="firstname">Prénom:</label>
    <input
        type="text"
        bind:value={firstname}
        id="firstname"
        name="firstname"
        required
    />

    <label for="email">Email:</label>
    <input type="email" bind:value={email} id="email" name="email" required />

    <label for="phone">phone:</label>
    <input type="text" bind:value={phone} id="phone" name="phone" required />

    <label for="adress">adress:</label>
    <input type="text" bind:value={adress} id="adress" name="adress" required />

    <label for="job">job:</label>
    <input type="text" bind:value={job} id="job" name="job" required />

    <label for="societe">Société:</label>
    <input
        type="text"
        bind:value={company}
        id="societe"
        name="societe"
        required
    />
</form>

<button type="submit" class="btn btn-primary" on:click={generatePDF3}
    >Générer CARTE</button
>

<style>
    /* Card Front */
    .card-front .card-header {
        /* display: flex; */
        position: absolute;
        justify-content: space-between;
        margin-top: 30px;
    }

    .card-front #company {
        /* position: absolute; */
        align-items: center;
        /* margin: 10px 10px 10px 220px; */
    }

    .card-front .card-header h2 {
        font-size: 20px;
        display: flex;
        margin-left: 70px;
        /* margin-right: 100px; */
    }

    .card-front {
        background-color: #000;
        border-radius: 5px;
        color: #fff;
        padding: 1em;
        margin: 1em;
        width: 500px;
        height: 300px;
    }

    .card-front .card-body {
        padding: 1em;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 30px;
    }

    .card-front .informations {
        display: flex;
        align-items: center;
        margin-left: 200px;
    }

    .card-front .informations img {
        width: 20px;
        height: 20px;
        margin: 10px 10px 10px 10px;
    }

    .card-front .informations p {
        margin: 5px 10px 8px 10px;
    }

    /* Card Back */
    .card-back {
        background-color: #000;
        border-radius: 5px;
        color: #fff;
        padding: 1em;
        margin: 1em;
        width: 500px;
        height: 300px;
    }

    .card-back .card-header {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 50px 0;
        font-size: 50px;
    }
</style>
