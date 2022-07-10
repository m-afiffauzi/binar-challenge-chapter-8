import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, FormGroup, Form, Label } from "reactstrap";

export default function EditExp({ data }) {
  const [players, setPlayers] = useState(data);
  return (
    <div className="container">
      <h1 className="py-5 text-center">Edit Experience</h1>
      <Form>
        <FormGroup>
          <Label for="Experience">Experience</Label>
          <Input id="Experience" name="experience" placeholder={players.experience} type="text" />
        </FormGroup>
        <Button className="btn btn-primary me-3">Submit</Button>
        <Link to="/" className="btn btn-secondary">
          Cancel
        </Link>
      </Form>
    </div>
  );
}
