import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Input, FormGroup, Form, Label } from "reactstrap";

export default function Edit({ data }) {
  console.log(data);
  const { param } = useParams();
  let player = data.filter((id) => id === param);
  console.log(player);
  return (
    <div className="container">
      <h1 className="py-5 text-center">Edit Player</h1>
      <Form>
        <FormGroup>
          <Label for="exampleUsername">Username</Label>
          <Input id="exampleUsername" name="sername" placeholder={player.username} type="text" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input id="exampleEmail" name="email" placeholder={player.email} type="email" />
        </FormGroup>
        <Button className="btn btn-primary me-3">Submit</Button>
        <Link to="/" className="btn btn-secondary">
          Cancel
        </Link>
      </Form>
    </div>
  );
}
