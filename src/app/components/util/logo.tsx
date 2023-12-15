import Image from 'next/image';
import logo from '@/public/mate.svg';

export default function Logo() {
  return <Image src={logo} width={200} alt='CookMate Logo' />;
}
