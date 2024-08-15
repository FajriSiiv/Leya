import axios from "axios";
import AboutComp from "./AboutComp";

async function fetchUsers() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div>
      <h1>Daftar Pengguna</h1>
      <AboutComp users={users} />
    </div>
  );
}
