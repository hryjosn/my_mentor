import React from 'react';

const Issue = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            {id}
        </div>
    );
};

export default Issue;
