'use client'

import { getFeed } from "@/app/lib/http"
import Post from "./post"
import { useCallback, useEffect, useState } from "react"

export default function Feed() {
  const [page, setPage] = useState<number>(0);
  const [ids, setIds] = useState<string[]>([]);
  let loading = false;

  const onScroll = useCallback((event: any) => {
    const scrolled = window.innerHeight + window.scrollY
    const bodyHeight = document.body.scrollHeight


    if (scrolled % bodyHeight === 0 && !loading) {
      loading = true
      getFeed(page, 3).then(v => v.json()).then(v => {
        setIds(prev => [...prev, ...v])
        setPage(prev => prev + 1)
        loading = false
      })
    }
  }, [page])

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, [onScroll]);

  useEffect(() => {
    if (!loading) {
      loading = true
      getFeed(page, 3).then(v => v.json()).then(v => {
        setIds([...v])
        setPage(1)
        loading = false
      })
    }

  }, []);

  return (
    <div className="flex flex-col items-center gap-52 m-10">
      {ids.map((v, k) => <Post id={v} key={k} />)}
    </div>
  )
}
