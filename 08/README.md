![](https://i.imgur.com/xG74tOh.png)

# Exercício 08

## Encontrando o maior

Declare um array com alguns números quaisquer.

Depois, faça um programa que encontre o maior número desse array e o imprima no console.

Exemplo:

Para o array com os **numeros** abaixo:

```javascript
const numeros = [3, 4, 1, 8, 11, 7, 5];
const numeros = [3, 24, 1, 8, 11, 7, 15];
let maiorNumero = 0;

for (let i = 0; i < numeros.length; i++) {
    if (maiorNumero < numeros[i]) {
        maiorNumero = numeros[i];
    }
}
console.log(maiorNumero)
```

Deverá imprimir no console:

```
11
```

Teste também alterando os números! =)

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício revendo a aula se necessário
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `lógica` `módulo 1` `exercício de classe` `matemática` `nodeJS`
