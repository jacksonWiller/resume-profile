import { apiClient, ApiResponse } from './apiClient.ts';

// Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  accessToken: string;
  idToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  phoneNumber?: string;
}

export interface RegisterResponse {
  success: boolean;
  userSub: string;
  userConfirmed: boolean;
  message: string;
}

export interface UserInfo {
  username: string;
  email: string;
  name: string;
  phoneNumber?: string;
  emailVerified: boolean;
  sub: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  success: boolean;
  accessToken: string;
  idToken: string;
  expiresIn: number;
  tokenType: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  email: string;
  code: string;
  newPassword: string;
}

// Auth Service
export const authService = {
  // Login
  login: async (data: LoginRequest): Promise<ApiResponse<LoginResponse>> => {
    const response = await apiClient.post<LoginResponse>('/api/Auth/login', data);
    
    // Salvar tokens no localStorage
    if (response.success && response.data) {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('idToken', response.data.idToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      localStorage.setItem('authToken', response.data.accessToken); // Para compatibilidade
    }
    
    return response;
  },

  // Register
  register: async (data: RegisterRequest): Promise<ApiResponse<RegisterResponse>> => {
    return apiClient.post<RegisterResponse>('/api/Auth/register', data);
  },

  // Get current user info
  getUserInfo: async (): Promise<ApiResponse<UserInfo>> => {
    return apiClient.get<UserInfo>('/api/Auth/me');
  },

  // Logout
  logout: async (): Promise<ApiResponse<any>> => {
    const response = await apiClient.post<any>('/api/Auth/logout', {});
    
    // Limpar tokens
    localStorage.removeItem('accessToken');
    localStorage.removeItem('idToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentTenantId');
    
    return response;
  },

  // Refresh token
  refreshToken: async (): Promise<ApiResponse<RefreshTokenResponse>> => {
    const refreshToken = localStorage.getItem('refreshToken');
    
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await apiClient.post<RefreshTokenResponse>('/api/Auth/refresh', {
      refreshToken
    });

    if (response.success && response.data) {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('idToken', response.data.idToken);
      localStorage.setItem('authToken', response.data.accessToken);
    }

    return response;
  },

  // Forgot password
  forgotPassword: async (email: string): Promise<ApiResponse<any>> => {
    return apiClient.post<any>('/api/Auth/forgot-password', { email });
  },

  // Reset password
  resetPassword: async (data: ResetPasswordRequest): Promise<ApiResponse<any>> => {
    return apiClient.post<any>('/api/Auth/reset-password', data);
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    const token = localStorage.getItem('accessToken');
    return !!token;
  },

  // Get access token
  getAccessToken: (): string | null => {
    return localStorage.getItem('accessToken');
  }
};
