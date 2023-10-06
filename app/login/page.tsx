'use client'

import Image from 'next/image'
import styles from './login.module.css'
import create from '../actions'
import { useRef } from 'react';
import { redirect } from 'next/navigation'

export default function Login() {

  const formRef = useRef<HTMLFormElement>(null);

  async function onCreate(formData: FormData) {
    const res = await create(formData)
    document.cookie = `jwt=${res}`
    formRef.current?.reset();

    redirect('/')
  }


  return (
    <section className="min-h-screen flex flex-col justify-around">
      <main className='flex flex-row justify-center items-center gap-10'>
        <div className={styles.imagesContainer}>
          <div className={styles.divImage}>
          </div>
          <Image
            className={styles.imageClass}
            src="/images/login-image.png"
            width={250}
            height={538.83}
            alt="Smartphone image"
          />
        </div>

        <div className="flex flex-col align-middle gap-4">
          <div className="flex flex-col align-middle gap-1">
            <div>
              <i className={styles.instagramLogo}></i>
            </div>
            <form action={onCreate} ref={formRef}>
              <div>
                <div className={styles.inputContainer}>
                  <input className={styles.inputContainerInput} type="text" name='login' placeholder=' '/>
                  <label className={styles.inputContainerLabel}>Login</label>
                </div>
                <div className={styles.inputContainer}>
                  <input className={styles.inputContainerInput} type="password" name='password' placeholder=' '/>
                  <label className={styles.inputContainerLabel}>Password</label>
                </div>
              </div>
              <div>
                <button className={styles.submitButton} type='submit'>Log in</button>
              </div>
            </form>
            <div className='flex flex-row justify-center gap-1'>
              <p>OR</p>  
            </div>

            <div className='flex flex-row justify-center'>
              <span></span><p>Log in with facebook</p>
            </div>

            <div className='flex flex-row justify-center'>
              <p>Forgot password?</p>
            </div>
          </div>
          <div className='flex flex-row justify-center'>
            <p>Don't have an account? <span>Sign up</span></p>
          </div>
          <div className='flex flex-row justify-center'>
            <p>Get the app</p>
          </div>
          <div className='flex flex-row justify-center'>
            <Image
              src="/images/apple-store.png"
              width={136}
              height={40}
              alt="Apple Store Logo"
            />
            <Image
              src="/images/google-play.png"
              width={136}
              height={40}
              alt="Google Store Logo"
            />
          </div>
        </div>
      </main>
      <footer className='flex flex-col justify-center gap-4'>
        <div className='flex flex-row justify-center gap-2 flex-wrap'>
          <span>Meta</span>
          <span>About</span>
          <span>Blog</span>
          <span>Jobs</span>
          <span>Help</span>
          <span>API</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Locations</span>
          <span>Instagram Lite</span>
          <span>Threads</span>
          <span>Contact Uploading & Non-Users</span>
          <span>Meta Verified</span>
        </div>
        <div className='flex flex-row justify-center gap-3'>
          <span>English</span>
          <span>2023 Instagram from Meta</span>
        </div>


      </footer>
    </section>

  )
}
