/**
 * WanderWorld – Layout Stories
 */

import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

export default {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

function PlaceholderContent() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', minHeight: '200px' }}>
      <h2>Page content placeholder</h2>
      <p>This simulates the main content area rendered by the current route.</p>
    </div>
  );
}

export const Default = {
  render: () => (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<PlaceholderContent />} />
      </Route>
    </Routes>
  ),
};
