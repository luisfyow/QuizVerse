const QUESTIONS = [
  {
    "id": 1,
    "subject": "Português",
    "topic": "Classes gramaticais",
    "difficulty": "Fácil",
    "statement": "Na oração “O candidato estava muito confiante”, o vocábulo “muito” funciona como advérbio de intensidade, pois modifica o sentido do adjetivo “confiante”.",
    "answer": true,
    "comment": "Certo. Nesse contexto, “muito” intensifica o adjetivo “confiante” e, por isso, é advérbio de intensidade."
  },
  {
    "id": 2,
    "subject": "Português",
    "topic": "Classes gramaticais",
    "difficulty": "Fácil",
    "statement": "Na frase “A coragem do servidor impressionou a banca”, a palavra “coragem” é classificada como substantivo concreto.",
    "answer": false,
    "comment": "Errado. “Coragem” designa qualidade ou estado dependente de um ser e é substantivo abstrato."
  },
  {
    "id": 3,
    "subject": "Português",
    "topic": "Classes gramaticais",
    "difficulty": "Fácil",
    "statement": "Em “Os dois candidatos chegaram cedo”, o termo “dois” pertence à classe dos adjetivos.",
    "answer": false,
    "comment": "Errado. “Dois” é numeral cardinal, pois expressa quantidade determinada."
  },
  {
    "id": 4,
    "subject": "Português",
    "topic": "Pronomes",
    "difficulty": "Médio",
    "statement": "No período “O relatório que chegou ontem será analisado”, o pronome relativo “que” retoma “relatório” e exerce a função de sujeito da forma verbal “chegou”.",
    "answer": true,
    "comment": "Certo. Substituindo o relativo por seu antecedente, tem-se “o relatório chegou”; logo, “que” é sujeito de “chegou”."
  },
  {
    "id": 5,
    "subject": "Português",
    "topic": "Verbos e regência",
    "difficulty": "Médio",
    "statement": "Na oração “Assistimos ao debate sobre política monetária”, o complemento “ao debate” funciona como objeto indireto.",
    "answer": true,
    "comment": "Certo. No sentido de ver ou presenciar, “assistir” rege a preposição “a”; o termo preposicionado é objeto indireto."
  },
  {
    "id": 6,
    "subject": "Português",
    "topic": "Verbos e regência",
    "difficulty": "Fácil",
    "statement": "Em “O servidor entregou o processo ao chefe”, “o processo” é objeto direto e “ao chefe” é objeto indireto.",
    "answer": true,
    "comment": "Certo. Entrega-se algo a alguém: “o processo” completa o verbo sem preposição e “ao chefe”, com preposição."
  },
  {
    "id": 7,
    "subject": "Português",
    "topic": "Verbos e regência",
    "difficulty": "Médio",
    "statement": "Em “Os analistas necessitam de atualização constante”, a forma verbal “necessitam” é transitiva direta.",
    "answer": false,
    "comment": "Errado. O verbo “necessitar” rege a preposição “de” nesse emprego; é transitivo indireto."
  },
  {
    "id": 8,
    "subject": "Português",
    "topic": "Termos da oração",
    "difficulty": "Difícil",
    "statement": "Em “A análise do técnico foi minuciosa”, a expressão “do técnico”, por indicar o agente da análise, exerce a função de complemento nominal.",
    "answer": false,
    "comment": "Errado. Como “o técnico” é o agente implícito da ação de analisar, o termo tem valor ativo e funciona como adjunto adnominal."
  },
  {
    "id": 9,
    "subject": "Português",
    "topic": "Termos da oração",
    "difficulty": "Médio",
    "statement": "Na expressão “necessidade de revisão”, o segmento “de revisão” funciona como complemento nominal de “necessidade”.",
    "answer": true,
    "comment": "Certo. O termo preposicionado completa o sentido do substantivo abstrato “necessidade” e possui valor passivo: algo precisa ser revisado."
  },
  {
    "id": 10,
    "subject": "Português",
    "topic": "Termos da oração",
    "difficulty": "Médio",
    "statement": "Na oração “A banca considerou a questão difícil”, o adjetivo “difícil” exerce a função de predicativo do objeto.",
    "answer": true,
    "comment": "Certo. “Difícil” atribui uma característica ao objeto direto “a questão” por intermédio do verbo “considerou”."
  },
  {
    "id": 11,
    "subject": "Português",
    "topic": "Sujeito e predicado",
    "difficulty": "Fácil",
    "statement": "Em “Os candidatos permaneciam tranquilos”, o predicado é nominal, e “tranquilos” é predicativo do sujeito.",
    "answer": true,
    "comment": "Certo. “Permaneciam” atua como verbo de ligação e o núcleo do predicado é o predicativo “tranquilos”."
  },
  {
    "id": 12,
    "subject": "Português",
    "topic": "Sujeito e predicado",
    "difficulty": "Médio",
    "statement": "Em “Chegaram cedo os novos servidores”, o sujeito está posposto ao verbo e a concordância verbal está correta.",
    "answer": true,
    "comment": "Certo. O sujeito simples é “os novos servidores”. Embora apareça depois do verbo, exige a forma plural “chegaram”."
  },
  {
    "id": 13,
    "subject": "Português",
    "topic": "Sujeito e predicado",
    "difficulty": "Difícil",
    "statement": "Na oração “Precisa-se de analistas experientes”, o pronome “se” indetermina o sujeito, razão pela qual o verbo permanece no singular.",
    "answer": true,
    "comment": "Certo. “Precisar de” é transitivo indireto. Com índice de indeterminação do sujeito, o verbo fica na terceira pessoa do singular."
  },
  {
    "id": 14,
    "subject": "Português",
    "topic": "Voz passiva",
    "difficulty": "Difícil",
    "statement": "Em “Publicaram-se os resultados”, o pronome “se” é partícula apassivadora, e “os resultados” é o sujeito paciente.",
    "answer": true,
    "comment": "Certo. A construção equivale a “os resultados foram publicados”; por isso, o verbo concorda no plural com o sujeito paciente."
  },
  {
    "id": 15,
    "subject": "Português",
    "topic": "Orações subordinadas",
    "difficulty": "Médio",
    "statement": "No período “Embora estudasse diariamente, o candidato ainda cometia erros”, a oração iniciada por “embora” é subordinada adverbial concessiva.",
    "answer": true,
    "comment": "Certo. “Embora” introduz uma circunstância de concessão: um fato que poderia impedir o outro, mas não o impede."
  },
  {
    "id": 16,
    "subject": "Português",
    "topic": "Orações coordenadas",
    "difficulty": "Fácil",
    "statement": "Em “O candidato estudou muito, mas errou o item”, a segunda oração é coordenada sindética adversativa.",
    "answer": true,
    "comment": "Certo. A conjunção “mas” estabelece oposição entre as duas orações independentes."
  },
  {
    "id": 17,
    "subject": "Português",
    "topic": "Orações subordinadas",
    "difficulty": "Médio",
    "statement": "Em “Quando a prova começou, todos se concentraram”, a primeira oração exprime causa.",
    "answer": false,
    "comment": "Errado. A conjunção “quando” introduz oração subordinada adverbial temporal, não causal."
  },
  {
    "id": 18,
    "subject": "Português",
    "topic": "Pontuação",
    "difficulty": "Fácil",
    "statement": "A vírgula pode separar livremente o sujeito do predicado quando o sujeito é extenso.",
    "answer": false,
    "comment": "Errado. Como regra, não se separa sujeito e predicado por vírgula, ainda que o sujeito seja extenso."
  },
  {
    "id": 19,
    "subject": "Português",
    "topic": "Termos da oração",
    "difficulty": "Fácil",
    "statement": "Em “Candidatos, leiam atentamente o comando”, a vírgula isola um vocativo.",
    "answer": true,
    "comment": "Certo. “Candidatos” é um chamamento direto ao interlocutor e deve ser isolado por vírgula."
  },
  {
    "id": 20,
    "subject": "Português",
    "topic": "Termos da oração",
    "difficulty": "Fácil",
    "statement": "Em “Brasília, capital da República, abriga a sede do BACEN”, o trecho entre vírgulas é um aposto explicativo.",
    "answer": true,
    "comment": "Certo. “Capital da República” explica e renomeia “Brasília”, funcionando como aposto explicativo."
  },
  {
    "id": 21,
    "subject": "Direito Constitucional",
    "topic": "Constituição",
    "difficulty": "Fácil",
    "statement": "A Constituição Federal de 1988 é promulgada, escrita, dogmática, analítica e rígida.",
    "answer": true,
    "comment": "Certo. Essas são classificações tradicionalmente atribuídas à CF/88: participação popular indireta, texto formal escrito, elaboração sistematizada, conteúdo extenso e processo de alteração mais solene."
  },
  {
    "id": 22,
    "subject": "Direito Constitucional",
    "topic": "Princípios fundamentais",
    "difficulty": "Fácil",
    "statement": "A soberania, a cidadania, a dignidade da pessoa humana, os valores sociais do trabalho e da livre iniciativa e o pluralismo político são fundamentos da República Federativa do Brasil.",
    "answer": true,
    "comment": "Certo. O item reproduz os cinco fundamentos previstos no art. 1º da Constituição."
  },
  {
    "id": 23,
    "subject": "Direito Constitucional",
    "topic": "Princípios fundamentais",
    "difficulty": "Médio",
    "statement": "A separação dos Poderes impede qualquer forma de controle recíproco entre Legislativo, Executivo e Judiciário.",
    "answer": false,
    "comment": "Errado. Os Poderes são independentes e harmônicos, mas o sistema de freios e contrapesos admite controles recíprocos constitucionalmente previstos."
  },
  {
    "id": 24,
    "subject": "Direito Constitucional",
    "topic": "Princípios fundamentais",
    "difficulty": "Fácil",
    "statement": "Todo poder emana do povo, que o exerce exclusivamente por meio de representantes eleitos.",
    "answer": false,
    "comment": "Errado. O povo exerce o poder por representantes eleitos ou diretamente, nos termos da Constituição."
  },
  {
    "id": 25,
    "subject": "Direito Constitucional",
    "topic": "Princípios fundamentais",
    "difficulty": "Médio",
    "statement": "Erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais constitui objetivo fundamental da República.",
    "answer": true,
    "comment": "Certo. Trata-se de objetivo fundamental previsto no art. 3º, III, da CF."
  },
  {
    "id": 26,
    "subject": "Direito Constitucional",
    "topic": "Direitos fundamentais",
    "difficulty": "Fácil",
    "statement": "É livre a manifestação do pensamento, mas a Constituição veda o anonimato.",
    "answer": true,
    "comment": "Certo. Essa regra consta do art. 5º, IV, e busca compatibilizar liberdade de expressão e responsabilização."
  },
  {
    "id": 27,
    "subject": "Direito Constitucional",
    "topic": "Direitos fundamentais",
    "difficulty": "Médio",
    "statement": "Por determinação judicial, o ingresso forçado em uma casa pode ocorrer durante o dia; em caso de flagrante delito, desastre ou para prestar socorro, pode ocorrer também à noite.",
    "answer": true,
    "comment": "Certo. A ordem judicial autoriza ingresso apenas durante o dia; as demais exceções constitucionais não têm essa limitação temporal."
  },
  {
    "id": 28,
    "subject": "Direito Constitucional",
    "topic": "Direitos fundamentais",
    "difficulty": "Médio",
    "statement": "A realização de reunião pacífica e sem armas em local aberto ao público depende de autorização prévia da autoridade competente.",
    "answer": false,
    "comment": "Errado. A reunião independe de autorização; exige-se apenas prévio aviso e que não frustre outra reunião anteriormente convocada para o mesmo local."
  },
  {
    "id": 29,
    "subject": "Direito Constitucional",
    "topic": "Direitos fundamentais",
    "difficulty": "Difícil",
    "statement": "A dissolução compulsória de associação depende de decisão judicial transitada em julgado, ao passo que a suspensão de suas atividades depende de decisão judicial, mas não de trânsito em julgado.",
    "answer": true,
    "comment": "Certo. A distinção decorre do art. 5º, XIX, da Constituição."
  },
  {
    "id": 30,
    "subject": "Direito Constitucional",
    "topic": "Remédios constitucionais",
    "difficulty": "Médio",
    "statement": "O habeas data é cabível para assegurar o conhecimento de informações relativas à pessoa do impetrante constantes de registros governamentais ou de caráter público.",
    "answer": true,
    "comment": "Certo. Também pode ser usado para retificar esses dados quando não se prefira fazê-lo por processo sigiloso, judicial ou administrativo."
  },
  {
    "id": 31,
    "subject": "Direito Constitucional",
    "topic": "Remédios constitucionais",
    "difficulty": "Médio",
    "statement": "O mandado de injunção protege a liberdade de locomoção contra ilegalidade ou abuso de poder.",
    "answer": false,
    "comment": "Errado. A liberdade de locomoção é protegida pelo habeas corpus. O mandado de injunção combate a falta de norma regulamentadora que inviabilize direito constitucional."
  },
  {
    "id": 32,
    "subject": "Direito Constitucional",
    "topic": "Remédios constitucionais",
    "difficulty": "Difícil",
    "statement": "Qualquer pessoa, brasileira ou estrangeira, possui legitimidade para propor ação popular.",
    "answer": false,
    "comment": "Errado. A Constituição atribui a legitimidade a qualquer cidadão, condição ligada ao gozo dos direitos políticos."
  },
  {
    "id": 33,
    "subject": "Direito Constitucional",
    "topic": "Direitos fundamentais",
    "difficulty": "Médio",
    "statement": "As normas definidoras dos direitos e das garantias fundamentais têm aplicação imediata.",
    "answer": true,
    "comment": "Certo. É o que determina expressamente o art. 5º, § 1º, da CF."
  },
  {
    "id": 34,
    "subject": "Direito Constitucional",
    "topic": "Direitos fundamentais",
    "difficulty": "Difícil",
    "statement": "Tratados internacionais sobre direitos humanos aprovados, em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros equivalem às emendas constitucionais.",
    "answer": true,
    "comment": "Certo. Esse rito qualificado e seu efeito estão previstos no art. 5º, § 3º, da CF."
  },
  {
    "id": 35,
    "subject": "Direito Constitucional",
    "topic": "Direitos sociais",
    "difficulty": "Fácil",
    "statement": "O transporte integra expressamente o rol de direitos sociais previsto na Constituição.",
    "answer": true,
    "comment": "Certo. O transporte foi incluído no art. 6º da CF pela Emenda Constitucional nº 90/2015."
  },
  {
    "id": 36,
    "subject": "Direito Constitucional",
    "topic": "Administração pública",
    "difficulty": "Fácil",
    "statement": "Legalidade, impessoalidade, moralidade, publicidade e eficiência são princípios expressos aplicáveis à administração pública direta e indireta de todos os Poderes e entes federativos.",
    "answer": true,
    "comment": "Certo. O caput do art. 37 consagra esses princípios para União, estados, Distrito Federal e municípios."
  },
  {
    "id": 37,
    "subject": "Direito Constitucional",
    "topic": "Administração pública",
    "difficulty": "Médio",
    "statement": "O prazo de validade do concurso público será de até dois anos, prorrogável uma vez por igual período.",
    "answer": true,
    "comment": "Certo. É a regra do art. 37, III, da Constituição."
  },
  {
    "id": 38,
    "subject": "Direito Constitucional",
    "topic": "Administração pública",
    "difficulty": "Difícil",
    "statement": "A Constituição proíbe de modo absoluto a acumulação remunerada de cargos públicos.",
    "answer": false,
    "comment": "Errado. Existem exceções constitucionais, como dois cargos de professor e um cargo de professor com outro técnico ou científico, desde que haja compatibilidade de horários."
  },
  {
    "id": 39,
    "subject": "Direito Constitucional",
    "topic": "Administração pública",
    "difficulty": "Difícil",
    "statement": "As pessoas jurídicas de direito público e as pessoas jurídicas de direito privado prestadoras de serviços públicos respondem objetivamente pelos danos que seus agentes, nessa qualidade, causarem a terceiros.",
    "answer": true,
    "comment": "Certo. A responsabilidade perante a vítima é objetiva, assegurado direito de regresso contra o agente nos casos de dolo ou culpa."
  },
  {
    "id": 40,
    "subject": "Direito Constitucional",
    "topic": "Eficácia das normas",
    "difficulty": "Fácil",
    "statement": "Normas constitucionais de eficácia limitada dependem, em regra, de atuação normativa posterior para produzir plenamente seus efeitos essenciais.",
    "answer": true,
    "comment": "Certo. Elas possuem aplicabilidade indireta, mediata e reduzida quanto aos efeitos principais, embora tenham eficácia jurídica desde a promulgação."
  },
  {
    "id": 41,
    "subject": "Direito Constitucional",
    "topic": "Eficácia das normas",
    "difficulty": "Médio",
    "statement": "Normas de eficácia contida possuem aplicabilidade direta e imediata, mas seu alcance pode ser restringido por lei ou por outros fatores constitucionalmente admitidos.",
    "answer": true,
    "comment": "Certo. A norma nasce apta a produzir efeitos, porém admite contenção posterior de seu alcance."
  },
  {
    "id": 42,
    "subject": "Direito Constitucional",
    "topic": "Eficácia das normas",
    "difficulty": "Médio",
    "statement": "Normas de eficácia plena somente produzem efeitos depois da edição de lei integrativa.",
    "answer": false,
    "comment": "Errado. Normas de eficácia plena têm aplicabilidade direta, imediata e integral, dispensando lei integrativa para seus efeitos essenciais."
  },
  {
    "id": 43,
    "subject": "Direito Administrativo",
    "topic": "Processo administrativo",
    "difficulty": "Fácil",
    "statement": "A Lei nº 9.784/1999 estabelece normas básicas sobre o processo administrativo no âmbito da Administração Pública Federal direta e indireta.",
    "answer": true,
    "comment": "Certo. Esse é o âmbito principal definido no art. 1º da Lei nº 9.784/1999."
  },
  {
    "id": 44,
    "subject": "Direito Administrativo",
    "topic": "Processo administrativo",
    "difficulty": "Médio",
    "statement": "Os preceitos da Lei nº 9.784/1999 também se aplicam aos órgãos dos Poderes Legislativo e Judiciário da União quando desempenham função administrativa.",
    "answer": true,
    "comment": "Certo. A aplicação ocorre quando esses Poderes exercem função administrativa, conforme o art. 1º, § 1º."
  },
  {
    "id": 45,
    "subject": "Direito Administrativo",
    "topic": "Competência",
    "difficulty": "Médio",
    "statement": "A competência administrativa é irrenunciável e deve ser exercida pelo órgão a que foi atribuída, salvo os casos de delegação e avocação legalmente admitidos.",
    "answer": true,
    "comment": "Certo. É a regra do art. 11 da Lei nº 9.784/1999."
  },
  {
    "id": 46,
    "subject": "Direito Administrativo",
    "topic": "Competência",
    "difficulty": "Difícil",
    "statement": "A delegação de competência somente pode ocorrer em favor de órgão ou autoridade hierarquicamente subordinada ao delegante.",
    "answer": false,
    "comment": "Errado. A lei admite delegação a outros órgãos ou titulares, ainda que não sejam hierarquicamente subordinados, quando conveniente e sem impedimento legal."
  },
  {
    "id": 47,
    "subject": "Direito Administrativo",
    "topic": "Competência",
    "difficulty": "Difícil",
    "statement": "A avocação temporária de competência atribuída a órgão hierarquicamente inferior é permitida, em caráter excepcional e por motivos relevantes devidamente justificados.",
    "answer": true,
    "comment": "Certo. Esses são os requisitos previstos no art. 15 da Lei nº 9.784/1999."
  },
  {
    "id": 48,
    "subject": "Direito Administrativo",
    "topic": "Atos administrativos",
    "difficulty": "Fácil",
    "statement": "Competência, finalidade, forma, motivo e objeto são elementos tradicionalmente apontados como requisitos do ato administrativo.",
    "answer": true,
    "comment": "Certo. Esse conjunto é frequentemente memorizado pela sigla COFIFOMOB: competência, finalidade, forma, motivo e objeto."
  },
  {
    "id": 49,
    "subject": "Direito Administrativo",
    "topic": "Atos administrativos",
    "difficulty": "Médio",
    "statement": "A presunção de legitimidade dos atos administrativos é absoluta e impede prova em contrário.",
    "answer": false,
    "comment": "Errado. A presunção é relativa, ou juris tantum, e pode ser afastada mediante prova em contrário."
  },
  {
    "id": 50,
    "subject": "Direito Administrativo",
    "topic": "Atos administrativos",
    "difficulty": "Médio",
    "statement": "A imperatividade está presente em todos os atos administrativos, inclusive nos atos negociais e nos atos que apenas certificam fatos.",
    "answer": false,
    "comment": "Errado. Nem todo ato possui imperatividade; atos negociais e enunciativos, em regra, não impõem unilateralmente obrigações."
  },
  {
    "id": 51,
    "subject": "Direito Administrativo",
    "topic": "Atos administrativos",
    "difficulty": "Difícil",
    "statement": "A autoexecutoriedade permite à Administração executar diretamente certas decisões, sem ordem judicial prévia, quando houver previsão legal ou situação urgente.",
    "answer": true,
    "comment": "Certo. A autoexecutoriedade não está em todos os atos e costuma decorrer de autorização legal ou urgência."
  },
  {
    "id": 52,
    "subject": "Direito Administrativo",
    "topic": "Atos administrativos",
    "difficulty": "Médio",
    "statement": "A Administração revoga atos ilegais e anula atos válidos que se tornaram inconvenientes ou inoportunos.",
    "answer": false,
    "comment": "Errado. É o inverso: atos ilegais são anulados; atos válidos podem ser revogados por razões de mérito administrativo."
  },
  {
    "id": 53,
    "subject": "Direito Administrativo",
    "topic": "Atos administrativos",
    "difficulty": "Difícil",
    "statement": "A revogação produz, em regra, efeitos retroativos, eliminando desde a origem os efeitos do ato revogado.",
    "answer": false,
    "comment": "Errado. Em regra, a revogação produz efeitos ex nunc, isto é, para o futuro. A anulação é que normalmente opera efeitos retroativos."
  },
  {
    "id": 54,
    "subject": "Direito Administrativo",
    "topic": "Convalidação",
    "difficulty": "Médio",
    "statement": "A Administração pode convalidar atos que apresentem defeitos sanáveis, desde que a medida não acarrete lesão ao interesse público nem prejuízo a terceiros.",
    "answer": true,
    "comment": "Certo. A possibilidade está prevista no art. 55 da Lei nº 9.784/1999."
  },
  {
    "id": 55,
    "subject": "Direito Administrativo",
    "topic": "Classificação dos atos",
    "difficulty": "Médio",
    "statement": "Ato complexo é aquele que se forma pela conjugação de vontades de dois ou mais órgãos para a produção de um único ato.",
    "answer": true,
    "comment": "Certo. No ato complexo, as manifestações se integram e formam um ato único."
  },
  {
    "id": 56,
    "subject": "Direito Administrativo",
    "topic": "Classificação dos atos",
    "difficulty": "Difícil",
    "statement": "No ato composto, duas vontades autônomas se fundem para formar um único ato administrativo.",
    "answer": false,
    "comment": "Errado. Essa descrição corresponde ao ato complexo. No ato composto, há um ato principal e outro acessório que o aprova, ratifica ou confere eficácia."
  },
  {
    "id": 57,
    "subject": "Direito Administrativo",
    "topic": "Espécies de atos",
    "difficulty": "Fácil",
    "statement": "Atos normativos contêm comandos gerais e abstratos destinados a orientar a aplicação da lei.",
    "answer": true,
    "comment": "Certo. Regulamentos, instruções normativas e resoluções podem integrar essa categoria, conforme o caso."
  },
  {
    "id": 58,
    "subject": "Direito Administrativo",
    "topic": "Espécies de atos",
    "difficulty": "Médio",
    "statement": "Certidões e atestados são exemplos de atos enunciativos, pois registram ou certificam fatos sem criar, por si sós, uma nova situação jurídica.",
    "answer": true,
    "comment": "Certo. Atos enunciativos exprimem conhecimento ou certificação da Administração."
  },
  {
    "id": 59,
    "subject": "Direito Administrativo",
    "topic": "Espécies de atos",
    "difficulty": "Médio",
    "statement": "O parecer é, em regra, um ato de opinião ou juízo técnico emitido por órgão consultivo.",
    "answer": true,
    "comment": "Certo. O parecer normalmente integra a categoria dos atos enunciativos ou opinativos, embora seus efeitos possam variar conforme a lei."
  },
  {
    "id": 60,
    "subject": "Direito Administrativo",
    "topic": "Motivação",
    "difficulty": "Médio",
    "statement": "Atos administrativos que neguem, limitem ou afetem direitos ou interesses devem ser motivados, com indicação dos fatos e dos fundamentos jurídicos.",
    "answer": true,
    "comment": "Certo. A exigência consta do art. 50 da Lei nº 9.784/1999."
  },
  {
    "id": 61,
    "subject": "Direito Administrativo",
    "topic": "Contratos administrativos",
    "difficulty": "Médio",
    "statement": "Nos contratos administrativos, a Administração possui prerrogativas especiais justificadas pela proteção do interesse público, nos limites legais.",
    "answer": true,
    "comment": "Certo. As chamadas cláusulas exorbitantes colocam a Administração em posição jurídica diferenciada, sempre conforme a lei."
  },
  {
    "id": 62,
    "subject": "Direito Administrativo",
    "topic": "Contratos administrativos",
    "difficulty": "Difícil",
    "statement": "Contrato administrativo e convênio administrativo caracterizam-se igualmente pela existência de interesses contrapostos entre os participantes.",
    "answer": false,
    "comment": "Errado. No contrato, em regra, há interesses contrapostos; no convênio, os participantes cooperam para alcançar objetivo comum."
  },
  {
    "id": 63,
    "subject": "Direito Administrativo",
    "topic": "Contratos administrativos",
    "difficulty": "Médio",
    "statement": "A Lei nº 14.133/2021 admite alteração unilateral do contrato pela Administração nas hipóteses e nos limites previstos em lei.",
    "answer": true,
    "comment": "Certo. A alteração unilateral é uma prerrogativa legal, mas não é irrestrita e deve preservar os direitos do contratado, inclusive o equilíbrio econômico-financeiro."
  },
  {
    "id": 64,
    "subject": "Direito Administrativo",
    "topic": "Formação e efeitos",
    "difficulty": "Difícil",
    "statement": "A perfeição do ato administrativo refere-se ao cumprimento de seu ciclo de formação; a validade, à conformidade com o ordenamento; e a eficácia, à aptidão para produzir efeitos.",
    "answer": true,
    "comment": "Certo. Os três planos são distintos: o ato pode estar perfeito e ainda assim ser inválido ou depender de condição para ser eficaz."
  }
];

