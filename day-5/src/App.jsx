import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Ali Khan",
      age: 20,
      course: "React JS",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      age: 22,
      course: "UI/UX Design",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    age: "",
    course: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addStudent = (e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.course) {
      alert("Please fill all fields.");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: form.name,
      age: form.age,
      course: form.course,
    };

    setStudents([...students, newStudent]);

    setForm({
      name: "",
      age: "",
      course: "",
    });
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-2">
          Student Registration Dashboard
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Add, View and Delete Student Records
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Registration Form */}
          <div className="bg-white shadow-xl rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6 text-indigo-700">
              Register Student
            </h2>

            <form onSubmit={addStudent} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Student Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <input
                type="number"
                name="age"
                placeholder="Age"
                value={form.age}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <input
                type="text"
                name="course"
                placeholder="Course"
                value={form.course}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
              >
                Add Student
              </button>
            </form>
          </div>

          {/* Student List */}
          <div className="bg-white shadow-xl rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6 text-indigo-700">
              Registered Students
            </h2>

            {students.length === 0 ? (
              <p className="text-center text-gray-500">
                No students registered.
              </p>
            ) : (
              <div className="space-y-4">
                {students.map((student) => (
                  <div
                    key={student.id}
                    className="border rounded-lg p-4 flex justify-between items-center hover:shadow-md"
                  >
                    <div>
                      <h3 className="text-xl font-semibold">
                        {student.name}
                      </h3>
                      <p className="text-gray-600">
                        Age: {student.age}
                      </p>
                      <p className="text-gray-600">
                        Course: {student.course}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteStudent(student.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;