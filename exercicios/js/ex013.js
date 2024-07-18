/*
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function diaUtil(dia) {
    if (dia < 1 || dia > 7) {
        return 'Inválido'
    }
    switch(dia) {
        case 1:
            return 'Fim de semana'
        case 7:
            return 'Fim de semana'
        default:
            return 'Útil'
    }
}