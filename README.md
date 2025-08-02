# ts-codex

🚀 **ts-codex** é um monorepo modular e escalável contendo bibliotecas TypeScript reutilizáveis voltadas para produtividade, integração de sistemas, cálculos matemáticos e manipulação de dados estruturados como PDF e XML.

Cada pacote é distribuído individualmente no NPM sob o escopo `@ts-codex`.

---

## 📦 Pacotes

| Pacote              | Descrição                                                                 |
|---------------------|---------------------------------------------------------------------------|
| [`@ts-codex/utils`](packages/utils)     | Funções utilitárias para manipulação de dados, datas, horários, etc.     |
| [`@ts-codex/pdf`](packages/pdf)         | 📄 **Em construção**: Criação e manipulação de arquivos PDF               |
| [`@ts-codex/math`](packages/math)       | Funções matemáticas e estatísticas de uso comum                         |
| [`@ts-codex/xml`](packages/xml)         | 📦 **Em construção**: Leitura, parsing e transformação de arquivos XML    |
| [`@ts-codex/integra`](packages/integra) | Integrações com APIs e estruturas externas de dados                     |

---

## 📁 Estrutura

```bash
ts-codex/
├── packages/
│   ├── utils/
│   ├── pdf/
│   ├── math/
│   ├── xml/
│   └── integra/
├── tsconfig.base.json
├── package.json
├── README.md
└── ...
