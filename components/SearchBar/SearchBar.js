import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
// import PropTypes from 'prop-types';

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
          style={{ backgroundColor: '#EEF0F2', boxShadow: '1px 1px #CCC', border: '1px solid #CCC' }}
        />
        <Button
          type="submit"
          size="sm"
          className="btn-style"
        // onClick={handleClose}
        >
          Filter
        </Button>
      </Form>
    </>
  );
}

// SearchBar.propTypes = {
//   handleClose: PropTypes.func.isRequired,
// };
