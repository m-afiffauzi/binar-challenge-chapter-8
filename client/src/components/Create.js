import React from "react";
import { Link } from "react-router-dom";
import { Button, Input, FormGroup, Form, Label } from "reactstrap";
import Data from "../db.json";

export default function Create() {
  return (
    <div className="container">
      <h1 className="py-5 text-center">Create Player</h1>
      <Form>
        <FormGroup>
          <Label for="exampleUsername">Username</Label>
          <Input id="exampleUsername" name="sername" placeholder="Username" type="text" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input id="exampleEmail" name="email" placeholder="Email" type="email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input id="examplePassword" name="password" placeholder="Password" type="password" />
        </FormGroup>
        <Button className="btn btn-primary me-3">Submit</Button>
        <Link to="/" className="btn btn-secondary">
          Cancel
        </Link>
      </Form>
    </div>
  );
}
