import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = searchInput.toLowerCase();
    router.push(`/search/${query}`);
  };

  return (
    <>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Filter"
          className="me-2"
          aria-label="Search"
          size="sm"
          onChange={handleChange}
        />
        <Button type="submit" variant="outline-success" size="sm">Filter</Button>
      </Form>
    </>
  );
}