const STORAGE_KEY = "foco_bacen_history_v1";
const PASSWORD_KEY = "foco_bacen_password_v1";
const AUTH_KEY = "foco_bacen_authenticated";
const $ = function(selector) { return document.querySelector(selector); };
const $$ = function(selector) { return Array.from(document.querySelectorAll(selector)); };

let quizState = null;
let timerInterval = null;
let lastResult = null;
let pendingDialogAction = null;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, function(char) {
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char];
  });
}

async function hashPassword(value) {
  if (window.crypto && window.crypto.subtle && window.TextEncoder) {
    const bytes = new TextEncoder().encode(value);
    const hash = await window.crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(hash)).map(function(byte) {
      return byte.toString(16).padStart(2, "0");
    }).join("");
  }
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return "local-" + (hash >>> 0).toString(16);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(function() {
    toast.classList.remove("show");
  }, 2600);
}

function prepareLogin() {
  const hasPassword = Boolean(localStorage.getItem(PASSWORD_KEY));
  const title = $(".login-card h1");
  const description = $(".login-card > p");
  const input = $("#password");
  const submit = $("#loginForm button[type='submit']");
  if (!hasPassword) {
    title.textContent = "Proteja seu simulador.";
    description.textContent = "Crie uma senha para o primeiro acesso neste navegador.";
    input.placeholder = "Crie uma senha com 6 ou mais caracteres";
    input.autocomplete = "new-password";
    submit.textContent = "Criar senha e entrar";
  } else {
    title.textContent = "Seu foco é o BACEN.";
    description.textContent = "Acesse seu ambiente de simulados para Técnico.";
    input.placeholder = "Digite sua senha";
    input.autocomplete = "current-password";
    submit.textContent = "Entrar no simulador";
  }
}

