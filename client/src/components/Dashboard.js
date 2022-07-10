import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Input } from "reactstrap";

export default function Dashboard({ data }) {
  const [players, setPlayers] = useState(data);
  const [query, setQuery] = useState("");

  const deletePlayer = (id) => {
    const newPlayers = players.filter((players) => players.id !== id);
    setPlayers(newPlayers);
  };
  return (
    <div className="container">
      <h1 className="text-center pt-5">Players</h1>
      <div className="serchbar py-5">
        <Input placeholder="Search..." type="text" />
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Experience</th>
            <th>Level</th>
            <th className="d-flex justify-content-center">
              <Link to="/create" className="btn btn-primary me-1">
                Create
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <th scope="row">{player.id}</th>
              <td>{player.username}</td>
              <td>{player.email}</td>
              <td>{player.experience}</td>
              <td>{player.level}</td>
              <td className="d-flex justify-content-center">
                <Link to={`/edit/exp/${player.id}`} className="btn btn-success me-2">
                  Exp
                </Link>
                <Link to={`/edit/${player.id}`} className="btn btn-warning me-2">
                  Edit
                </Link>
                <Button className="btn btn-danger" onClick={() => deletePlayer(player.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
