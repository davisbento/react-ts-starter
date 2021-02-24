import React, { memo, useState, useCallback } from 'react';
import useApiCall from 'hooks/useApiCall';
import userService from 'services/user';

export default memo(() => {
  const [id, setId] = useState(0);

  const [data, loading] = useApiCall(() => userService.list(id), [id]);

  const increment = useCallback(() => setId(id + 1), [id]);

  return (
    <div>
      <h1>Listagem</h1>

      {loading && <div>Loading...</div>}

      {data && <div>{data[0].email}</div>}

      <button onClick={increment}>Increment and call API again</button>
    </div>
  );
});
