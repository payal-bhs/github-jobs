import axios from "axios";
import * as job from "./Jobs";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockJob = {
    "id": "9b72814f-0a1d-4526-86a0-a02fa8891fe2",
    "type": "Full Time",
    "url": "https://jobs.github.com/positions/9b72814f-0a1d-4526-86a0-a02fa8891fe2",
    "created_at": "Sun Jan 24 01:35:53 UTC 2021",
    "company": "Platform.sh",
    "company_url": "http://Platform.sh",
    "location": "Austin, Texas USA",
    "title": "Cloud Support Engineer (Magento)",
    "description": "<p>As a Cloud Support Engineer you will be responsible to assess the nature of product or service issues and resolve support problems for customers and partners through support tickets, live chat, and occasional voice calls. Successful employees are willing to collaborate with other team members, able to meet deadlines, and excited to test new ideas, tools, and tactics. We are looking for motivators, go-getters, and ways to improve our processes, our products, and ourselves. As one of our Cloud Support Engineers, you are our front line; when our customers think of how great Platform.sh is, they think of you.</p>\n<p>In a given day you might:\nTroubleshoot issues pertaining to the underlying infrastructure running customer applications.\nDiagnose, debug, and document issues in both applications and systems.\nDeploy and configure cloud infrastructure resources.\nTroubleshoot, reproduce, and report bugs.\nBecome a product expert and work toward improving our customer facing documentation.\nParticipate in limited on-call shifts, providing timely responses to high priority tickets and incidents.\nWork under limited supervision with considerable latitude for personal initiative.\nRespond to customer inquiries through our ticketing solution, ZenDesk.\nParticipate in training teammates.</p>\n<p>Qualifications\n3+ years combined of:\nWeb development using PHP, Python, Ruby, or Go.\nLinux system administration.\nExperience using git for version control.\nUnderstanding of DNS as well as TLS and encryption.\nExceptional communication skills to provide clear and empathetic customer support.\nExperience with Magento, Symfony, TYPO3, and/or Drupal.</p>\n<p>*Must already be authorized to work in the United States on a full-time basis for any employer.</p>\n<p>**This job is based in Austin, Texas.</p>\n<p>About Platform.sh</p>\n<p>Platform.sh is an idea-to-cloud application platform that simplifies cloud infrastructures.</p>\n<p>We give developers the tools they need to experiment, innovate, get rapid feedback and deliver better-quality features with speed and confidence thanks to our unique rapid cloning technology.</p>\n<p>We want people who are passionate, open, multicultural, friendly, humble and smart to join us and help this fast-growing, award-winning company to revolutionize the tech industry.</p>\n",
    "how_to_apply": "<p>Please click here to apply: <a href=\"https://platform.sh/company/careers/job/?gh_jid=4999712002\">https://platform.sh/company/careers/job/?gh_jid=4999712002</a></p>\n",
    "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbytXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80a842e9475806eea58d69299c58af973123996f/logo.png"
};

const mockJobs = [mockJob];

describe("Job API methods", () => {

    const params = new URLSearchParams();
    params.set("description", "ruby");
    params.set("page", "1");
    params.set("location", "");
    params.set("full_time", "false");

    const description = "ruby";
    const page = 1;
    const location = "";
    const full_time = false;

    describe("getJobs method", () => {
        it("should be defined", () => {
            expect(job.getJobs).toBeDefined();
        });

        it("should make an async GET request to the job list endpoint", done => {
            mockedAxios.get.mockRejectedValue({
                data: {},
            });

            mockedAxios.get.mockResolvedValue({
                data: mockJob,
            });

            job.getJobs({
                description,
                page,
                location,
                full_time,
            })
                .then(response => {
                    expect(response).toEqual({
                        error: false,
                        hasNextPage: false,
                        jobs: mockJobs,
                        loading: false
                    });
                })
                .catch(rejected => {
                    expect(rejected).toEqual({});
                });

            // expect(mockedAxios.get).toHaveBeenCalledWith(
            //     `/positions.json?${params.toString()}`,
            //     {
            //         timeout: job.REQUEST_TIMEOUT,
            //     },
            // );
            expect(mockedAxios.get).toHaveBeenCalledTimes(1);
            done();
        });
    });

    describe("getJob method", () => {

        it("should be defined", () => {
            expect(job.getJob).toBeDefined();
        });

        it("should make an async GET request to the github job endpoint", done => {
            mockedAxios.get.mockRejectedValue({
                data: {},
            });

            mockedAxios.get.mockResolvedValue({
                data: mockJob,
            });

            job
                .getJob("9b72814f-0a1d-4526-86a0-a02fa8891fe2")
                .then(response => {
                    expect(response).toEqual(mockJob);
                })
                .catch(rejected => {
                    expect(rejected).toEqual({});
                });

            // expect(mockedAxios.get).toHaveBeenCalledWith(
            //     "/positions/9b72814f-0a1d-4526-86a0-a02fa8891fe2.json",
            //     {
            //         timeout: job.REQUEST_TIMEOUT,
            //     },
            // );
            expect(mockedAxios.get).toHaveBeenCalledTimes(1);
            done();
        });
    });
});
