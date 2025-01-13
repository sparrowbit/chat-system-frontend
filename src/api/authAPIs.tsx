const baseURL = import.meta.env.VITE_BASE_API_URL;
async function createUser({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    if (!baseURL) throw new Error("Base URL not found");
    const response = await fetch(`${baseURL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    // if (!response.ok) throw new Error('Login failed');
    return await response.json();
  } catch (err) {
    console.log("ERROR");
    console.error(err);
    throw err;
  }
}

async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    if (!baseURL) throw new Error("Base URL not found");

    const response = await fetch(`${baseURL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error("Login failed");
    return await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export { createUser, loginUser };