function unlockApp() {
  sessionStorage.setItem(AUTH_KEY, "1");
  $("#loginScreen").classList.add("hidden");
  $("#app").classList.remove("hidden");
  showScreen("dashboard");
  renderDashboard();
}

$("#loginForm").addEventListener("submit", async function(event) {
  event.preventDefault();
  const input = $("#password");
  const error = $("#loginError");
  const value = input.value;
  error.textContent = "";
  if (value.length < 6) {
    error.textContent = "Use pelo menos 6 caracteres.";
    return;
  }
  const enteredHash = await hashPassword(value);
  const savedHash = localStorage.getItem(PASSWORD_KEY);
  if (!savedHash) {
    localStorage.setItem(PASSWORD_KEY, enteredHash);
    unlockApp();
    showToast("Senha criada. Bem-vindo ao Foco BACEN.");
    return;
  }
  if (enteredHash !== savedHash) {
    error.textContent = "Senha incorreta. Tente novamente.";
    input.select();
    return;
  }
  unlockApp();
});

$("#togglePassword").addEventListener("click", function() {
  const input = $("#password");
  const showing = input.type === "text";
  input.type = showing ? "password" : "text";
  this.textContent = showing ? "Ver" : "Ocultar";
});

$("#logoutButton").addEventListener("click", function() {
  sessionStorage.removeItem(AUTH_KEY);
  window.clearInterval(timerInterval);
  quizState = null;
  $("#app").classList.add("hidden");
  $("#loginScreen").classList.remove("hidden");
  $("#password").value = "";
  prepareLogin();
  $("#password").focus();
});

