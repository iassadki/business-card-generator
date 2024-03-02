<script>
    import jsPDF from 'jspdf';
    import BusinessCardDark1 from '../models/business-cards-dark/business-card-dark-1.svelte';
    // import BusinessCardDark_1 from '../models/business-cards-dark/business-card-dark-1.svelte';

    function generatePDF() {
        const doc = new jsPDF();
        const card = document.getElementById('card');
        doc.html(card, 10, 10);
        
        doc.save('a4.pdf');        
    }
</script>

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
<!-- formulaire -->
<form>
    <div class="form-group">
        <label for="civility">Civilité</label>
        <select class="form-control" id="civility">
            <option value="Monsieur">Monsieur</option>
            <option value="Madame">Madame</option>
        </select>
    </div>
    <div class="form-group">
        <label for="logo">Logo</label>
        <input type="text" class="form-control" id="logo" placeholder="Logo">
    </div>
    <div class="form-group">
        <label for="firstname">Firstname</label>
        <input type="text" class="form-control" id="firstname" placeholder="Firstname">
    </div>
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Name">
    </div>
    <div class="form-group">
        <label for="adress">Adress</label>
        <input type="text" class="form-control" id="adress" placeholder="Adress">
    </div>
    <div class="form-group">
        <label for="job">Job</label>
        <input type="text" class="form-control" id="job" placeholder="Job">
    </div>
    <div class="form-group">
        <label for="phone">Phone</label>
        <input type="text" class="form-control" id="phone" placeholder="Phone">
    </div>
    <button type="submit" class="btn btn-primary" on:click={generatePDF}>Générer PDF</button>
</form>