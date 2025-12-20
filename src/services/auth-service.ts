import { API_URL } from "../lib/api";


type SignInPayload = {
  email: string;
  password: string;
}

type TokenResponse = {
  token: string;
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
  signIn
}