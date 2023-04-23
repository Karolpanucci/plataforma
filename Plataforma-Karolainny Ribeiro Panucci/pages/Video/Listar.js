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
          <a href='Cadatrar' className='flex intens-center gap-2 text-sm font-semibold hover:text-blue-600'>
            <PlusSquare/>
            Adicionar videos
          </a>
          <a href='Listar' className='flex intens-center gap-2 text-sm font-semibold hover:text-blue-600'>
            <ListVideo/>
            Videos
          </a><a href='/Autor/Cadatrar' className='flex intens-center gap-2 text-sm font-semibold hover:text-blue-600'>
            <UserPlus/>
           Adicionar Autores
          </a>
          <a href='/Autor/Listar' className='flex intens-center gap-2 text-sm font-semibold hover:text-blue-600'>
            <ListVideo/>
            Autores
          </a>
         </nav>
        </aside>
        <main className='flex-1 p-6' >
            <h1 className='font-semibold text-3xl mt-7'>
              Escolha Rapido
            </h1>
            <p>Todas as nossas musicas</p>
            <div className='grid grid-cols-5 gap-4 mt-4'>
          <a href='#' className='bg-fuchsia-300 p-3 rounded hover:bg-fuchsia-400/20 flex flex-col'>
          <img src='/capa1.jpg' className='w-full' width={110} height={110} alt='capa de albuns'/>
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
 
          <a href='#' className='bg-fuchsia-300 p-3 rounded hover:bg-fuchsia-400/20 flex flex-col'>
          <img src='/capa6.jpg' className='w-full' width={120} height={120} alt='capa de albuns'/>
          <strong className='font font-semibold'>Woman</strong>
          <spam className='text-sm text-fuchsia-500'>Doja Cat</spam>
          <spam className='text-xs text-fuchsia-500'>2021</spam>
          </a>
          <a href='#' className='bg-fuchsia-300 p-3 rounded hover:bg-fuchsia-400/20 flex flex-col'>
          <img src='/capa7.jpeg' className='w-full' width={120} height={120} alt='capa de albuns'/>
          <strong className='font font-semibold'>Grão de Areia</strong>
          <spam className='text-sm text-fuchsia-500'>Rubel</spam>
          <spam className='text-xs text-fuchsia-500'>2023</spam>
          </a>
          <a href='#' className='bg-fuchsia-300 p-3 rounded hover:bg-fuchsia-400/20 flex flex-col'>
          <img src='/capa8.jpeg' className='w-full' width={120} height={120} alt='capa de albuns'/>
          <strong className='font font-semibold'>Reminder</strong>
          <spam className='text-sm text-fuchsia-500'>The Weeknd</spam>
          <spam className='text-xs text-fuchsia-500'>2017</spam>
          </a>
          <a href='#' className='bg-fuchsia-300 p-3 rounded hover:bg-fuchsia-400/20 flex flex-col'>
          <img src='/capa9.jpg' className='w-full' width={120} height={120} alt='capa de albuns'/>
          <strong className='font font-semibold'>Bad Blood</strong>
          <spam className='text-sm text-fuchsia-500'>Taylor Swift</spam>
          <spam className='text-xs text-fuchsia-500'>2013</spam>
          </a>
          <a href='#' className='bg-fuchsia-300 p-3 rounded hover:bg-fuchsia-400/20 flex flex-col'>
          <img src='/capa10.jpg' className='w-full' width={120} height={120} alt='capa de albuns'/>
          <strong className='font font-semibold'>Quando Bate Aquela Saudade</strong>
          <spam className='text-sm text-fuchsia-500'>Rubel</spam>
          <spam className='text-xs text-fuchsia-500'>2013</spam>
          </a>

        

        </div>
       
     <footer className="p-5 m-9">
      @2023 @kha-ifms
     </footer>
          </main>
       </div>
    


    
      
    </div>

        
        </>
    )
}