function showScreen(name) {
  $$(".screen").forEach(function(screen) { screen.classList.remove("active"); });
  const target = $("#" + name + "Screen");
  if (target) target.classList.add("active");
  $$(".nav-link").forEach(function(button) {
    button.classList.toggle("active", button.dataset.screen === name);
  });
  window.scrollTo({top: 0, behavior: "smooth"});
  if (name === "dashboard") renderDashboard();
  if (name === "setup") updateTopicOptions();
}

$$("[data-screen]").forEach(function(control) {
  control.addEventListener("click", function(event) {
    event.preventDefault();
    const target = control.dataset.screen;
    if (quizState && !quizState.finished && $("#quizScreen").classList.contains("active")) {
      openDialog("abandon", "Sair do simulado?", "As respostas desta tentativa não serão salvas.");
      return;
    }
    showScreen(target);
  });
});

function getHistory() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveHistory(history) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 30)));
}

function percent(value, total) {
  return total ? Math.round(value / total * 100) : 0;
}

function renderDashboard() {
  const history = getHistory();
  const totals = history.reduce(function(acc, item) {
    acc.score += item.score;
    acc.correct += item.correct;
    acc.wrong += item.wrong;
    acc.blank += item.blank;
    acc.total += item.total;
    return acc;
  }, {score:0, correct:0, wrong:0, blank:0, total:0});

  $("#totalScore").textContent = totals.score > 0 ? "+" + totals.score : String(totals.score);
  $("#totalAnswered").textContent = totals.correct + totals.wrong;
  $("#totalSimulados").textContent = history.length + (history.length === 1 ? " simulado concluído" : " simulados concluídos");
  $("#accuracyRate").textContent = percent(totals.correct, totals.correct + totals.wrong) + "%";

  const subjectMap = {};
  const topicMap = {};
  history.forEach(function(attempt) {
    attempt.details.forEach(function(detail) {
      if (!subjectMap[detail.subject]) subjectMap[detail.subject] = {correct:0, answered:0};
      if (!topicMap[detail.topic]) topicMap[detail.topic] = {correct:0, answered:0};
      if (detail.result !== "blank") {
        subjectMap[detail.subject].answered += 1;
        topicMap[detail.topic].answered += 1;
      }
      if (detail.result === "correct") {
        subjectMap[detail.subject].correct += 1;
        topicMap[detail.topic].correct += 1;
      }
    });
  });

  const subjects = Object.entries(subjectMap).filter(function(entry) { return entry[1].answered; });
  subjects.sort(function(a,b) {
    return (b[1].correct / b[1].answered) - (a[1].correct / a[1].answered);
  });
  if (subjects.length) {
    $("#bestSubject").textContent = subjects[0][0].replace("Direito ", "Dir. ");
    $("#bestSubjectDetail").textContent = percent(subjects[0][1].correct, subjects[0][1].answered) + "% de acertos";
  } else {
    $("#bestSubject").textContent = "—";
    $("#bestSubjectDetail").textContent = "Faça seu primeiro simulado";
  }

  const topicContainer = $("#topicPerformance");
  const topics = Object.entries(topicMap).filter(function(entry) { return entry[1].answered; });
  topics.sort(function(a,b) {
    return (a[1].correct / a[1].answered) - (b[1].correct / b[1].answered);
  });
  if (!topics.length) {
    topicContainer.className = "topic-performance empty-state";
    topicContainer.innerHTML = "<p>Conclua um simulado para visualizar seu desempenho detalhado.</p>";
  } else {
    topicContainer.className = "topic-performance";
    topicContainer.innerHTML = topics.slice(0, 8).map(function(entry) {
      const rate = percent(entry[1].correct, entry[1].answered);
      return '<div class="topic-row"><span title="' + escapeHtml(entry[0]) + '">' + escapeHtml(entry[0]) + '</span><div class="topic-bar"><span style="width:' + rate + '%"></span></div><strong>' + rate + '%</strong></div>';
    }).join("");
  }

  const historyList = $("#historyList");
  $("#clearHistoryButton").classList.toggle("hidden", !history.length);
  if (!history.length) {
    historyList.className = "history-list empty-state";
    historyList.innerHTML = "<p>Nenhum simulado concluído ainda.</p>";
  } else {
    historyList.className = "history-list";
    historyList.innerHTML = history.slice(0, 5).map(function(item) {
      const date = new Date(item.date).toLocaleDateString("pt-BR", {day:"2-digit", month:"short", hour:"2-digit", minute:"2-digit"});
      const score = item.score > 0 ? "+" + item.score : item.score;
      return '<div class="history-item"><strong>' + escapeHtml(item.label) + '</strong><time>' + date + '</time><span class="history-score">' + score + '</span><small>' + item.correct + ' C · ' + item.wrong + ' E · ' + item.blank + ' B</small></div>';
    }).join("");
  }
}

