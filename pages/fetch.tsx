import type { InferGetServerSidePropsType } from "next";
import { Center } from "@chakra-ui/react";

import { getApiEndpoint } from "../constants/endpoints";
import type { Resume } from "../models/resume";

export const getServerSideProps = async () => {
    const endpoint = `${getApiEndpoint()}/resume`;
    const response = await fetch(endpoint, { mode: "cors" });
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
    return (
        <>
            <Center>{resume.intro}</Center>
            <Center>{resume.workExperience[0].companyName}</Center>
        </>
    );
}

export default FetchPage;
