import homeLogo from '../../assets/computador-com-icone-de-teclado-em-estilo-3d-pc-realista-colorido-com-monitor-em-branco-na-ilustracao-vetorial-plana-de-fundo-branco-ciberespaco-internet-dispositivo-gadget-conceito-de-tecnologia.png';
import ListaPostagens from '../../components/postagem/listapostagens/ListaPostagens';
import ModalPostagem from '../../components/postagem/modalpostagem/ModalPostagem';



function Home() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
  
              <div className="flex justify-around gap-4">
              <ModalPostagem />
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaPostagens />
      </>
    );
}

export default Home;