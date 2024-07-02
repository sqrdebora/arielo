const ptExpressions: string[] = ['tanto faz', 'sinto muito', 'foda-se', 'foda se', 'eu não ligo','por favor', 'ja é o suficiente', 'Eu amo elvis presley', 'Mas que porra'];
const enExpressions: string[] = ['whatever', `I'm so sorry`, 'fuck you', 'fuck you', `I don't care`, 'please', 'enough is enough', 'I love elvis presley', 'What the fuck']

const ptWords = ["tempo", "pessoa", "ano", "caminho", "dia", "coisa", "homem", "mundo", "vida", "mão", 
    "parte", "criança", "olho", "mulher", "lugar", "trabalho", "semana", "caso", "ponto", "governo", "se", "desculpe", "olá", "estereótipo", "surpresa", 'terapia', 'coisa'];
const enWords = ["time", "person", "year", "way", "day", "thing", "man", "world", "life", "hand", 
    "part", "child", "eye", "woman", "place", "work", "week", "case", "point", "government", "if", "sorry", "hello", "stereotype", "surprise", 'therapy', 'thing']

export type word = {
  pt: string,
  en: string,
}
  const words: word[] = [];
  const expressions: word[] = []

  let index = 0;
ptWords.map((item) => {
  words.push({
    pt: item,
    en: enWords[index],
  })

  index++;
})  
index = 0;
ptExpressions.map((item) => {
  expressions.push({
    pt: item,
    en: enExpressions[index],
  })

  index++;
})  

export { words, expressions }