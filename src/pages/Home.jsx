import { useState } from "react";
import { useSelector } from "react-redux";
import { useIdeas } from "../lib/context/ideas";

export function Home() {
  const user = useSelector((state) => state.auth.user); // ✅ Redux auth
  const ideas = useIdeas();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await ideas.add({ userId: user.$id, title, description });
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error("Error submitting idea:", err);
    }
  };

  return (
    <>
      {/* Show the submit form to logged in users */}
      {user ? (
        <section>
          <h2>Submit Idea</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </section>
      ) : (
        <section>
          <p>Please login to submit an idea.</p>
        </section>
      )}

      <section>
        <h2>Latest Ideas</h2>
        <ul>
          {ideas.current.map((idea) => (
            <li key={idea.$id}>
              <strong>{idea.title}</strong>
              <p>{idea.description}</p>
              {/* Show remove button only for idea owner */}
              {user && user.$id === idea.userId && (
                <button type="button" onClick={() => ideas.remove(idea.$id)}>
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
