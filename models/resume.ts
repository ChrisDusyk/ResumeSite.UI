import { Option } from "functional-ts-primitives";

export type WorkExperience = {
    title: string;
    companyName: string;
    location: string;
    startDate: Date;
    endDate: Option<Date>;
    description: string;
};

export type Reference = {
    name: string;
    phone: string;
    email: string;
};

export type Education = {
    instituteName: string;
    startDate: Date;
    endDate: Option<Date>;
    certification: string;
    instituteLocation: string;
};

export type AdditionalInformation = {
    languages: string[];
    interests: string[];
};

export type Resume = {
    intro: string;
    workExperience: WorkExperience[];
    skills: string[];
    references: Reference[];
    education: Education[];
    additionalInformation: AdditionalInformation;
};
