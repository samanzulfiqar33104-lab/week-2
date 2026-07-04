import { useState } from "react";

function App() {
  const employees = [
    {
      id: 1,
      name: "Ali Khan",
      position: "Frontend Developer",
      department: "IT",
      email: "ali@example.com",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      position: "UI/UX Designer",
      department: "Design",
      email: "sara@example.com",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Usman Tariq",
      position: "Backend Developer",
      department: "IT",
      email: "usman@example.com",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Ayesha Malik",
      position: "HR Manager",
      department: "Human Resources",
      email: "ayesha@example.com",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Hamza Ali",
      position: "Marketing Executive",
      department: "Marketing",
      email: "hamza@example.com",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 6,
      name: "Fatima Noor",
      position: "Project Manager",
      department: "Management",
      email: "fatima@example.com",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-blue-100 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-700">
          Employee Directory
        </h1>

        <p className="text-center text-gray-600 mt-2 mb-8">
          Search and explore employee details.
        </p>

        {/* Search Box */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search Employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
          />
        </div>

        {/* Employee Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <div
                key={employee.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
              >
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="w-32 h-32 rounded-full mx-auto mt-6 border-4 border-blue-500 object-cover"
                />

                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {employee.name}
                  </h2>

                  <p className="text-blue-600 font-semibold mt-2">
                    {employee.position}
                  </p>

                  <p className="text-gray-500 mt-2">
                    {employee.department}
                  </p>

                  <p className="text-gray-500 text-sm mt-2">
                    {employee.email}
                  </p>

                  <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                    View Profile
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center">
              <h2 className="text-2xl font-semibold text-red-500">
                No Employee Found
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;