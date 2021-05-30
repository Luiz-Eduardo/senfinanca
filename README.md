# SenFinança

Projeto desenvolvido para uma aplicação de controle financeiro pessoal.

Na aplicação é possível criar, editar ou excluir uma transação financeira, a transação possui os campos:
- Título
- Tipo
- Categoria
- Valor
- Data de criação

No menu da aplicação vemos o nome da aplicação (que redireciona para a página inicial), um link para a aba do Extrato (Visualize Extract) e o botão de adicionar uma nova transação.

Nesse botão de adicionar transação (e também no botão de edição), é aberto um modal para que o usuário preencha os dados dessa transação (ou altere os dados já criados), os campos possuem testes simples de validação e por escolha pessoal o Creation Date armazena apenas a data de criação da transação, isto é, mesmo após alterada ainda é mostrado a data exata da criação.

Na sua página inicial é possível visualizar todas as transações realizadas pelo usuário, mostrando todos os dados e permitindo ao usuário alterar e deletar uma transação.

Na aba de Extrato (Visualize Extract) temos de forma clara o total das transações de entradas (Inbound Transactions) e de transações de saída (Outbound Transactions), bem como filtros que interagem entre si para uma melhor experiência do usuário.

Nessa aba também temos o valor total da conta, caso o usuário tenha feito mais transações de saída do que de entrada será mostrado um saldo negativo.

Por fim, a aplicação pode ser acessada no seguinte link: [aqui](https://senfinanca.herokuapp.com/) e vale mencionar também que foram adicionados alguns testes unitários para verificação de telas, utilizando o jest.

## Scripts disponíveis

No diretório do projeto, você pode rodar:

### `yarn start`

Roda a aplicação no modo de desenvolvedor.\
Abra [http://localhost:3000](http://localhost:3000) para ver funcionando no seu navegador.

A página irá recarregar se você fizer edições.\
Você também verá quaisquer erros de lint no console.

### `yarn test`

Inicia o test runner no modo interativo de observação.\
Veja a seção [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `yarn build`

Builda a aplicação para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho. 

O build é minificado e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser deployado! 

Veja a seção sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.