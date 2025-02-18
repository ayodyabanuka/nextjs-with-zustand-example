'use client';

import { useCounterStore } from '@/store/counter';
import { MdOutlineContentCopy } from 'react-icons/md';

export default function Home() {
  const count = useCounterStore((state) => state.count); //get count state from store
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div className='flex justify-center items-center h-screen w-full flex-col max-w-screen-sm mx-auto gap-5 text-white/60 px-4  bg-[#070707] bg-dot-white/[0.1]'>
      <div className='text-center '>
        <div className='text-xl font-thin'>This project for learn</div>
        <div className='text-5xl font-black text-yellow-400'>Zustand</div>
        <div className='text-2xl font-bold'>State Management Tool</div>
      </div>
      <div className='flex flex-col justify-center items-center gap-2 p-5'>
        Install zustand :{' '}
        <button
          className='hover:bg-zinc-700 bg-zinc-800 rounded-full cursor-pointer'
          onClick={() => navigator.clipboard.writeText('npm install zustand')}
        >
          <code className='px-5 py-3  rounded-full flex items-center gap-4'>
            npm install zustand <MdOutlineContentCopy />
          </code>
        </button>
      </div>
      <div className='flex flex-col gap-5  border-white/5 w-full mx-4 border-[0.1px] items-center justify-center rounded-lg p-10 bg-zinc-900/30 backdrop-blur-xl'>
        <div>In here i have created counter</div>

        <div className='text-4xl'>Counter: {count}</div>
        <div className='flex gap-5'>
          <button
            className='px-3 py-2 bg-zinc-900 rounded-xl hover:bg-zinc-800'
            onClick={increment}
          >
            Increment +
          </button>
          <button
            className='px-3 py-2 bg-zinc-900 rounded-xl hover:bg-zinc-800'
            onClick={decrement}
          >
            Decrement -
          </button>
        </div>
      </div>
    </div>
  );
}
