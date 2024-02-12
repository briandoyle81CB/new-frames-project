import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Follow the Road',
    },
    {
      label: 'Explore the Forest',
    },
    {
      label: 'Enter the Cave',
    },
    {
      action: 'link',
      label: 'TODO Tutorial',
      target: 'https://www.google.com',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/frame-1-forest.webp`,
    aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame?frame=woods`,
});

export const metadata: Metadata = {
  title: 'HyperFrames!',
  description: 'Time is a flat circle.',
  openGraph: {
    title: 'HyperFrames!',
    description: 'Time is a flat circle.',
    images: [`${NEXT_PUBLIC_URL}/frame-1-forest.webp`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>HyperFrames!</h1>
      <p>TODO: Click here to learn how to make this!</p>
    </>
  );
}
