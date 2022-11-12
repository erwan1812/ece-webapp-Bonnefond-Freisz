import React, { useState } from "react";

export default function App() {
  const [query, setQuery] = useState({
    name: "",
    password: ""
  });

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    console.log(formData)
  };
  return (
    <div className="App">
      <h1>Mon premier login</h1>
      <form onSubmit={formSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="form-control"
            value={query.name}
            onChange={handleParam()}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="form-control"
            value={query.password}
            onChange={handleParam()}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

