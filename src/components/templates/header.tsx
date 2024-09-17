import Image from 'next/image';
import logo from '..//..//../public/static/imgs/logo.svg';
import Button from '../button';
import Link from 'next/link';

export default function Header(){
    return(
        <div className='flex bg-[#0d3b66] justify-around items-center py-4 shadow-sm '>
            <div className='flex items-center gap-2 '>
                <Image
                    src={logo}
                    width={70}
                    height={70}
                    alt="Logo picture"
                />
                <Link href={"/"}>
                    <h1 className='text-2xl font-black cursor-pointer'>EducaGames</h1>
                </Link>
               
            </div>
            <nav>
                <ul className='flex gap-2 flex-grow'>
                    <Button link={"/catalogo"}>
                        Jogos
                    </Button>
                    <Button link={"/"}>
                        Home
                    </Button>
                    <Button link={"/sugerir"}>
                        Sugerir Jogos
                    </Button>
                </ul>
            </nav>
            <div>
                <ul className='flex gap-2'>
                    <Button link={"/login"}>
                       Log in
                    </Button>
                    <Button link={"/cadastro"}>
                       Cadastre-se
                    </Button>
                </ul>
            </div>
        </div>

    )
}