# 📄 Portfólio Profissional - Jackson Willer

Uma página estática de portfólio profissional desenvolvida com React + Vite, otimizada para GitHub Pages com deploy automático via GitHub Actions.

## 🎯 Projeto

Este é um **portfólio profissional estático** que apresenta:

- **Informações Pessoais**: Dados de contato e links para redes sociais (LinkedIn, GitHub)
- **Resumo Profissional**: Descrição da experiência e foco em tecnologias
- **Experiência Profissional**: Timeline visual com 6 posições anteriores e detalhes de cada role
- **Habilidades Técnicas**: Categorizado por:
  - Linguagens & Frameworks
  - Arquitetura & Engenharia de Software
  - Cloud & DevOps
  - Banco de Dados
  - IA & Ferramentas

- **Educação & Certificações**: Formação acadêmica e certificações técnicas
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile

## 🛠️ Tecnologias & Configurações

### Stack Tecnológico

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 18.2.0 | Framework UI principal |
| **Vite** | 5.4.10 | Bundler e dev server |
| **TypeScript** | 5.4.5 | Type-safety |
| **React Router DOM** | 6.26.2 | Roteamento (HashRouter para estático) |
| **Lucide React** | 0.460.0 | Ícones SVG |

### Dependências DevOps

| Ferramenta | Propósito |
|-----------|----------|
| **Terser** | Minificação de JavaScript |
| **ESLint** | Linting de código |
| **TypeScript Compiler** | Compilação TS → JS |

## 🚀 Como Transformar React em Página Estática

### Configurações Principais

#### 1. **vite.config.ts** - Usar caminhos relativos

```typescript
export default defineConfig({
  base: './',  // ← Essencial para file:// e GitHub Pages
  plugins: [react()],
  // ...outras configs
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,
  },
})
```

**Por quê?** O `base: './'` faz com que todos os imports de assets usem caminhos relativos (`./assets/`) em vez de absolutos (`/assets/`), permitindo que a página funcione tanto localmente quanto em GitHub Pages.

#### 2. **src/App.tsx** - Usar HashRouter

```typescript
import { HashRouter, Routes, Route } from "react-router-dom";

// BrowserRouter ❌ - Não funciona com file://
// HashRouter ✅ - Funciona com file:// e GitHub Pages

export const App: React.FC = () => {
  return (
    <HashRouter>  {/* ← Permite routing estático */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
};
```

#### 3. **Build Process**

```bash
npm run build
```

Gera a pasta `dist/` com:
- `index.html` - HTML minificado
- `assets/` - CSS, JS e imagens minificadas
- Todos os assets com **caminhos relativos**

#### 4. **Testar Localmente (sem servidor Node)**

```bash
# Opção 1: Abrir direto no navegador
start dist/index.html

# Opção 2: Com servidor local (opcional)
npm run preview  # Usa servidor do Vite
```

## 📤 Deploy no GitHub Pages

### Pré-requisitos

1. Repositório Git criado
2. Account GitHub
3. Arquivo `package-lock.json` (incluído no build)

### Processo Completo

#### 1. Criar Repositório

```bash
# Se ainda não tiver git
git init
git add .
git commit -m "Initial commit: Add resume portfolio"
```

#### 2. Configurar Repositório no GitHub

```bash
# Adicionar remote
git remote add origin https://github.com/SEU_USUARIO/resume-site.git
git branch -M main
git push -u origin main
```

#### 3. GitHub Actions - Deploy Automático

O arquivo `.github/workflows/deploy.yml` faz tudo automaticamente:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: "./dist"

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - uses: actions/deploy-pages@v5
```

**O que faz?**
1. ✅ Detecta push na branch `main`
2. ✅ Instala dependências
3. ✅ Roda `npm run build`
4. ✅ Faz upload da pasta `dist/`
5. ✅ Deploy automático no GitHub Pages

#### 4. Configurar GitHub Pages (uma única vez)

1. Vá em **Settings** → **Pages**
2. Em "Source", selecione:
   - Branch: `main`
   - Folder: `/ (root)`
3. Clique em Save

**Resultado:** Seu site estará disponível em `https://seu-usuario.github.io/resume-site`

