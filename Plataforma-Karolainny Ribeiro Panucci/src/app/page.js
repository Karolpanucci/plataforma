import{ Home as Homeicon,User, PlusSquare, UserPlus, ListVideo, PlayCircle, ChevronLeft, ChevronRight} from 'lucide-react'



export default function Home() {
  return (
    <div className="h-screen flex flex-col">
        <div  className='bg-fuchsia-400 20 flex-colext-white p-6 text-lg font-bold   flex intens-center gap-2'>
       <PlayCircle/>KP. Videos 
      
        </div> 
     <div className='flex flex-1' >
     <aside className='w-64 text-fuchsia-700 bg-fuchsia-200 p-6'>
         <nav className='space-y-5'>
          <a href='/'className='flex intens-center gap-2 text-sm font-semibold hover:text-blue-600' >
            <Homeicon/>
            Home
          </a>
          <a href='Video/Cadatrar' className='flex intens-center gap-2 text-sm font-semibold hover:text-blue-600'>
            <PlusSquare/>
            Adicionar videos
          </a>
          <a href='Video/Listar' className='flex intens-center gap-2 text-sm font-semibold hover:text-blue-600'>
            <ListVideo/>
            Videos
          </a><a href='Autor/Cadatrar' className='flex intens-center gap-2 text-sm font-semibold hover:text-blue-600'>
            <UserPlus/>
           Adicionar Autores
          </a>
          <a href='Autor/Listar' className='flex intens-center gap-2 text-sm font-semibold hover:text-blue-600'>
            <ListVideo/>
            Autores
          </a>
         </nav>
        </aside>
        
  
        <main className='flex-1 p-6' >
           
        <h1 className='font-semibold text-3xl mt-7'>
          Ultimos Autores
        </h1>
        <div className='grid grid-cols-3 gap-4 mt-4'>
         <a href='#' className='bg-fuchsia-200 rounded  flex items-center gap-4 overflow-hidden  hover:bg-fuchsia-200/20 transition-colors'>
           <img src='/autor1.jpg' width={104} height={104} alt='capa de albuns'/>
           <strong>The Beatles</strong>
          </a>
          
          <a href='#' className='bg-fuchsia-200 rounded  flex items-center gap-4 overflow-hidden  hover:bg-fuchsia-200/20 transition-colors'>
           <img src='/autor2.jpg' width={104} height={104} alt='capa de albuns'/>
           <strong>The Velvet Underground & Nico</strong>
          </a>

          <a href='#' className='bg-fuchsia-200 rounded  flex items-center gap-4 overflow-hidden  hover:bg-fuchsia-200/20 transition-colors'>
           <img src='/autor3.jpg' width={104} height={104} alt='capa de albuns'/>
           <strong>Led Zeppelin</strong>
          </a>

          <a href='#' className='bg-fuchsia-200 rounded  flex items-center gap-4 overflow-hidden  hover:bg-fuchsia-200/20 transition-colors'>
           <img src='/autor4.jpg' width={104} height={104} alt='capa de albuns'/>
           <strong>Arctic Monkeys </strong>
          </a>
          <a href='#' className='bg-fuchsia-200 rounded  flex items-center gap-4 overflow-hidden  hover:bg-fuchsia-200/20 transition-colors'>
           <img src='/autor5.jpg' width={104} height={104} alt='capa de albuns'/>
           <strong>Billie Elish</strong>
          </a>
          <a href='#' className='bg-fuchsia-200 rounded  flex items-center gap-4 overflow-hidden  hover:bg-fuchsia-200/20 transition-colors'>
           <img src='/autor6.jpeg' width={104} height={104} alt='capa de albuns'/>
           <strong>Doja Cat</strong>
          </a>

        </div>
        <h1 className='font-semibold text-3xl mt-7'>
          Ultimos Videos
        </h1>
        <div className='grid grid-cols-5 gap-4 mt-4'>
          <a href='#' className='bg-fuchsia-300 p-3 rounded hover:bg-fuchsia-400/20 flex flex-col'>
          <img src='/capa1.jpg' className='w-full' width={120} height={120} alt='capa de albuns'/>
          <strong className='font font-semibold'>Carry That Weight</strong>
          <spam className='text-sm text-fuchsia-500'>The Beatles</spam>
          <spam className='text-xs text-fuchsia-500'>1969</spam>
          </a>
          <a href='#' className='bg-fuchsia-300 p-3 rounded hover:bg-fuchsia-400/20 flex flex-col'>
          <img src='/capa2.jpg' className='w-full' width={120} height={120} alt='capa de albuns'/>
          <strong className='font font-semibold'>Sunday Morning (Mono)</strong>
          <spam className='text-sm text-fuchsia-500'>The Velvet Underground & Nico</spam>
          <spam className='text-xs text-fuchsia-500'>1967</spam>
          </a>
          <a href='#' className='bg-fuchsia-300 p-3 rounded hover:bg-fuchsia-400/20 flex flex-col'>
          <img src='/capa3.jpg' className='w-full' width={120} height={120} alt='capa de albuns'/>
          <strong className='font font-semibold'>Stairway to Heaven (Remaster)</strong>
          <spam className='text-sm text-fuchsia-500'>Led Zeppelin</spam>
          <spam className='text-xs text-fuchsia-500'>2007</spam>
          </a>
          <a href='#' className='bg-fuchsia-300 p-3 rounded hover:bg-fuchsia-400/20 flex flex-col'>
          <img src='/capa4.jpg' className='w-full' width={120} height={120} alt='capa de albuns'/>
          <strong className='font font-semibold'>505</strong>
          <spam className='text-sm text-fuchsia-500'>Arctic Monkeys</spam>
          <spam className='text-xs text-fuchsia-500'>2007</spam>
          </a>
          <a href='#' className='bg-fuchsia-300 p-3 rounded hover:bg-fuchsia-400/20 flex flex-col'>
          <img src='/capa5.jpg' className='w-full' width={120} height={120} alt='capa de albuns'/>
          <strong className='font font-semibold'>my boy</strong>
          <spam className='text-sm text-fuchsia-500'>Billie Eilish</spam>
          <spam className='text-xs text-fuchsia-500'>2017</spam>
          </a>

        </div>
        <footer >
      @2023 @kha-ifms
     </footer>
        </main>
      </div>
   
    </div>
  )
}
