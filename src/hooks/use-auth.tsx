import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

/**
 * Lightweight, client-side auth for demo/dev purposes.
 * Accounts are stored in the browser's localStorage — this is NOT secure
 * storage for real user data (passwords are stored in plain text). It exists
 * so the login/signup/account flow is fully functional without a backend.
 *
 * To go to production, replace the implementation of signUp/signIn/signOut
 * below with calls to a real auth provider (e.g. Supabase Auth) — the
 * consuming components (Navbar, Login, Signup) won't need to change since
 * they only depend on the useAuth() hook's shape.
 */

type StoredUser = {
  name: string;
  email: string;
  password: string;
};

type AuthUser = {
  name: string;
  email: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  loading: boolean;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};

const USERS_KEY = "astraluna_users";
const SESSION_KEY = "astraluna_session";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function readUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as StoredUser[]) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const sessionEmail = localStorage.getItem(SESSION_KEY);
      if (sessionEmail) {
        const found = readUsers().find((u) => u.email === sessionEmail);
        if (found) {
          setUser({ name: found.name, email: found.email });
        }
      }
    } finally {
      setLoading(false);
    }
  }, []);

  async function signUp(name: string, email: string, password: string) {
    const normalizedEmail = email.trim().toLowerCase();
    const users = readUsers();

    if (users.some((u) => u.email === normalizedEmail)) {
      throw new Error("An account with this email already exists.");
    }

    const newUser: StoredUser = { name: name.trim(), email: normalizedEmail, password };
    writeUsers([...users, newUser]);
    localStorage.setItem(SESSION_KEY, normalizedEmail);
    setUser({ name: newUser.name, email: newUser.email });
  }

  async function signIn(email: string, password: string) {
    const normalizedEmail = email.trim().toLowerCase();
    const users = readUsers();
    const found = users.find((u) => u.email === normalizedEmail && u.password === password);

    if (!found) {
      throw new Error("Invalid email or password.");
    }

    localStorage.setItem(SESSION_KEY, normalizedEmail);
    setUser({ name: found.name, email: found.email });
  }

  function signOut() {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}