import { useRouter } from 'next/router';
import React from 'react';

export default function SearchQueryPage() {
  const router = useRouter();
  const { query } = router.query;
  return (
    <h1>{query}</h1>
  );
}
