<template>
    <div>
        <h1>Panel de Control</h1>
        <p>Bienvenido, {{ username }}.</p>
    </div>
</template>
  
<script>

export default {
    data() {
        return {
            username: '',
        };
    },
    created() {
        this.username = localStorage.getItem('vueUser');
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