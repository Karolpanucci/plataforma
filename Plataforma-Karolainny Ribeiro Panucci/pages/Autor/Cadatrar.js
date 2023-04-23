import { useState } from "react"
import'src/app/globals.css'

import{ Home as Homeicon, PlusSquare, User, UserPlus, ListVideo, PlayCircle, ChevronLeft, ChevronRight} from 'lucide-react'
export default function Cadatrar(props){
    const[autor, setAutor]= useState('')
    const[nome, setNome]= useState('')
    const[canal, setCanal]= useState('')
    const[url, setUrl]= useState('')
    const adicionarAutor =()=>{
      const novoAutor ={
        id: Math.random().toString(36).slice(1, 6),
        nome: nome,
        canal: canal,
        url: url


      }
      const autualizarAutor =[autor];
      autualizarAutor.push(novoAutor);
      setAutor(autualizarAutor);
      localStorage.setItem('listarautor', JSON.stringify(autualizarAutor));

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
        <main className='flex-1 p-5' >
            <h1 className='font-semibold text-3xl mt-7'>
              Adicionar Novos Autores
            </h1>
            <p>preencha o Formulario e adicione um novo autor </p>
            <div className="formulario">
           <form>
            <div className="formulario">
           < div className="campo-texto">
                  <label>
                   Nome completo
                   </label>
                <input
                id="nome"
                type="text"
                placeholder="Digite o nome do autor"
                value={nome}
                onChange={(event) => setNome(event.target.value)} />
                  <label>
                   Canal
                </label>
                <input
                id="canal"
                type="text"
                placeholder="Digite o nome do canal"
                value={canal}
                onChange={(event) =>setCanal(event.target.value)} />
                
                 <label>
                    Enderço do canal
                  </label>
                <input
                id="url"
                type="text"
                placeholder="Digite a URL do canal"
                value={url}
                onChange={(event) =>setUrl(event.target.value)} />
              
            
            
        
                <button className="botao" onClick={adicionarAutor}>Adicionar</button>
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