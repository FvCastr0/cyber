# ✅ Funcionalidades e Regras de Negócio - Gerenciador de Estudos e Rotina

Este documento lista todas as funcionalidades planejadas para o projeto, bem como suas regras de negócio. Use as caixas de seleção para acompanhar o progresso da implementação.

---

## 👤 Usuário

### Funcionalidades

- [ ] Cadastro com nome, email e senha
- [ ] Login com JWT
- [ ] Autenticação para acesso às rotas protegidas
- [ ] Recuperação de senha
- [ ] Atualização de perfil (nome, senha)
- [ ] Exclusão de conta
- [ ] Dashboard com estatísticas (tarefas, hábitos, estudos)

### Regras de Negócio

- [ ] Usuário deve fornecer email único no cadastro
- [ ] Apenas usuários autenticados podem acessar rotas protegidas
- [ ] Cada usuário pode ver e manipular apenas os seus próprios dados

---

## 📚 Estudos

### Funcionalidades

- [ ] Criar disciplinas (com cor e categoria)
- [ ] Listar disciplinas
- [ ] Criar sessão de estudo (disciplina, duração, notas)
- [ ] Listar sessões por período (diário/semanal/mensal)
- [ ] Editar ou excluir sessões
- [ ] Contador de sequência diária de estudo
- [ ] Técnica de revisão espaçada (ex: +1d, +3d, +7d...)
- [ ] Marcar sessões como favoritas ou importantes
- [ ] Gerar relatório de tempo por disciplina

### Regras de Negócio

- [ ] Sessão só pode ser criada se a disciplina já existir
- [ ] Sessões não podem ter horários sobrepostos
- [ ] O contador de sequência só é atualizado se o usuário tiver estudado no dia
- [ ] Revisões espaçadas são geradas com base na data da sessão anterior

---

## ✅ Tarefas

### Funcionalidades

- [ ] Criar tarefas com título, descrição e data limite
- [ ] Listar tarefas por data
- [ ] Marcar tarefa como concluída
- [ ] Repetir tarefas automaticamente (diária, semanal, mensal)
- [ ] Atribuir prioridade (baixa, média, alta)
- [ ] Subtarefas ou checklists dentro de tarefas
- [ ] Notificações (simuladas) de tarefas próximas do vencimento
- [ ] Filtrar e ordenar tarefas por data, prioridade, status

### Regras de Negócio

- [ ] Tarefa não pode ser criada com data anterior à atual
- [ ] Tarefa pertence exclusivamente ao usuário que a criou
- [ ] Repetições seguem a frequência configurada pelo usuário
- [ ] Subtarefas só existem dentro de uma tarefa principal

---

## 🔁 Hábitos

### Funcionalidades

- [ ] Criar hábitos com nome
- [ ] Criar meta de estudo diária
- [ ] Marcar hábito como feito no dia
- [ ] Ver histórico de hábitos cumpridos
- [ ] Ver sequência atual e progresso mensal

### Regras de Negócio

- [ ] Um hábito só pode ser marcado como feito **uma vez por dia**

---

## 🕹️ Gamificação

### Funcionalidades

- [ ] Ganhar pontos por ações (sessões, tarefas, hábitos)
- [ ] Subir de nível a cada 100 pontos
- [ ] Desbloquear conquistas
- [ ] Sequência de dias

### Regras de Negócio

- [ ] Cada tipo de ação possui uma pontuação específica
- [ ] Níveis são atualizados automaticamente conforme pontuação
- [ ] Conquistas são liberadas por marcos (ex: 7 dias de sequência, 10h estudadas)

---

## 📝 Anotações

### Funcionalidades

- [ ] Criar anotações livres (tipo diário)
- [ ] Adicionar arquivos às anotações (imagem, PDF)

---
