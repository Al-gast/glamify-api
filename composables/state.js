export const useAuth = () =>
  useState(() => ({
    isAuthenticated: false,
  }));

export const token = ref(null);
