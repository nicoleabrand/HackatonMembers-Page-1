
<template>
    <div>
        
        <h1>{{ membro.nome }}</h1>
        <div v-if="membro">
         
            <p><strong>Turma:</strong> {{ membro.turma }}</p>
            <p><strong>Descrição:</strong> {{ membro.descricao }}</p>
            <p><strong>Email:</strong> {{ membro.email }}</p>
        </div>
        <div v-else>
            <p>Detalhes não encontrados.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MembroView',
    props: ['nome'],
    data() {
        return {
            membro: {} 
        }
    },

    created() {const equipe = [
            { nome: 'Nicole', turma: '2info2', descricao: 'xxxxxxxxxxxx', email: 'xxxxx@gmail.com' },
            { nome: 'Eduarda', turma: '2info2', descricao: 'xxxxxxxxxxxx', email: 'xxxxx@gmail.com' },
            { nome: 'Nathaly', turma: '2info2', descricao: 'xxxxxxxxxxxx', email: 'xxxxx@gmail.com' },
            { nome: 'Manuela H.', turma: '2info3', descricao: 'xxxxxxxxxxxx', email: 'xxxxx@gmail.com' },
            { nome: 'Gabriel V', turma: '2info2', descricao: 'xxxxxxxxxxxx', email: 'xxxxx@gmail.com' },
            { nome: 'Yasmin', turma: '2info2', descricao: 'xxxxxxxxxxxx', email: 'xxxxx@gmail.com' }
        ];

        // Encontrar o membro com base no nome passado como prop
        this.membro = equipe.find(m => m.nome === this.$route.params.nome) || {};
    }
}
</script>