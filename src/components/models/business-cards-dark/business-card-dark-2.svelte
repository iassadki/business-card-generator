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
    let company = localStorage.getItem("company")
        ? localStorage.getItem("company")
        : "Company";

    $: if (form) {
        document
            .getElementById("carteForm")
            .addEventListener("change", function () {
                localStorage.setItem("civility", civility);
                localStorage.setItem("name", name);
                localStorage.setItem("firstname", firstname);
                localStorage.setItem("email", email);
                localStorage.setItem("phone", phone);
                localStorage.setItem("adress", adress);
                localStorage.setItem("job", job);
                localStorage.setItem("company", company);
            });
    }

    import html2pdf from "html2pdf.js";

    // html to pdf function
    function generatePDF() {
        let cards = document.getElementById("cards");

        let opt = {
            margin: 1,
            filename: "business-card.pdf",
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

<h3>Business Card Dark 2</h3>
<div class="container">
    <div id="cards">
        <div class="card-front" id="card-front">
            <div class="card-header">
                <p id="company">{company}</p>
            </div>
            <div class="card-body">
                <div class="informations">
                    <p id="civility">{civility}</p>
                    <p id="firstnamename">{firstname} {name}</p>
                </div>
                <div class="informations">
                    <img alt="job" src="./src/assets/dark/case.png" />
                    <p id="job">{job}</p>
                </div>
                <div class="informations">
                    <img alt="email" src="./src/assets/dark/enveloppe.png" />
                    <p id="email">{email}</p>
                </div>
                <div class="informations">
                    <img alt="adress" src="./src/assets/dark/location.png" />
                    <p id="adress">{adress}</p>
                </div>
                <div class="informations">
                    <img alt="phone" src="./src/assets/dark/telephone.png" />
                    <p id="phone">{phone}</p>
                </div>
            </div>
        </div>
        <div class="card-back" id="card-back">
            <div class="card-header">
                <p id="company">{company}</p>
            </div>
        </div>
    </div>

    <div class="form-container">
        <form bind:this={form} id="carteForm">
            <label for="civility">Civility</label>
            <select
                bind:value={civility}
                id="civility"
                name="civility"
                required
            >
                <option value="Mr">Mr</option>
                <option value="Mme">Mme</option>
                <option value="Me">Me</option>
                <option value="Dr">Dr</option>
            </select>

            <label for="name">Name</label>
            <input
                type="text"
                bind:value={name}
                id="name"
                name="name"
                required
                maxlength="25"
            />

            <label for="firstname">Firstname</label>
            <input
                type="text"
                bind:value={firstname}
                id="firstname"
                name="firstname"
                required
                maxlength="25"
            />

            <label for="email">Email</label>
            <input
                type="email"
                bind:value={email}
                id="email"
                name="email"
                required
                maxlength="30"
            />

            <label for="phone">Phone</label>
            <input
                type="text"
                bind:value={phone}
                id="phone"
                name="phone"
                required
                maxlength="14"
            />

            <label for="adress">Adress</label>
            <input
                type="text"
                bind:value={adress}
                id="adress"
                name="adress"
                required
            />

            <label for="job">Job</label>
            <input
                type="text"
                bind:value={job}
                id="job"
                name="job"
                required
                maxlength="35"
            />

            <label for="company">Company</label>
            <input
                type="text"
                bind:value={company}
                id="company"
                name="company"
                required
                maxlength="30"
            />
        </form>

        <button type="submit" class="btn btn-primary" on:click={generatePDF}
            >Generate Card</button
        >
    </div>
</div>

<style>
    .informations {
        display: flex;
        align-items: center;
    }

    .informations img {
        width: 20px;
        height: 20px;
        margin: 10px 10px 10px 10px;
    }

    .informations p {
        margin: 10px 10px 10px 15px;
    }

    .card-front .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 70px;
    }

    .card-front .card-body {
        align-content: center;
        flex-wrap: wrap;
        margin-left: 60px;
        margin-bottom: 30px;
    }

    .card-front {
        background-color: #000;
        font-size: 15px;
        border-radius: 5px;
        color: #fff;
        padding: 1em;
        margin: 1em;
        width: 502px;
        height: 300px;
        border: solid 2px #000;
    }

    .card-back {
        background-color: #000;
        border-radius: 5px;
        color: #fff;
        padding: 1em;
        margin: 1em;
        width: 500px;
        height: 300px;
        border: solid 2px #000;
    }

    .card-back .card-header {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 30px;
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 30px;
    }

    #cards {
        width: 500px;
    }

    #carteForm label,
    #carteForm input {
        display: block;
        margin-bottom: 10px;
    }

    #carteForm input[type="text"],
    #carteForm input[type="email"] {
        width: 95%;
        padding: 10px;
    }

    #carteForm #civility {
        width: 99%;
        padding: 10px;
        margin-bottom: 10px;
    }

    .form-container {
        width: 500px;
        padding: 20px;
        background-color: #808080;
        border: solid 2px #000;
        border-radius: 30px;
        margin-top: 15px;
        margin-left: 100px;
    }

    .btn {
        width: 100%;
        margin-top: 20px;
        background-color: #000;
        color: #fff;
    }
</style>
