$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Post.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Funcionalidade: Consulta"
    },
    {
      "line": 2,
      "value": "#Cenario: Consultar Ovo de Pascoa"
    },
    {
      "line": 3,
      "value": "# Dado que acesso a Wikipedia em Portugues"
    },
    {
      "line": 4,
      "value": "#Quando pesquiso por \"Ovo de P�scoa\""
    },
    {
      "line": 5,
      "value": "#Entao Exibe a expressao \"Ovo de P�scoa\" no titulo guia"
    }
  ],
  "line": 8,
  "name": "Consulta",
  "description": "",
  "id": "consulta",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3128635199,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Consultar Ovo de Pascoa",
  "description": "",
  "id": "consulta;consultar-ovo-de-pascoa",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "que acesso a Wikipedia em Portugues",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "pesquiso por \"Ovo de P�scoa\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Exibe a expressao \"Ovo de P�scoa\" no titulo guia",
  "keyword": "Then "
});
formatter.match({
  "location": "Post.queAcessoAWikipediaEmPortugues()"
});
formatter.result({
  "duration": 2408247300,
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
  "duration": 1415633200,
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
  "duration": 56230299,
  "status": "passed"
});
formatter.after({
  "duration": 989608701,
  "status": "passed"
});
});