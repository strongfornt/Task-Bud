import Lottie from 'lottie-react'
import notFound from './notFound.json'

export default function NotFound() {
  return (
   <>
    <div className='flex  items-center justify-center'>
    <div className='max-w-sm    '>
    <Lottie animationData={notFound} />
     
    </div>
    
    </div>

       
   </>
  )
}