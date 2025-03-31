// lib/auth.ts
let adminAuthenticated = false;

export const setAdminAuthenticated = (value: boolean) => {
  adminAuthenticated = value;
};

export const isAdminAuthenticated = () => {
  return adminAuthenticated;
}; 