const subjectFilter = $("#subjectFilter");
const topicFilter = $("#topicFilter");
const difficultyFilter = $("#difficultyFilter");
const questionCount = $("#questionCount");

function availableQuestions() {
  return QUESTIONS.filter(function(question) {
    const subjectMatch = subjectFilter.value === "Todas" || question.subject === subjectFilter.value;
    const topicMatch = topicFilter.value === "Todos" || question.topic === topicFilter.value;
    const difficultyMatch = difficultyFilter.value === "Todas" || question.difficulty === difficultyFilter.value;
    return subjectMatch && topicMatch && difficultyMatch;
  });
}

function updateAvailability() {
  const count = availableQuestions().length;
  $("#availability").innerHTML = "<strong>" + count + "</strong> questões disponíveis com estes filtros.";
  $("#setupForm button[type='submit']").disabled = count === 0;
}

function updateTopicOptions() {
  const selectedSubject = subjectFilter.value;
  const current = topicFilter.value;
  const topics = Array.from(new Set(QUESTIONS.filter(function(question) {
    return selectedSubject === "Todas" || question.subject === selectedSubject;
  }).map(function(question) { return question.topic; }))).sort();
  topicFilter.innerHTML = '<option value="Todos">Todos os assuntos</option>' + topics.map(function(topic) {
    return '<option value="' + escapeHtml(topic) + '">' + escapeHtml(topic) + '</option>';
  }).join("");
  if (topics.includes(current)) topicFilter.value = current;
  updateAvailability();
}

