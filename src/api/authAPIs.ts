import axiosInstance from "@/services/axios";


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

    const response = await axiosInstance.post(`/signup`, { name, email, password });
    // if (!response.ok) throw new Error('Login failed');
    return response
  } catch (err) {
    // return null
    throw err;
  }
}

async function loginUser({ email, password }: { email: string; password: string }) {
  try {
    if (!baseURL) throw new Error("Base URL not found");
    
    const response = await axiosInstance.post(`/login`, { email, password });
    // const response = await fetch(`${baseURL}/login`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    //   credentials: 'include',
    // })
    // .then(response => response.json())
    
    // Log the Set-Cookie header directly
    // console.log('Set-Cookie header:', response.headers['set-cookie']);
    
    // Give browser a moment to process the cookie
    // await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Log complete cookie string
    console.log('document.cookie:', document.cookie);
    
    const cookie = document.cookie;
    if (!cookie)
      throw new Error('cookie not found');

      return { username: response.data.name, token: cookie };
  } catch (err) {
    throw err;
  }
}

export { createUser, loginUser };
