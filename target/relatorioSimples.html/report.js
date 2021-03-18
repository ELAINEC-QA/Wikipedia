$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Post.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Consulta",
  "description": "",
  "id": "consulta",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 3145073400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Consultar Ovo de Pascoa",
  "description": "",
  "id": "consulta;consultar-ovo-de-pascoa",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 5,
  "name": "que acesso a Wikipedia em Portugues",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "pesquiso por \"Ovo de P�scoa\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 7,
  "name": "Exibe a expressao \"Ovo de P�scoa\" no titulo guia",
  "keyword": "Entao "
});
formatter.match({
  "location": "Post.queAcessoAWikipediaEmPortugues()"
});
formatter.result({
  "duration": 2695910999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de P�scoa",
      "offset": 14
    }
  ],
  "location": "Post.pesquisoPor(String)"
});
formatter.result({
  "duration": 1624953300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de P�scoa",
      "offset": 19
    }
  ],
  "location": "Post.exibeAExpressaoNoTituloDaGuia(String)"
});
formatter.result({
  "duration": 44951799,
  "status": "passed"
});
formatter.after({
  "duration": 759431399,
  "status": "passed"
});
});