<template>
    <div>
        <RegisterComponent /> <!-- Utiliza el componente de inicio de sesión -->
    </div>
</template>
  
<script>
import RegisterComponent from '../components/RegisterComponent.vue';

export default {
    components: {
        RegisterComponent,
    },
};
</script>