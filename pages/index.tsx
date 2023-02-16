import Image from 'next/image'
import Animation from '@/components/Animation'

const Index = () => { 
    // 
    return (
    <div className="flex flex-col justify-between">
                <div className='mx-auto'>
                <Image src="/logo.png" alt="jelli" height="400" width="400"/>
                </div>
                
                <div className='mt-20'>
                <Animation />
                </div>
                
            
                
            
            
        </div>
        
       
        
    )
}


export default Index