### Fazer Deploy

```bash
# 1. Fazer um commit e push qualquer
git add .
git commit -m "Update portfolio"
git push

# 2. GitHub Actions executa automaticamente
# 3. Seu site é atualizado em ~2 minutos
```

## 📁 Estrutura do Projeto

```
resume_site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── pages/
│   │   └── Home/
│   │       ├── index.tsx       # Página principal (currículo)
│   │       └── styles.css      # Estilos da página
│   ├── App.tsx                 # Router com HashRouter
│   ├── main.tsx                # Entry point React
│   └── index.css               # Estilos globais
├── dist/                       # Build output (estático)
├── vite.config.ts              # Config Vite (base: './')
├── tsconfig.json               # TypeScript config
├── package.json                # Dependências
├── package-lock.json           # Lock file (necessário para Actions)
└── README.md                    # Este arquivo
```

## 🎨 Design & UX

- **Cores**: Gradiente roxo/azul (#667eea → #764ba2)
- **Layout**: Card-based, responsivo
- **Typography**: System fonts para melhor performance
- **Icons**: Lucide React para consistência
- **Acessibilidade**: Semântica HTML, contrast adequado

## 🔧 Comandos Principais

```bash
# Desenvolvimento
npm run dev              # Abre dev server em http://localhost:5173
npm run build            # Cria build estático em dist/
npm run preview          # Serve dist/ com preview server
npm run lint             # Verifica código com ESLint

# Deploy
git push origin main     # Trigger GitHub Actions
```

## 📊 Performance

- **Bundle Size**: ~175KB (JS), ~7KB (CSS minificados + gzip)
- **Build Time**: ~3 segundos
- **Lighthouse**: 💯 Performance, 💯 Accessibility, 💯 Best Practices (típico)

## 🔐 Segurança

- ✅ Nenhuma API sensível exposta
- ✅ Conteúdo estático (sem código de servidor)
- ✅ HTTPS automático no GitHub Pages
- ✅ Sem dependências perigosas

## 📝 Customização

### Mudar Cores

Edite `src/pages/Home/styles.css`:

```css
/* Altere estes valores */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: #667eea;
```

### Adicionar Seções

1. Crie o componente em `src/components/`
2. Importe em `src/pages/Home/index.tsx`
3. Adicione a seção HTML
4. Rode `npm run build`

### Mudar Informações

Edite `src/pages/Home/index.tsx` e atualize:
- Nome, títulos, experiências
- Links de contato
- Habilidades e educação

## 🚀 Próximos Passos

- [ ] Adicionar página de projetos
- [ ] Integrar com Formspree para contato
- [ ] Adicionar dark mode
- [ ] Criar versão para download (PDF)
- [ ] Analytics (Google Analytics)

## 📄 Licença

MIT - Livre para usar e modificar

## 📞 Contato

- **Email**: jacksonwillerduarte@gmail.com
- **LinkedIn**: [jackson-duarte-6b5748140](https://linkedin.com/in/jackson-duarte-6b5748140)
- **GitHub**: [@jacksonWiller](https://github.com/jacksonWiller)

---

## ⚡ Dúvidas Frequentes

### P: Por que usar Vite em vez de Create React App?
**R:** Vite é muito mais rápido (~3x), tem melhor suporte para build estático e é mais moderno.

### P: Posso usar BrowserRouter?
**R:** Não, não funcionará com `file://`. Use `HashRouter` para estático ou configure um redirect em 404.html para custom domains.

### P: Preciso de servidor?
**R:** Não! É 100% estático. Pode servir via GitHub Pages, Netlify, Vercel, ou até um pendrive.

### P: Como atualizar o site?
**R:** Edite o código, rode `npm run build`, faça `git push`. GitHub Actions faz deploy automaticamente.

### P: Quanto custa?
**R:** Totalmente grátis no GitHub Pages!