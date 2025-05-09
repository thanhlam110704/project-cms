'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const MuxPlayer = dynamic(() => import('@mux/mux-player-react'), {
  ssr: false, 
});

export default function MuxPlayerWrapper() {
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  if (!showPlayer) return null;

  return (
    <MuxPlayer
      playbackId="kDKVO4s2g02ggItHmrzpybdGKTmNDmkFmqn9FiAbByG8"
      streamType="on-demand"
      autoPlay
      muted
    />
  );
}
