<script>
export default {
    name: 'EquipeView',
    data() {
        return {
            equipe: [
                {
                    nome: 'Nicole',
                    turma: '2info2'
                },
                {
                    nome: 'Eduarda',
                    turma: '2info2'
                },
                {
                    nome: 'Nathaly',
                    turma: '2info2'
                },
                {
                    nome: 'Manuela H.',
                    turma: '2info3'
                },
                {
                    nome: 'Gabriel V',
                    turma: '2info2'
                },
                {
                    nome: 'Yasmin',
                    turma: '2info2'
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
                <RouterLink :to="{ name: 'membro', params: {nome: membro.nome} }">
                <h2>{{ membro.nome }}</h2>
            </RouterLink>
                <p>{{ membro.turma }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>