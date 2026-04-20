import React, { useState } from 'react';
import { authService } from '../../services/api/authService';
import arda9Logo from '../../assets/arda9-logo.png';
import './styles.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await authService.login({ email, password });

      if (response.success) {
        // Redirecionar para dashboard ou home
        window.location.href = '/';
      } else {
        setError(response.message || 'Erro ao fazer login');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao fazer login. Verifique suas credenciais.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Por favor, digite seu email primeiro');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await authService.forgotPassword(email);
      
      if (response.success) {
        alert('Instruções de recuperação enviadas para seu email!');
        setShowForgotPassword(false);
      } else {
        setError(response.message || 'Erro ao enviar email de recuperação');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao processar solicitação');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        {/* Logo e Título */}
        <div className="login-header">
          <div className="logo-container">
            <img src={arda9Logo} alt="ARDA9 Logo" className="logo-image" />
          </div>
          <h1 className="logo-text">ARDA9 Template</h1>
          <p className="login-subtitle">
            Bem-vindo de volta! Por favor, insira seus dados.
          </p>
        </div>

        {/* Formulário */}
        <div className="login-form-container">
          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <div className="error-message">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email ou usuário
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="seu@email.com"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <div className="form-label-row">
                <label htmlFor="password" className="form-label">
                  Senha
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(!showForgotPassword)}
                  className="forgot-password-btn"
                  disabled={loading}
                >
                  Esqueceu a senha?
                </button>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder="••••••••"
                disabled={loading}
              />
            </div>

            {showForgotPassword && (
              <div className="forgot-password-card">
                <p className="forgot-password-text">
                  Digite seu email acima e clique no botão abaixo para receber instruções de recuperação.
                </p>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="btn-secondary"
                  disabled={loading || !email}
                >
                  {loading ? 'Enviando...' : 'Enviar email de recuperação'}
                </button>
              </div>
            )}

            <button
              type="submit"
              className="btn-primary btn-submit"
              disabled={loading}
            >
              {loading ? (
                <span className="loading-spinner">
                  <svg className="spinner" viewBox="0 0 24 24">
                    <circle
                      className="spinner-circle"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                  </svg>
                  Entrando...
                </span>
              ) : (
                'Entrar'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
