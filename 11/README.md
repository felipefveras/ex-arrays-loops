![](https://i.imgur.com/xG74tOh.png)

# Exercício 11

## Filtrando números

Declare um array contendo alguns números quaisquer.

Depois crie um novo array que contenha apenas os números do array original que estejam entre 10 e 20, incluindo esses números, ou que sejam maiores que 100. Ao final, imprima a variável que guarda o novo array.

#### Exemplo 1:

Para o array **original** abaixo:

```javascript
const original = [5, 7, 13, 17, 26, 34, 118, 245];

const novoArray = [];
let i = 0;

for (let item of original) {
    if (item >= 10 && item <= 20 || item > 100) {
        novoArray[i] = item;
        i++;
    }
}
for (let itens of novoArray) {
    console.log(itens)
}
```

Deverá ser impresso no console:

```
[13, 17, 118, 245]
```

#### Exemplo 2:

Para o array **original** abaixo:

```javascript
const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];

const novoArray = [];
let i = 0;

for (let item of original) {
    if (item >= 10 && item <= 20 || item > 100) {
        novoArray[i] = item;
        i++;
    }
}
for (let itens of novoArray) {
    console.log(itens)
}
```

Deverá ser impresso no console:

```
[10, 13, 17, 118, 245]
```

Teste também alterando os números do array original! =)

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício revendo a aula se necessário
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `lógica` `módulo 1` `exercício de classe` `matemática` `nodeJS`
