<script>

  let form;
  let civility = localStorage.getItem("civility") ? localStorage.getItem("civility") : "Civility";
  let name = localStorage.getItem("name") ? localStorage.getItem("name") : "Name";
  let prenom = localStorage.getItem("prenom") ? localStorage.getItem("prenom") : "Firstname";
  let email = localStorage.getItem("email")  ? localStorage.getItem("email") : "Email";
  let numero = localStorage.getItem("numero") ? localStorage.getItem("numero") : "Phone";
  let adresse = localStorage.getItem("adresse") ? localStorage.getItem("adresse") : "Adress";
  let profession = localStorage.getItem("profession") ? localStorage.getItem("profession") : "Job";
  let company = localStorage.getItem("societe") ? localStorage.getItem("societe") : "Company";

  $: if(form){
    document.getElementById("carteForm").addEventListener("change", function () {
    localStorage.setItem("name", name);
    localStorage.setItem("prenom", prenom);
    localStorage.setItem("email", email);
    localStorage.setItem("numero", numero);
    localStorage.setItem("adresse", adresse);
    localStorage.setItem("profession", profession);
    localStorage.setItem("societe", company);
  })
};

    import html2pdf from "html2pdf.js";
    import Test from "../../form/test.svelte";

    let divContent = "";

    // onMount(() => {
    //     // Ne pas générer le PDF lors du montage du composant
    //     // Le PDF sera généré uniquement lors du clic sur le bouton "Générer CARTE"
    // });

    // // Recuperer le texte de la div
    // function getDivContent1() {
    //     divContent = document.getElementById("card").innerText;
    // }

    // function generatePDF1() {
    //     getDivContent1();
    //     const pdf = new jsPDF();
    //     pdf.text(divContent, 10, 10);
    //     pdf.save("document.pdf");
    // }

    // // Recuperer le contenu de la div avec les styles
    // function getDivContent2() {
    //     const card = document.getElementById("card");
    //     const styles = window.getComputedStyle(card);

    //     const tempDiv = document.createElement("div");
    //     tempDiv.innerHTML = divContent;
    //     tempDiv.style.cssText = styles.cssText;

    //     divContent = tempDiv.outerHTML;
    // }

    // function generatePDF2() {
    //     getDivContent2();
    //     const pdf = new jsPDF();
    //     pdf.html(divContent, {
    //         callback: function (pdf) {
    //             pdf.save("document.pdf");
    //         },
    //     });
    // }

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
            <p id="company">{company}</p>
            <h2 id="civility" contenteditable="true">{civility}</h2>
            <h2 id="firstname" contenteditable="true">{prenom}</h2>
            <h2 id="name" contenteditable="true">{name}</h2>
        </div>
        <div class="card-body">
            <p id="job" contenteditable="true">
                <i class="fas fa-briefcase"></i>
                {profession}
            </p>
            <p id="email" contenteditable="true">
                <i class="fas fa-envelope"></i>
                {email}
            </p>
            <p id="adress">
                <i class="fas fa-map-marker-alt"></i>
                {adresse}
            </p>
            <p id="phone">
                <i class="fas fa-phone"></i>
                {numero}
            </p>
        </div>
    </div>
    <div class="card-back" id="card-back">
        <div class="card-header">
            <p id="company">{company}</p>
        </div>
    </div>
</div>

<form bind:this={form} id="carteForm">
    <label for="nom">Nom:</label>
    <input type="text" bind:value={name} id="nom" name="nom" required >
  
    <label for="prenom">Prénom:</label>
    <input type="text" bind:value={prenom} id="prenom" name="prenom" required>
  
    <label for="email">Email:</label>
    <input type="email" bind:value={email} id="email" name="email" required>
  
    <label for="numero">Numero:</label>
    <input type="text" bind:value={numero} id="numero" name="numero" required>
  
    <label for="adresse">Adresse:</label>
    <input type="text" bind:value={adresse} id="adresse" name="adresse" required>
  
    <label for="profession">Profession:</label>
    <input type="text" bind:value={profession} id="profession" name="profession" required>
  
    <label for="societe">Société:</label>
    <input type="text" bind:value={company} id="societe" name="societe" required>
</form>



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
