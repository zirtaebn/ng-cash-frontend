export const useFormatter = () => ({

    priceFormat: (price:number) => {

        return price.toLocaleString('pt-br', {

            minimumFractionDigits:2, 
            style: 'currency',
            currency: 'BRL'

        });
    },

    dateFormat: (date:string) => {

        // eslint-disable-next-line
        return new Date(date.replace(/-/g, '\/')).toLocaleDateString('pt-br', { year:'numeric', month:'short', day:'numeric'});
    }
})