<script>
    import { onMount } from "svelte";
    import jsPDF from "jspdf";
    import BusinessCardDark1 from "../models/business-cards-dark/business-card-dark-1.svelte";

    let divContent = "";

    onMount(() => {
        // Ne pas générer le PDF lors du montage du composant
        // Le PDF sera généré uniquement lors du clic sur le bouton "TEST PDF"
    });

    // Fonction pour générer le PDF lors du clic sur le bouton
    function generatePDF() {
        const pdf = new jsPDF();
        pdf.text(divContent, 10, 10);
        pdf.save("document.pdf");
    }

    // Fonction pour obtenir le contenu de la div
    function getDivContent() {
        divContent = document.getElementById("card").innerText;
        generatePDF(); // Appel à la fonction de génération du PDF après avoir obtenu le contenu de la div
    }
</script>

<!-- <div id="content">
    <h1>Contenu de mon document PDF</h1>
    <p>Ceci est un exemple de contenu à inclure dans le PDF.</p>
</div>

<div class="card">
    <div class="card-header">
        <p>logo</p>
        <h2>name</h2>
    </div>
    <div class="card-body">
        <p>adress</p>
        <p>job</p>
        <p>phone</p>
    </div>
</div> -->
<!-- formulaire -->
<!-- <form>
    <div class="form-group">
        <label for="civility">Civilité</label>
        <select class="form-control" id="civility">
            <option value="Monsieur">Monsieur</option>
            <option value="Madame">Madame</option>
        </select>
    </div>
    <div class="form-group">
        <label for="logo">Logo</label>
        <input type="text" class="form-control" id="logo" placeholder="Logo" />
    </div>
    <div class="form-group">
        <label for="firstname">Firstname</label>
        <input
            type="text"
            class="form-control"
            id="firstname"
            placeholder="Firstname"
        />
    </div>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Name" />
    </div>
    <div class="form-group">
        <label for="adress">Adress</label>
        <input
            type="text"
            class="form-control"
            id="adress"
            placeholder="Adress"
        />
    </div>
    <div class="form-group">
        <label for="job">Job</label>
        <input type="text" class="form-control" id="job" placeholder="Job" />
    </div>
    <div class="form-group">
        <label for="phone">Phone</label>
        <input
            type="text"
            class="form-control"
            id="phone"
            placeholder="Phone"
        />
    </div>
    <button type="submit" class="btn btn-primary" on:click={generatePDF}
        >Générer CARTE</button
    >
</form> -->
