export async function getServerSideProps() {
    return {
        props: {
            namespacesRequired: ['home']
        },
    };
}

export { default } from '@containers/HomePage';
