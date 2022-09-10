import type { NextPage } from 'next'
import Head from 'next/head'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { decrement, increment, incrementByAmount, selectCount } from '../features/counter/counterSlice'
import styles from '../../styles/Home.module.css'
import { useState } from 'react'
import Qoute from '../components/Qoute'

const Home: NextPage = () => {
  const [amount, setAmount] = useState<number>(0)
const dispatch=useAppDispatch();
const value=useAppSelector(selectCount);
const handleIncreaseByAmount=(e:React.FormEvent)=>{
  e.preventDefault()
  dispatch(incrementByAmount(amount));
  setAmount(0)
}
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <main>
       <p>{value}</p>
       <button onClick={()=>dispatch(increment())}>increment</button>
       <button onClick={()=>dispatch(decrement())}>decrement</button>
       <form onSubmit={handleIncreaseByAmount}>
        <input  value={amount} onChange={(e)=>setAmount(Number(e.target.value))} type="number"/>
        <button type='submit'>increaseByAmount</button>
       </form>
       <Qoute/>
       </main>

    </div>
  )
}

export default Home