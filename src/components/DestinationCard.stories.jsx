/**
 * WanderWorld – DestinationCard Stories
 */

import DestinationCard from './DestinationCard';
import { destinations } from '../data/destinations';

export default {
  title: 'Components/DestinationCard',
  component: DestinationCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    destination: {
      control: false,
      description: 'Destination object with id, name, tagline, description, images',
    },
  },
};

export const Default = {
  args: {
    destination: destinations[0],
  },
};

export const Paris = {
  args: {
    destination: destinations[1],
  },
};

export const Tokyo = {
  args: {
    destination: destinations[2],
  },
};
