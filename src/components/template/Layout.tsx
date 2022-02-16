import MenoLateral from "./ManuLateral";
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
// import ForcarAutenticacao from '../auth/ForcaAutenticacao'
import useAppData from "../../data/hook/useAppData"
import forcarAutenticacao from "../../functions/ForcaAutenticacao";

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}



export default function Layout (props: LayoutProps){
    const { tema} = useAppData()
    forcarAutenticacao
    return forcarAutenticacao(
        <div className={`${tema} flex h-screen w-screen`}>
            <MenoLateral/>
            <div className={`
                 flex flex-col w-full p-7
                 bg-gray-300 dark:bg-gray-800
            `}>
            <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
            <Conteudo>
                {props.children}
            </Conteudo>
            </div>
        </div>
    )
}