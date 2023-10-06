'use client'

import { getData } from "@/app/_lib/http"
import Post from "./post"
import { useCallback, useEffect, useState } from "react"

export default function Dashboard() {
  const [ids, setIds] = useState<string[]>([]);

  const onScroll = useCallback((event: any) => {
    const scrolled = window.innerHeight + window.scrollY
    const bodyHeight = document.body.scrollHeight

    if (scrolled % bodyHeight === 0) {
      console.log(2, ids.length)
      getData(`/api/images?length=${ids.length}`).then(v => v.json()).then((v: string[]) =>
        setIds(prev => [...prev, ...v])
      )
    }
  }, [ids])

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, [onScroll]);

  useEffect(() => {
    console.log(1, ids.length)
    getData(`/api/images?length=${ids.length}`).then(v => v.json()).then(v =>
      setIds(prev => [...prev, ...v])
    )

  }, []);

  return (
    <div className="flex flex-col items-center gap-52 m-10">
      {ids.length}
      {ids.map((v, k) => <Post id={v} key={k} />)}
    </div>
  )
}
