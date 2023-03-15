export const useAuth = () =>
  useState(() => ({
    isAuthenticated: false,
  }));
