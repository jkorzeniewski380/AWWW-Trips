import { useEffect } from 'react';
import { isNil, isEmpty } from 'ramda';

export const useTitle = (title) => {
    useEffect(() => {
        const oldTitle = document.title;

        if (!isNil(title) && !isEmpty(title)) {
            document.title = title;
        }

        return () => {
            document.title = oldTitle;
        }
    }, [title]);
};
