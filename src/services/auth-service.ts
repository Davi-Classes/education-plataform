import { API_URL } from "../lib/api";
import { TOKEN_KEY } from "../lib/token";


type SignInPayload = {
  email: string;
  password: string;
}

type TokenResponse = {
  token: string;
}


export type User = {
  id: string;
  name: string;
  email: string;
}

async function getUser(): Promise<User> {
  const accessToken = localStorage.getItem(TOKEN_KEY)

  const res = await fetch(`${API_URL}/me`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })

  if (!res.ok) {
    const body = await res.json()
    throw new Error(body.detail)
  }

  return res.json()
}

async function signIn(payload: SignInPayload): Promise<TokenResponse> {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  
  const res = await fetch(`${API_URL}/sign-in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (!res.ok) {
    const body = await res.json()
    throw new Error(body.detail)
  }

  return res.json()
}

export default {
  signIn,
  getUser
}