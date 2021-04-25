import { useEffect, useState } from 'react'
import Head from 'next/head'

export default function Myprofile() {
    const [profile, setProfile] = useState({}) // กำหนดตัวแปร state

    useEffect(async () => {
        const liff = (await import('@line/liff')).default
        await liff.ready

        const profile = liff.getProfile()
        setProfile(profile)

    }, [profile.userId])

    return (
        <section>
            <Head>My Profile</Head>
            <h1>Profile</h1>
            <div>UserId : { profile.userId }</div>
            <div>Name : { profile.displayName }</div>
            <div>Status : { profile.statusMessage }</div>
        </section>
    )
}