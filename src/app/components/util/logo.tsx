import Image from 'next/image';
import logo from '@/public/mate.svg';

export default function Logo() {
  return <Image src={logo} width={500} height={500} alt='CookMate Logo' />;
}
