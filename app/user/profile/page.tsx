import { auth } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import Post from "../feed/post";
import { getImages } from "@/app/lib/client";

export default async function Profile() {
  const { username, id } = await auth() as any
  const ids: string[] = Array.from(await getImages(id))
  console.log(ids)

  return (
    <>
      <div className="flex flex-col p-8">
        <div className="flex flex-row justify-around">
          <div>
            <Image
              src={'/profile.jpg'}
              alt="Picture of the author"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-row justify-between gap-10">
            <div>{username}</div>
            <div>Edit profile</div>
          </div>
        </div>
        <div className="">
          Posts
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
            {ids.map((v, k) => <Post id={v} key={k} />)}
          </div>
        </div>
      </div>
    </>
  )
}
