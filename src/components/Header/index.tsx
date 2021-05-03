import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './styles.module.scss';


export function Header(){
const CurrentDate = format(new Date(), 'EEEEEE, d MMMM',{
  locale: ptBR,
});
  return(
    <header className={styles.container}>
      <img src="/logo.svg" alt="Podcastr"/>

      <p>O melhor pra voce ouvir, sempre!</p>

      <span>{CurrentDate}</span>
    </header>
  )
}