import type { InferGetServerSidePropsType } from "next";
import { Center } from "@chakra-ui/react";

import type { Resume } from "../models/resume";

export const getServerSideProps = async () => {
    const response = await fetch("http://localhost:5000/resume");
    const resume: Resume = await response.json();

    return {
        props: {
            resume,
        },
    };
};

function FetchPage({
    resume,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return <Center>{resume.intro}</Center>;
}

export default FetchPage;
