import { MateButton } from '@/src/app/components/util/button';
import Logo from '@/src/app/components/util/logo';

export default function Confirmation() {
  return (
    <section className='flex h-screen flex-col items-center justify-center'>
      <Logo />
      <h1 className='mt-24 text-center text-5xl font-medium capitalize leading-tight'>
        Thank you for <br></br>joining CookMate!
      </h1>
      <p className='mb-16 mt-12 text-center text-xl'>
        A confirmation email has been sent to <br /> your inbox
      </p>
      <MateButton label=' Verify now' />
    </section>
  );
}
