import{ Home as Homeicon, PlusSquare, User, UserPlus, ListVideo, PlayCircle, ChevronLeft, ChevronRight} from 'lucide-react'
import'src/app/globals.css'

export default function Listar(){

    return(
        <>
        <div className="h-screen flex flex-col ">
    <div  className='bg-fuchsia-400 text-white p-6 text-lg font-bold flex intens-center gap-2'>
       <PlayCircle/>KP. Videos 
         
        </div> 
     <div className='flex flex-1' >
     <aside className='w-64 text-fuchsia-700 bg-fuchsia-200 p-6'>
         <nav className='space-y-5'>
          <a href='/'className='flex intens-center gap-2 text-sm font-semibold hover:text-blue-600' >
            <Homeicon/>
            Home
          </a>
          <a href='/Video/Cadatrar' className='flex intens-center gap-2 text-sm font-semibold hover:text-blue-600'>
            <PlusSquare/>
            Adicionar videos
          </a>
          <a href='/Video/Listar' className='flex intens-center gap-2 text-sm font-semibold hover:text-blue-600'>
            <ListVideo/>
            Videos
          </a><a href='Cadatrar' className='flex intens-center gap-2 text-sm font-semibold hover:text-blue-600'>
            <UserPlus/>
           Adicionar Autores
          </a>
          <a href='Listar' className='flex intens-center gap-2 text-sm font-semibold hover:text-blue-600'>
            <ListVideo/>
            Autores
          </a>
         </nav>
        </aside>
        <main className="flex-1 p-6 " >
            <h1 className='font-semibold text-3xl mt-7'>
              Qual a vibe pra Hoje?
            </h1>
           
            <div className='grid grid-cols-3 gap-4 mt-4'>
         <a href='#' className='bg-fuchsia-200 rounded  flex items-center gap-4  overflow-hidden  hover:bg-fuchsia-200/20 transition-colors'>
           <img src='/autor1.jpg' width={100} height={100} alt='capa de albuns'/>
           <strong>The Beatles</strong>
          </a>
          
          <a href='#' className='bg-fuchsia-200 rounded  flex items-center gap-4   overflow-hidden  hover:bg-fuchsia-200/20 transition-colors'>
           <img src='/autor2.jpg' width={100} height={100} alt='capa de albuns'/>
           <strong>The Velvet Underground & Nico</strong>
          </a>

          <a href='#' className='bg-fuchsia-200 rounded  flex items-center gap-4   overflow-hidden  hover:bg-fuchsia-200/20 transition-colors'>
           <img src='/autor3.jpg' width={100} height={100} alt='capa de albuns'/>
           <strong>Led Zeppelin</strong>
          </a>

          <a href='#' className='bg-fuchsia-200 rounded  flex items-center gap-4   overflow-hidden  hover:bg-fuchsia-200/20 transition-colors'>
           <img src='/autor4.jpg' width={100} height={100} alt='capa de albuns'/>
           <strong>Arctic Monkeys </strong>
          </a>
          <a href='#' className='bg-fuchsia-200 rounded  flex items-center gap-4   overflow-hidden  hover:bg-fuchsia-200/20 transition-colors'>
           <img src='/autor5.jpg' width={100} height={100} alt='capa de albuns'/>
           <strong>Billie Elish</strong>
          </a>
          <a href='#' className='bg-fuchsia-200 rounded  flex items-center gap-4 o  verflow-hidden  hover:bg-fuchsia-200/20 transition-colors'>
           <img src='/autor6.jpeg' width={100} height={100} alt='capa de albuns'/>
           <strong>Doja Cat</strong>
          </a>
          <a href='#' className='bg-fuchsia-200 rounded  flex items-center gap-4 o  verflow-hidden  hover:bg-fuchsia-200/20 transition-colors'>
           <img src='/autor7.jpeg' width={100} height={100} alt='capa de albuns'/>
           <strong>Rubel</strong>
          </a>
          <a href='#' className='bg-fuchsia-200 rounded  flex items-center gap-4 o  verflow-hidden  hover:bg-fuchsia-200/20 transition-colors'>
           <img src='/autor8.jpeg' width={100} height={100} alt='capa de albuns'/>
           <strong>The Weeknd</strong>
          </a>
          <a href='#' className='bg-fuchsia-200 rounded  flex items-center gap-4 o  verflow-hidden  hover:bg-fuchsia-200/20 transition-colors'>
           <img src='/autor9.jpeg' width={100} height={100} alt='capa de albuns'/>
           <strong>Taylor Swift</strong>
          </a>
   

        </div>
            
       
     
          </main>
       </div>
    


    
      
    </div>

        
        </>
    )
}