subjectFilter.addEventListener("change", updateTopicOptions);
topicFilter.addEventListener("change", updateAvailability);
difficultyFilter.addEventListener("change", updateAvailability);
questionCount.addEventListener("change", updateAvailability);

function shuffle(items) {
  const result = items.slice();
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temporary = result[i];
    result[i] = result[j];
    result[j] = temporary;
  }
  return result;
}

$("#setupForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const available = shuffle(availableQuestions());
  if (!available.length) {
    showToast("Nenhuma questão corresponde aos filtros.");
    return;
  }
  const desired = questionCount.value === "all" ? available.length : Number(questionCount.value);
  const selected = available.slice(0, Math.min(desired, available.length));
  startQuiz(selected);
});

function startQuiz(selected) {
  quizState = {
    questions: selected,
    answers: new Array(selected.length).fill(null),
    current: 0,
    startedAt: Date.now(),
    secondsLeft: selected.length * 90,
    timerEnabled: $("#timerToggle").checked,
    finished: false
  };
  lastResult = null;
  $("#quizMeta").textContent = subjectFilter.value === "Todas" ? "Simulado misto · BACEN Técnico" : subjectFilter.value;
  showScreen("quiz");
  renderNavigator();
  renderQuestion();
  startTimer();
}

function startTimer() {
  window.clearInterval(timerInterval);
  if (!quizState.timerEnabled) {
    $("#timerDisplay").textContent = "Sem limite";
    return;
  }
  renderTimer();
  timerInterval = window.setInterval(function() {
    if (!quizState || quizState.finished) return;
    quizState.secondsLeft -= 1;
    renderTimer();
    if (quizState.secondsLeft <= 0) {
      window.clearInterval(timerInterval);
      showToast("Tempo encerrado. O simulado foi concluído.");
      finishQuiz();
    }
  }, 1000);
}

