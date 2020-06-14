function shape(a: number, b: number) {
  return a * b;
}
console.log("===", shape(5, 2));

type Username = string | number | null;
type UserType = "Customer" | "Bussiness" | "SuperUser";

interface User {
  id: number;
  username: Username;
  address: string;
  userType?: UserType;
  city?: string;
  state?: string;
  getUsername?: (username: string) => string;
  getId?: () => number;
}

interface Customer extends User {
  name: string;
}
const users: User[] = [
  { id: 1, username: 9851109913, address: "Ktm", city: "ktm" },
  { id: 2, username: "user2", address: "Ktm 1", userType: "Customer" },
  { id: 3, username: "user3", address: "Ktm 2" },
  { id: 4, username: "user4", address: "Ktm 3" },
  { id: 5, username: "user5", address: "Ktm 4" },
  { id: 6, username: "user6", address: "Ktm 5" },
  { id: 7, username: "user7", address: "Ktm 6" },
  { id: 8, username: "user8", address: "Ktm 7" },
  { id: 8, username: "user88", address: "Ktm 8" },
];

const customer: Customer = {
  name: "Padma",
  id: 3,
  username: "user3",
  address: "Ktm 2",
};

interface Animal {
  name: string;
  type: string;
}

interface WildAnimal extends Animal {}

interface DomAnimal extends Animal {
  isPet: boolean;
}

class BusinessUser implements User {
  id = 1;
  username = "Username";
  address = "string";
  getUsername(username: string) {
    return this.username;
  }
}
