# Wordweb
Caça - palavras, em versão web, para o projeto final de CAP
## Acesso ao jogo
1.  Para se acessar esse jogo deve se entrar no seguinte link
    ```http://cap.dc.ufscar.br/~758598/cgi-bin/main.cgi```

## Descrição do projeto

* O site
    - No site possui três tipos de caça - palavras, cada uma com uma dificuldade(fácil, médio e díficil).
    - Deve - se selecionar o caça - palavras desejado, ao realizar essa ação o caça - palavras será aberto
    - Para se jogar, a pessoa deve comparar a palavra na lista com as letras do caça - palavras
    - Ao conseguir fazer isso deve - se selecionar com clique e arrastar até o final da palavra. A ordem da palavra importa, por exemplo, a seleção de "palavra" é diferente de "arvalap"
    - Dependendo do nível de diculdade as palavras podem estar na horizontal, vertical e nas duas diagonais, podendo estar na ordem invertida
    - Para cada palavra marcada corretamente, na aba placar, será riscada a palavra
    - O objetivo do jogo é riscar todas as palavras da lista
    * Modo fácil
        - Apresenta o tema: comida
        - Nesse nível as palavras não estão na ordem inversa
        - Nesse nível a lista é a menor
    * Modo médio
        - Apresenta o tema: personagem de desenho
        - Nesse nível as palavras estão em todas as posições possíveis
    * Modo díficil
        - Apresenta o tema: astronomia
        - Nesse nível as palavras também estão em todas as combinações
        - A lista é a maior de todas

## Descrição do  código
  - Este código foi feita em css, html e Javascript, nessa ordem
  * Css
    - com essa parte do código é feito o design de cada aspecto da página na web
    - É definido uma background que intercala entre preto e verde de forma que cada linha seja na diagonal
    - É definido uma caixa preta para a inserção de dados para o caça palavras e outra para as listas
    - É definido a cor da letra que foi utilizado em todos os elementos escritos
    - É definido a parte da pagina onde não havera cursor
  * Html
    - Nessa parte do código é definido os elementos que compõem a página
    - É definido um titulo, um corpo e o canvas
  * Javascript
    - Nessa parte do código é definido as funções que cada elemento apresenta
    - É definido os advent listener para a movimentação do mouse
    - Com essa linguagem foi feito os três caça palavras
    - É criado as três listas
    - Foi feito a caixa de seleção para o caça - palavras, com as funções drawDoubleStrokedLine e drawDoubleStrokedLineWArc 
    - É feita a função que mostra a palavra da lista riscada, ou seja, o "placar"
  * CGI
    - Nessa parte é feita a leitura e impressão do html
    - Foi codificada na linguagem C
## Criadores

Ricardo Faria            RA: 758598
Iago Elias               RA: 759027