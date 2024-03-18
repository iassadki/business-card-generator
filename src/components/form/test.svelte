<script>
  let form;
  let name;
  let prename;
  let email;
  let numero;
  let adresse;
  let profession;
  let company;

  $: if(form){
    document.getElementById("carteForm").addEventListener("change", function () {
    localStorage.setItem("name", name);
    localStorage.setItem("prename", prename);
    localStorage.setItem("email", email);
    localStorage.setItem("numero", numero);
    localStorage.setItem("adresse", adresse);
    localStorage.setItem("profession", profession);
    localStorage.setItem("company", company);
  });
  }

 
</script>

<form bind:this={form} id="carteForm">
  <label for="name">name:</label>
  <input type="text" bind:value={name} id="name" name="name" required >

  <label for="prename">Préname:</label>
  <input type="text" bind:value={prename} id="prename" name="prename" required>

  <label for="email">Email:</label>
  <input type="email" bind:value={email} id="email" name="email" required>

  <label for="numero">Numero:</label>
  <input type="text" bind:value={numero} id="numero" name="numero" required>

  <label for="adresse">Adresse:</label>
  <input type="text" bind:value={adresse} id="adresse" name="adresse" required>

  <label for="profession">Profession:</label>
  <input type="text" bind:value={profession} id="profession" name="profession" required>

  <label for="company">Société:</label>
  <input type="text" bind:value={company} id="company" name="company" required>
</form>