function renderTimer() {
  const minutes = Math.floor(quizState.secondsLeft / 60);
  const seconds = quizState.secondsLeft % 60;
  $("#timerDisplay").textContent = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}

function renderQuestion() {
  const question = quizState.questions[quizState.current];
  $("#questionNumber").textContent = String(quizState.current + 1).padStart(2, "0");
  $("#questionTags").textContent = question.subject + " · " + question.topic + " · " + question.difficulty;
  $("#questionText").textContent = question.statement;
  $$(".answer-button").forEach(function(button) {
    let value = button.dataset.answer;
    if (value === "true") value = true;
    if (value === "false") value = false;
    button.classList.toggle("selected", quizState.answers[quizState.current] === value);
  });
  $("#previousButton").disabled = quizState.current === 0;
  $("#nextButton").textContent = quizState.current === quizState.questions.length - 1 ? "Revisar itens" : "Próxima";
  $("#progressBar").style.width = ((quizState.current + 1) / quizState.questions.length * 100) + "%";
  renderNavigator();
}

$$(".answer-button").forEach(function(button) {
  button.addEventListener("click", function() {
    let value = button.dataset.answer;
    if (value === "true") value = true;
    if (value === "false") value = false;
    quizState.answers[quizState.current] = value;
    renderQuestion();
  });
});

$("#previousButton").addEventListener("click", function() {
  if (quizState.current > 0) {
    quizState.current -= 1;
    renderQuestion();
  }
});

$("#nextButton").addEventListener("click", function() {
  if (quizState.current < quizState.questions.length - 1) {
    quizState.current += 1;
    renderQuestion();
  } else {
    const firstUnanswered = quizState.answers.findIndex(function(answer) { return answer === null; });
    if (firstUnanswered >= 0) {
      quizState.current = firstUnanswered;
      renderQuestion();
      showToast("Você voltou ao primeiro item não marcado.");
    } else {
      showToast("Todos os itens foram marcados. Você já pode concluir.");
    }
  }
});

function renderNavigator() {
  if (!quizState) return;
  const marked = quizState.answers.filter(function(answer) { return answer !== null; }).length;
  $("#answeredCount").textContent = marked + "/" + quizState.questions.length + " marcadas";
  $("#questionNavigator").innerHTML = quizState.questions.map(function(question, index) {
    const classes = [];
    if (quizState.answers[index] !== null) classes.push("done");
    if (index === quizState.current) classes.push("current");
    return '<button class="' + classes.join(" ") + '" data-index="' + index + '" aria-label="Ir para o item ' + (index + 1) + '">' + (index + 1) + '</button>';
  }).join("");
  $$("#questionNavigator button").forEach(function(button) {
    button.addEventListener("click", function() {
      quizState.current = Number(button.dataset.index);
      renderQuestion();
    });
  });
}

