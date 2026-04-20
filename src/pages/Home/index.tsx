import React from 'react';
import './styles.css';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="header-section">
        <div className="header-content">
          <div className="intro">
            <h1>Jackson Willer Macedo Duarte</h1>
            <p className="title">Desenvolvedor Full Stack · .NET · Cloud-Native · Microsserviços · IA Aplicada</p>
            <p className="tagline">
              6+ anos de experiência em desenvolvimento de software com foco em soluções escaláveis, cloud-native e IA aplicada.
            </p>
          </div>
          <div className="contact-info">
            <a href="mailto:jacksonwillerduarte@gmail.com" className="contact-link">
              <Mail size={20} /> jacksonwillerduarte@gmail.com
            </a>
            <a href="tel:+5538991860532" className="contact-link">
              <Phone size={20} /> (38) 99186-0532
            </a>
            <a href="https://linkedin.com/in/jackson-duarte-6b5748140" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/jacksonWiller" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Github size={20} /> GitHub
            </a>
            <div className="contact-link">
              <MapPin size={20} /> Januária - MG, Brasil
            </div>
          </div>
        </div>
      </header>

      {/* Sobre */}
      <section className="about-section">
        <h2>Resumo Profissional</h2>
        <p>
          Desenvolvedor Full Stack com mais de 6 anos de experiência em desenvolvimento de software, atuando em soluções cloud-native, microsserviços, modernização de sistemas legados e construção de aplicações escaláveis com foco em performance, manutenção e valor de negócio.
        </p>
        <p>
          Ampliando atuação em IA aplicada ao desenvolvimento, com experiência no uso de Claude Code, GitHub Copilot, prompt engineering, criação de agentes e integração com MCPs (Model Context Protocol Servers) para acelerar produtividade, automação de tarefas e apoio à engenharia de software.
        </p>
        <p>
          Sólida atuação com SOLID, DDD, Clean Code, CI/CD e arquitetura orientada a serviços, colaborando em times ágeis e ambientes de alta demanda técnica.
        </p>
      </section>

      {/* Experiência */}
      <section className="experience-section">
        <h2>Experiência Profissional</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-header">
              <h3>Desenvolvedor de Software</h3>
              <span className="company">Code n'App</span>
              <span className="period">Jul 2025 – Jan 2026</span>
            </div>
            <ul className="highlights">
              <li>Mantive e evolui sistemas previdenciários legados com foco em estabilidade e confiabilidade</li>
              <li>Refatorei código para melhoria de manutenção, legibilidade e estabilidade</li>
              <li>Otimizei procedures SQL e prestei suporte à melhoria de performance</li>
              <li>Desenvolvi e mantive APIs REST</li>
              <li>Automatizei pipelines com Azure DevOps</li>
            </ul>
            <div className="tech-tags">
              <span>.NET</span>
              <span>C#</span>
              <span>SQL Server</span>
              <span>Azure DevOps</span>
              <span>CI/CD</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-header">
              <h3>Analista Desenvolvedor</h3>
              <span className="company">Magma3</span>
              <span className="period">Nov 2023 – Abr 2025</span>
            </div>
            <ul className="highlights">
              <li>Desenvolvi soluções com .NET e MongoDB em ambiente orientado a escalabilidade</li>
              <li>Construí e mantive aplicações serverless na AWS</li>
              <li>Monitorei sistemas e prestei suporte à observabilidade com foco em estabilidade</li>
              <li>Evolui serviços em arquitetura moderna e distribuída</li>
            </ul>
            <div className="tech-tags">
              <span>.NET</span>
              <span>MongoDB</span>
              <span>AWS Lambda</span>
              <span>CloudWatch</span>
              <span>Serverless</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-header">
              <h3>Analista Desenvolvedor Mid/Sênior</h3>
              <span className="company">TOTVS</span>
              <span className="period">Mai 2023 – Dez 2023</span>
            </div>
            <ul className="highlights">
              <li>Modernização de sistemas legados</li>
              <li>Desenvolvi aplicações em WinForms com participação em processos de migração tecnológica</li>
              <li>Apliquei boas práticas de Clean Code, testes e refatorações estruturadas</li>
              <li>Melhorei qualidade de código e suporte à evolução arquitetural</li>
            </ul>
            <div className="tech-tags">
              <span>.NET</span>
              <span>WinForms</span>
              <span>Clean Code</span>
              <span>Refatoração</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-header">
              <h3>Analista Desenvolvedor</h3>
              <span className="company">NTT DATA</span>
              <span className="period">Fev 2022 – Mai 2023</span>
            </div>
            <ul className="highlights">
              <li>Desenvolvi soluções com C#, .NET e Angular</li>
              <li>Utilizei Azure DevOps, GitHub e Figma no ciclo de desenvolvimento</li>
              <li>Aplicação de DDD, SOLID e arquitetura de microsserviços</li>
              <li>Criação de módulos críticos para gestão de materiais em obras civis</li>
            </ul>
            <div className="tech-tags">
              <span>C#</span>
              <span>.NET</span>
              <span>Angular</span>
              <span>DDD</span>
              <span>Microsserviços</span>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="skills-section">
        <h2>Habilidades Técnicas</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Linguagens & Frameworks</h3>
            <div className="skill-list">
              <span className="skill-tag">C#</span>
              <span className="skill-tag">.NET Core</span>
              <span className="skill-tag">ASP.NET</span>
              <span className="skill-tag">Angular</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Arquitetura & Engenharia</h3>
            <div className="skill-list">
              <span className="skill-tag">Microsserviços</span>
              <span className="skill-tag">APIs REST</span>
              <span className="skill-tag">Serverless</span>
              <span className="skill-tag">Clean Code</span>
              <span className="skill-tag">SOLID</span>
              <span className="skill-tag">DDD</span>
              <span className="skill-tag">Legados</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Cloud & DevOps</h3>
            <div className="skill-list">
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Azure</span>
              <span className="skill-tag">Azure DevOps</span>
              <span className="skill-tag">GitHub Actions</span>
              <span className="skill-tag">CI/CD</span>
              <span className="skill-tag">Docker</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Banco de Dados</h3>
            <div className="skill-list">
              <span className="skill-tag">SQL Server</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MongoDB</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>IA & Ferramentas</h3>
            <div className="skill-list">
              <span className="skill-tag">Claude Code</span>
              <span className="skill-tag">GitHub Copilot</span>
              <span className="skill-tag">Prompt Engineering</span>
              <span className="skill-tag">MCPs</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Figma</span>
            </div>
          </div>
        </div>
      </section>

      {/* Educação */}
      <section className="education-section">
        <h2>Educação & Certificações</h2>
        <div className="education-items">
          <div className="education-item">
            <h3>Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
            <p className="school">UNIASSELVI • Conclusão: Jul 2024</p>
          </div>
          <div className="education-item">
            <h3>Certificação</h3>
            <p className="school">ASP.NET Core Enterprise Applications</p>
          </div>
          <div className="education-item">
            <h3>Idiomas</h3>
            <p className="school">Português: Nativo | Inglês: Avançado (B2) | Espanhol: Básico</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
