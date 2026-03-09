/**
 * WanderWorld – DestinationCard Stories
 */

import DestinationCard from './DestinationCard';
import { destinationsData } from '../../data/destinationsData';

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
    destination: destinationsData[0],
  },
};

export const Paris = {
  args: {
    destination: destinationsData[1],
  },
};

export const Tokyo = {
  args: {
    destination: destinationsData[2],
  },
};
