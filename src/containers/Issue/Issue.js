import React from 'react';
import { useRouter } from "next/router";

const Issue = (props) => {
    const { description, title } = props?.data;
    const router = useRouter()
    const params = router.query.params || []
    const issueId = params[0]
    if (!issueId) {
        return (
            <div>
                Nothing
            </div>
        );
    }
    return (
        <>
            <div>
                title: {title}
            </div>
            <div>
                description: {description}
            </div>
        </>
    );
};


export default Issue;

