import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDateTime(rawDate : string): string{  /*recebe uma string e retorna uma string formatada*/

    const date = new Date(rawDate); /*converte a string em um objeto Date*/

    return format(date,"dd/MM/yyyy 'às' HH'h'mm", {
      locale: ptBR,
    });
}

console.log(formatDateTime('2024-06-15T14:30:00Z'));

export function formatRelativeTime(rawDate : string): string{ /*recebe uma string e retorna uma string formatada como tempo relativo*/

    const date = new Date(rawDate); /*converte a string em um objeto Date*/

    return formatDistanceToNow(date, {
      locale: ptBR,
      addSuffix: true,
    });
}
