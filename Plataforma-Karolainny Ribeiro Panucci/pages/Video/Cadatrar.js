import { Diamond, User } from "lucide-react"
import { use, useState } from "react"
import'src/app/globals.css'
import tailwindConfig from "../../tailwind.config"

import{ Home as Homeicon, PlusSquare, UserPlus, ListVideo, PlayCircle, ChevronLeft, ChevronRight} from 'lucide-react'

export default function Cadatrar(){
    const[video, setVideo]= useState('')
    const [titulo, setTitulo]= useState('')
    const[descricao, setDescricao]= useState('')
    const[url, setUrl]= useState('')
    const[autor, setAutor]= useState('')
    
    const adicionarVideo =()=>{
      const novoVideo ={
        id: Math.random().toString(36).slice(1, 6),
        titulo: titulo,
        decricao: descricao,
        url: url,
        autor: autor


      }
      const autualizarVideo =[video];
      autualizarVideo.push(novoVideo);
      setVideo(autualizarVideo);
      localStorage.setItem('listadevideo', JSON.stringify(autualizarVideo));

    }
    return(<>
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
        <main className='flex-1 p-5' >
            <h1 className='font-semibold text-3xl mt-7'>
              Adicionar Novos Videos 
            </h1>
            <p>preencha o Formulario e adicione um novo video</p>
            <div className="formulario">
           <form>
            <div className="formulario">
           <div className="campo-texto">
                <label>
                    Titulo
                </label>
                <input
                id="titulo"
                type="text"
                placeholder="Digite o titulo do video"
                value={titulo}
                onChange={(event) =>setTitulo(event.target.value)} />
          
                 <label>
                   Descrição
                </label>
                <input
                id="decricao"
                type="text"
                placeholder="Digite a descrição do video" 
                value={descricao}
                onChange={(event) =>setDescricao(event.target.value)} />
         
                 <label>
                    Enderço do Video
                </label>
                <input
                id="url"
                type="text"
                placeholder="Digite a Url do video" 
                value={url}
                onChange={(event) =>setUrl(event.target.value)} />
            
                 <label>
                    Autor do video
                </label>
                <input
                id="autor"
                type="text"
                placeholder="Digite o autor do video"
                value={autor}
                onChange={(event) => setAutor(event.target.value)} />
            
            
        
                <button className="botao" onClick={adicionarVideo}>Adicionar</button>
            </div>
            </div>
            </form>
            
        </div>
     <footer className="p-5 m-9">
      @2023 @kha-ifms
     </footer>
          </main>
       </div>
    


    
      
    </div>

 </>)
    
}