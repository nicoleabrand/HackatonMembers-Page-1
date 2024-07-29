<script>
export default {
    name: 'EquipeView',
    data() {
        return {
            equipe: [
                {
                    nome: 'Nicole Brand',
                    turma: '2INFO2'
                },
                {
                    nome: 'Eduarda Heidemann',
                    turma: '2INFO2'
                },
                {
                    nome: 'Nathaly Adão',
                    turma: '2INFO2'
                },
                {
                    nome: 'Manuela Hostin',
                    turma: '2INFO3'
                },
                {
                    nome: 'Gabriel Vinícius',
                    turma: '2INFO2'
                },
                {
                    nome: 'Yasmin Mello',
                    turma: '2INFO2'
                }

            ]
        }
    }
}
</script>

<template>
    <div class="team">
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
.team{
    padding-top: 4%;
    padding-left: 4%;
}
h1{

    font-family: 'Bebas Neue', sans-serif;
    font-size: 280%;
}
</style>