function openDialog(action, title, text) {
  const labels = {finish:"Concluir agora", abandon:"Sair sem salvar", clear:"Limpar histórico"};
  pendingDialogAction = action;
  $("#dialogTitle").textContent = title;
  $("#dialogText").textContent = text;
  $("#confirmFinishButton").textContent = labels[action] || "Confirmar";
  $("#confirmDialog").showModal();
}

$("#finishButton").addEventListener("click", function() {
  const blank = quizState.answers.filter(function(answer) { return answer === null || answer === "blank"; }).length;
  const message = blank ? "Há " + blank + " item(ns) em branco. Eles valerão zero ponto." : "Todas as questões foram marcadas.";
  openDialog("finish", "Concluir simulado?", message);
});

$("#exitQuizButton").addEventListener("click", function() {
  openDialog("abandon", "Sair do simulado?", "As respostas desta tentativa não serão salvas.");
});

$("#confirmDialog").addEventListener("close", function() {
  if (this.returnValue !== "confirm") {
    pendingDialogAction = null;
    return;
  }
  if (pendingDialogAction === "finish") finishQuiz();
  if (pendingDialogAction === "abandon") {
    window.clearInterval(timerInterval);
    quizState = null;
    showScreen("setup");
    showToast("Tentativa descartada.");
  }
  if (pendingDialogAction === "clear") {
    localStorage.removeItem(STORAGE_KEY);
    renderDashboard();
    showToast("Histórico removido.");
  }
  pendingDialogAction = null;
});

$("#clearHistoryButton").addEventListener("click", function() {
  openDialog("clear", "Limpar histórico?", "Essa ação remove todos os resultados salvos neste navegador.");
});

function finishQuiz() {
  if (!quizState || quizState.finished) return;
  quizState.finished = true;
  window.clearInterval(timerInterval);

  const details = quizState.questions.map(function(question, index) {
    const userAnswer = quizState.answers[index];
    let result = "blank";
    if (userAnswer === true || userAnswer === false) {
      result = userAnswer === question.answer ? "correct" : "wrong";
    }
    return {
      id: question.id,
      position: index + 1,
      subject: question.subject,
      topic: question.topic,
      difficulty: question.difficulty,
      statement: question.statement,
      correctAnswer: question.answer,
      userAnswer: userAnswer,
      comment: question.comment,
      result: result
    };
  });

  const correct = details.filter(function(item) { return item.result === "correct"; }).length;
  const wrong = details.filter(function(item) { return item.result === "wrong"; }).length;
  const blank = details.filter(function(item) { return item.result === "blank"; }).length;
  const score = correct - wrong;
  const elapsed = Math.max(1, Math.round((Date.now() - quizState.startedAt) / 1000));
  const label = subjectFilter.value === "Todas" ? "Simulado misto" : subjectFilter.value;
  lastResult = {
    date: new Date().toISOString(),
    label: label,
    difficulty: difficultyFilter.value,
    total: details.length,
    correct: correct,
    wrong: wrong,
    blank: blank,
    score: score,
    elapsed: elapsed,
    details: details
  };

  const history = getHistory();
  history.unshift(lastResult);
  saveHistory(history);
  renderResult(lastResult);
  showScreen("result");
}

function renderResult(result) {
  $("#resultScore").textContent = result.score > 0 ? "+" + result.score : result.score;
  $("#resultMax").textContent = "de " + result.total + " pontos possíveis";
  $("#resultCorrect").textContent = result.correct;
  $("#resultWrong").textContent = result.wrong;
  $("#resultBlank").textContent = result.blank;
  $("#resultAccuracy").textContent = percent(result.correct, result.correct + result.wrong) + "%";
  const minutes = Math.floor(result.elapsed / 60);
  const seconds = result.elapsed % 60;
  $("#resultSubtitle").textContent = result.label + " · concluído em " + minutes + "min " + seconds + "s";
  $("#reviewFilter").value = "all";
  renderReview("all");
}

function renderReview(filter) {
  if (!lastResult) return;
  const labels = {correct:"Correta", wrong:"Errada", blank:"Em branco"};
  const items = lastResult.details.filter(function(item) {
    return filter === "all" || item.result === filter;
  });
  $("#reviewList").innerHTML = items.map(function(item, index) {
    const given = item.userAnswer === true ? "Certo" : item.userAnswer === false ? "Errado" : "Em branco";
    const expected = item.correctAnswer ? "Certo" : "Errado";
    return '<article class="review-item ' + item.result + '">' +
      '<div class="review-top"><span>ITEM ' + String(item.position || index + 1).padStart(2, "0") + ' · ' + escapeHtml(item.subject) + ' · ' + escapeHtml(item.topic) + '</span><span class="review-status">' + labels[item.result] + '</span></div>' +
      '<p>' + escapeHtml(item.statement) + '</p>' +
      '<div class="answer-line"><span>Sua resposta: <strong>' + given + '</strong></span><span>Gabarito: <strong>' + expected + '</strong></span></div>' +
      '<div class="commentary"><strong>Comentário:</strong> ' + escapeHtml(item.comment) + '</div>' +
    '</article>';
  }).join("");
}

$("#reviewFilter").addEventListener("change", function() {
  renderReview(this.value);
});

document.addEventListener("keydown", function(event) {
  if (!quizState || quizState.finished || !$("#quizScreen").classList.contains("active")) return;
  if (event.target.matches("input, select, textarea")) return;
  const key = event.key.toLowerCase();
  if (key === "c") document.querySelector('[data-answer="true"]').click();
  if (key === "e") document.querySelector('[data-answer="false"]').click();
  if (key === "b") document.querySelector('[data-answer="blank"]').click();
  if (event.key === "ArrowRight") $("#nextButton").click();
  if (event.key === "ArrowLeft") $("#previousButton").click();
});

prepareLogin();
updateTopicOptions();
if (sessionStorage.getItem(AUTH_KEY) === "1") unlockApp();
