import React from 'react';
import { createRoot } from 'react-dom/client';
import Todo from './components/Todo';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('todo-component');

  if (container) {
    const root = createRoot(container);
    root.render(<Todo name="test"/>);
  }
});
