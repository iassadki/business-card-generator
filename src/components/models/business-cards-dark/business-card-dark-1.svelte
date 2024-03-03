<script>
    export let civility = "";
    export let company = "Company";
    export let firstname = "Firstname";
    export let name = "Name";
    export let email = "Email";
    export let adress = "Adress";
    export let job = "Job";
    export let phone = "Phone";

    import { onMount } from "svelte";
    import jsPDF from "jspdf";
    import html2pdf from "html2pdf.js";

    let divContent = "";

    onMount(() => {
        // Ne pas générer le PDF lors du montage du composant
        // Le PDF sera généré uniquement lors du clic sur le bouton "Générer CARTE"
    });

    // Recuperer le texte de la div
    function getDivContent1() {
        divContent = document.getElementById("card").innerText;
    }

    function generatePDF1() {
        getDivContent1();
        const pdf = new jsPDF();
        pdf.text(divContent, 10, 10);
        pdf.save("document.pdf");
    }

    // Recuperer le contenu de la div avec les styles
    function getDivContent2() {
        const card = document.getElementById("card");
        const styles = window.getComputedStyle(card);

        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = divContent;
        tempDiv.style.cssText = styles.cssText;

        divContent = tempDiv.outerHTML;
    }

    function generatePDF2() {
        getDivContent2();
        const pdf = new jsPDF();
        pdf.html(divContent, {
            callback: function (pdf) {
                pdf.save("document.pdf");
            },
        });
    }

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
            <p id="job" contenteditable="true">
                <i class="fas fa-briefcase"></i>
                {job}
            </p>
            <p id="email" contenteditable="true">
                <i class="fas fa-envelope"></i>
                {email}
            </p>
            <p id="adress" contenteditable="true">
                <i class="fas fa-map-marker-alt"></i>
                {adress}
            </p>
            <p id="phone" contenteditable="true">
                <i class="fas fa-phone"></i>
                {phone}
            </p>
        </div>
    </div>
    <div class="card-back" id="card-back">
        <div class="card-header">
            <p id="company" contenteditable="true">{company}</p>
        </div>
    </div>
</div>

<button type="submit" class="btn btn-primary" on:click={generatePDF3}
    >Générer CARTE</button
>

<style>
    /* Avant de la carte */
    .card-front {
        background-color: #000;
        border-radius: 5px;
        color: #fff;
        padding: 1em;
        margin: 1em;
        width: 500px;
        height: 300px;
    }
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .card-body {
        padding: 1em;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .card-body p {
        margin: 10px;
        /* faire en sorte que ça soit aligné */
        /* margin-left: 30px; */
    }

    /* Arriere de la carte */
    .card-back {
        background-color: #000;
        border-radius: 5px;
        color: #fff;
        padding: 1em;
        margin: 1em;
        width: 500px;
        height: 300px;
    }
    /* mettre le company au milieu de la carte */
    .card-back .card-header {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 50px 0;
        font-size: 50px;
    }
</style>
