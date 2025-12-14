import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../assets/icons/logo.png';
import classes from './main-header.module.css';
import MainHeaderBackground from './components/main-header-background';

export default function MainHeader({children}) {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image priority src={logoImg} alt="A plate with food on it" />
          Nextlevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul> 
        </nav>
      </header>
    </>
  );
}