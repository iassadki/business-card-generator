<script>
  import { onMount } from 'svelte';
  import jsPDF from 'jspdf';

  let divContent = '';

  onMount(() => {
    // Ne pas générer le PDF lors du montage du composant
    // Le PDF sera généré uniquement lors du clic sur le bouton "TEST PDF"
  });

  // Fonction pour générer le PDF lors du clic sur le bouton
  function generatePDF() {
    const pdf = new jsPDF();
    pdf.text(divContent, 10, 10);
    pdf.save('document.pdf');
  }

  // Fonction pour obtenir le contenu de la div
  function getDivContent() {
    divContent = document.getElementById('card').innerText;
    generatePDF(); // Appel à la fonction de génération du PDF après avoir obtenu le contenu de la div
  }
</script>

<div id="content">
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
</div>

<button on:click={getDivContent}>TEST PDF</button>