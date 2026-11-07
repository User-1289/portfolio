"use client";

import { useEffect, useId, useRef } from "react";
import { Play, X } from "lucide-react";

export default function ProductDemo({ name, src, description }: { name: string; src: string; description: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const player = useRef<HTMLVideoElement>(null);
  const id = useId();

  useEffect(() => {
    const el = dialog.current;
    return () => { if (el?.open) el.close(); };
  }, []);

  function showDemo() {
    dialog.current?.showModal();
    if (player.current) {
      player.current.currentTime = 0;
      void player.current.play().catch(() => {});
    }
  }

  return (
    <>
      <button className="text-link watch-link" onClick={showDemo} aria-haspopup="dialog">
        <Play size={14} aria-hidden="true" /> Watch demo
      </button>
      <dialog ref={dialog} className="demo-dialog" aria-labelledby={id}
        onClose={() => player.current?.pause()}
        onClick={event => { if (event.target === dialog.current) dialog.current?.close(); }}>
        <div className="demo-body">
          <header><h3 id={id}>{name}</h3><button aria-label="Close demo" onClick={() => dialog.current?.close()}><X size={20} /></button></header>
          <video ref={player} src={src} muted controls playsInline preload="none" aria-label={description} />
          <p>{description}</p>
        </div>
      </dialog>
    </>
  );
}
