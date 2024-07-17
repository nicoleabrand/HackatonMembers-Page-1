<script>
export default {
    name: 'EquipeView',
    data() {
        return {
            equipe: [
                {
                    nome: 'Nicole'
                },
                {
                    nome: 'Eduarda'
                },
                {
                    nome: 'Nathaly'
                },
                {
                    nome: 'Matheus Henrique'
                },
                {
                    nome: 'Gabriel V'
                },
                {
                    nome: 'Yasmin'
                }

            ]
        }
    }
}
</script>

<template>
    <div>
        <h1>Equipe</h1>
        <ul>
            <li v-for="membro in equipe" :key="membro.nome">
                <h2>{{ membro.nome }}</h2>
                <p>{{ membro.cargo }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
/* Your component-specific styles go here */
</style>