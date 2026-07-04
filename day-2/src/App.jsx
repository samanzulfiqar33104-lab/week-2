const users = [
  {
    id: 1,
    name: "Saman Zulfiqar",
    role: "Frontend Developer",
    email: "saman@example.com",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
];

const team = [
  {
    id: 1,
    name: "Emma Watson",
    position: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "James Smith",
    position: "React Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Sophia Lee",
    position: "Backend Developer",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    position: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
];

function UserCard({ user }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-80 hover:scale-105 transition">
      <img
        src={user.image}
        alt={user.name}
        className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500 object-cover"
      />

      <h2 className="text-2xl font-bold text-center mt-4">{user.name}</h2>

      <p className="text-center text-gray-500">{user.role}</p>

      <p className="text-center text-sm text-gray-400 mt-2">
        {user.email}
      </p>

      <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
        View Profile
      </button>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-80 hover:-translate-y-2 transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-52 w-full object-cover"
      />

      <div className="p-6">
        <h2 className="text-xl font-bold">{product.name}</h2>

        <p className="text-blue-600 text-2xl font-bold mt-3">
          {product.price}
        </p>

        <button className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function TeamCard({ member }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      <img
        src={member.image}
        alt={member.name}
        className="w-28 h-28 rounded-full mx-auto border-4 border-indigo-500 object-cover"
      />

      <h2 className="text-xl font-bold mt-4">{member.name}</h2>

      <p className="text-gray-500">{member.position}</p>

      <div className="flex justify-center gap-3 mt-5">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Profile
        </button>

        <button className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-lg">
          Contact
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-blue-100 p-10">

      <h1 className="text-5xl font-bold text-center mb-14">
        Tailwind CSS Components
      </h1>

      {/* User Card */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          User Card
        </h2>

        <div className="flex justify-center">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </section>

      {/* Product Card */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          Product Card
        </h2>

        <div className="flex justify-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Responsive Team Members */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-10">
          Meet Our Team
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

    </div>
  );
}