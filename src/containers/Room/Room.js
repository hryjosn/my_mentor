import React from 'react';
import { useRouter } from "next/router";
// import { callGetIssueById } from '@api'

const Room = ({ props }) => {
    const router = useRouter();
    const params = router.query.params || [];
    const roomId = params[0];
    if (!roomId) {
        return (
            <div>
                Nothing
            </div>
        );
    }
    return (
        <>
            <div>
                {roomId}
            </div>
            <div>
            </div>
        </>
    );
};

// export async function getStaticProps(context) {
//     const res = await callGetIssueById()
//     console.log("context>>", context)
//     console.log("res>>", res)
//     return {
//         props: { hi: "test" }, // will be passed to the page component as props
//     }
// }

// export async function getStaticPaths(ctx) {
//     console.log("ctx>>>", ctx)
//     // Call an external API endpoint to get posts
//     const res = await callGetIssueById()
//     const posts = await res.json()
//
//     // Get the paths we want to pre-render based on posts
//     const paths = posts.map((post) => ({
//         params: { id: post.id },
//     }))
//
//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
//
// }

export default Room;

