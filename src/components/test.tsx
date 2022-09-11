import type { NextPage } from 'next'
import Head from 'next/head'

import { decrement, increment, incrementByAmount, selectCount } from '../features/counter/counterSlice'
import styles from '../../styles/Home.module.scss'

import Qoute from '../components/Qoute'
import { Button } from 'reactstrap'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'

export default function Test() {
    const [amount, setAmount] = useState<number>(0)
    const dispatch=useAppDispatch();
    const value=useAppSelector(selectCount);
    const handleIncreaseByAmount=(e:React.FormEvent)=>{
      e.preventDefault()
      dispatch(incrementByAmount(amount));
      setAmount(0)
    }
  return (
    <main className={styles.main}>
<p>{value}</p>
<Button
block
color="danger"
outline
size="lg"
onClick={()=>dispatch(increment())}
>
incrementt
</Button>
<Button
block
color="info"
outline
size="lg"
onClick={()=>dispatch(decrement())}
>
increment
</Button>
<form onSubmit={handleIncreaseByAmount} className="w-100 d-flex align-items-center flex-column">
 <input  value={amount} onChange={(e)=>setAmount(Number(e.target.value))} type="number"/>
 <Button
 block
className={styles.subbutton}
tag="input"
type="submit"
value="increaseByAmount"
/>
</form>
<Qoute/>
</main>
  )
}
