<template>
    <div>
        <h1>Panel de Control</h1>
        <p>Bienvenido, {{ username }}.</p>
        <!-- Aquí puedes agregar contenido adicional para el panel de control -->
    </div>
</template>
  
<script>
export default {
    computed: {
        username() {
            // Aquí puedes obtener el nombre de usuario del estado de autenticación.
            // Por ejemplo, si tienes un sistema de autenticación implementado.
            return 'Nombre de Usuario';
        },
    },
};
</script>
  
<style scoped>
div {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

p {
    font-size: 16px;
    margin-bottom: 20px;
}
</style>