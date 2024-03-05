<script>
  let form;
  let name;
  let prenom;
  let email;
  let numero;
  let adresse;
  let profession;
  let societe;

  $: if(form){
    document.getElementById("carteForm").addEventListener("change", function () {
    localStorage.setItem("name", name);
    localStorage.setItem("prenom", prenom);
    localStorage.setItem("email", email);
    localStorage.setItem("numero", numero);
    localStorage.setItem("adresse", adresse);
    localStorage.setItem("profession", profession);
    localStorage.setItem("societe", societe);
  });
  }

 
</script>

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
  <input type="text" bind:value={societe} id="societe" name="societe" required>
</form>