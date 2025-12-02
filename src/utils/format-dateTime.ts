import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDateTime(rawDate : string): string{

    const date = new Date(rawDate);

    return format(date,"dd/MM/yyyy 'às' HH'h'mm", {
      locale: ptBR,
    });
}

console.log(formatDateTime('2024-06-15T14:30:00Z'));

export function formatRelativeTime(rawDate : string): string{

    const date = new Date(rawDate);

    return formatDistanceToNow(date, {
      locale: ptBR,
      addSuffix: true,
    });
}
