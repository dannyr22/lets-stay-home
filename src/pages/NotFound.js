import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      404 We're sorry but this page doesn't exist. You can return to our homepage by clicking <Link to="/">here</Link>.
    </div>
  )
}

export default NotFound
