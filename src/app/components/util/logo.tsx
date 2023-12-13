import Image from 'next/image';
import logo from '@/public/mate.svg';

export default function Logo() {
  return <Image src={logo} width={200} height={42} alt='CookMate Logo' />;
}
