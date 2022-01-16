import { useState } from 'react';

export default function useFormattedData(data: any) {
    const [formatted, setFormatted] = useState(data);

    const search = (value: any) => {
        if (value.length === 0) {
            return;
        } else {
            const a = formatted.filter((item: any) => {
                const values = Object.values(item).map((el: any) =>
                    el.toString().toLowerCase()
                );
                if (values.includes(value.toLowerCase())) return item;
            });
            setFormatted(a);
        }
    };

    const filter = (value: any) => {
        setFormatted([...formatted].filter(value));
    };

    const sortBy = (value: any) => {
        if (value instanceof Function) {
            setFormatted([...formatted].sort(value));
        } else {
            try {
                setFormatted(
                    [...formatted].sort((a: any, b: any) =>
                        a[value].toString().toLowerCase() >
                        b[value].toString().toLowerCase()
                            ? 1
                            : -1
                    )
                );
            } catch (e) {
                console.error('Provided key does not exists in object.');
            }
        }
    };

    return { formatted, search, filter, sortBy };
}
