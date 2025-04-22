export default defineAppConfig({
    url: 'https://k8scockpit.tech/', 

    logo: '/images/k8scockpitlogo.png',

    theme: 'epoxia',

    // dark_mode_selector_hide: true,

    // If you only have one author, you can set the author here
    // It will be used as the default author for all posts AND as the general logo/description/socials for the website
    name: 'K8sCockPit',
    avatar: '/images/KCDSpainPic.jpeg',
    description:
        'I\'m a Platform Engineer Architect with a passion for writing about Kubernetes, Cloud Native technologies and engineering leadership. First Golden Kubestronaut in Spain and one of the first one in Europe.',

    socials: {
  //      twitter: 'https://twitter.com/kaskol10',
      //  mastodon: 'https://piaille.fr',
       // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com/in/ramiroalvfer/',
       // facebook: 'https://facebook.com',
        //instagram: 'https://instagram.com',
        github: 'https://github.com/kaskol10',

        // possible values : check the list of supported networks at
        // see https://github.com/stefanobartoletti/nuxt-social-share
        sharing_networks: ['facebook', 'bluesky', 'threads', 'twitter', 'linkedin', 'email', 'pinterest', 'reddit', 'pocket', 'whatsapp', 'telegram']
    },

    newsletter: {
        enabled: false, 
        form_action: 'https://dashboard.mailerlite.com/forms/1455323/151766576435037399/share',
        provider: 'mailerlite'
    },

    comments: {
        enabled: false,
        hyvor_talk: {
            website_id: '10519', // Replace with your Hyvor Talk website ID (it won't work with this one)
        },
    },

    table_of_contents: false,

    // if you have multiple authors, you can set them here
    authors: [
        {
            default: true,
            username: 'ramiroalvfer',
            name: 'Ramiro Alvarez',
            description:
                'I\'m a Platform Engineer Architect with a passion for writing about Kubernetes, Cloud Native technologies and engineering leadership. First Golden Kubestronaut in Spain and one of the first one in Europe.',
            avatar: '/images/KCDSpainPic.jpeg',
            socials: {
                linkedin: 'https://linkedin.com/ramiroalvfer',
                github: 'https://github.com/kaskol10',
            },
        },
    ],

    menu: [
        { name: 'Home', path: '/' },
        { name: 'Archives', path: '/archives' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' }
    ],

    robots: [
        {
            UserAgent: '*',
            Disallow: ['/'],
        },
    ],

    donations: {
        buy_me_a_coffee: 'ramiroalvfer',
    },

    portfolio: [
        {
            name: 'Understanding the EU Cyber Resilience Act CRA LFEL1001',
            description: 'Understanding the EU Cyber Resilience Act CRA LFEL1001 certification. 2025-04-21',
            url: 'https://k8scockpit.tech/images/certs/cra.pdf',
            image: '/images/certs/cra.png',
            status: 'certification',
        },
        {
            name: 'Alibaba Cloud DevOps Engineer',
            description: 'Alibaba Cloud DevOps Engineer certification from Alibaba Cloud. 2021-01-14',
            url: 'https://k8scockpit.tech/images/certs/alibaba_devops_cert.png',
            image: '/images/certs/alibaba_devops_badge.png',
            status: 'certification',
        },
        {
            name: 'Using Kubernetes to Manage Containers and Cluster Resources',
            description: 'Using Kubernetes to Manage Containers and Cluster Resources certification from Alibaba Cloud. 2021-01-11',
            url: 'https://k8scockpit.tech/images/certs/alibaba_k8s.png',
            image: '/images/certs/badge_alibaba_k8s.png',
            status: 'certification',
        },
        {
            name: 'MongoDB Certified: DBA Associate Level',
            description: 'MongoDB Certified: DBA Associate Level certification from MongoDB. 2020-09-01',
            url: 'https://k8scockpit.tech/images/certs/mongodba.pdf',
            image: '/images/certs/mongodbaLogo.png',
            status: 'certification',
        },
        {
            name: 'Microsoft Certified Azure Fundamentals',
            description: 'Microsoft Certified Azure Fundamentals certification from Microsoft. 2020-07-01',
            url: 'https://k8scockpit.tech/images/certs/AZ900.pdf',
            image: '/images/certs/AZ900Logo.png',
            status: 'certification',
        },
        {
            name: 'HashiCorp Certified: Terraform Associate',
            description: 'HashiCorp Certified: Terraform Associate certification from HashiCorp. 2020-06-01',
            url: 'https://k8scockpit.tech/images/certs/terraformAssociate.pdf',
            image: '/images/certs/terraformAssociateLogo.png',
            status: 'certification',
        },
        {
            name: 'Elastic Certified Engineer',
            description: 'Elastic Certified Engineer certification from Elastic. 2020-04-10',
            url: 'https://k8scockpit.tech/images/certs/ElasticCertified.pdf',
            image: '/images/certs/elasticEngineerLogo.png',
            status: 'certification',
        },
        {
            name: 'Google Cloud Professional Cloud Architect',
            description: 'Google Cloud Professional Cloud Architect certification from Google Cloud. 2019-12-27',
            url: 'https://k8scockpit.tech/images/certs/GoogleProfessionalCloudArchitect.pdf',
            image: '/images/certs/GoogleProfessionalCloudArchitectLogo.png',
            status: 'certification',
        },
        {
            name: 'Certified Kubernetes Application Developer: CKAD',
            description: 'Certified Kubernetes Application Developer: CKAD certification from The Linux Foundation. 2019-07-01',
            image: '/images/certs/ckadLogo.png',
            url: 'https://k8scockpit.tech/images/certs/ckad.pdf',
            status: 'certification',
        },
        {
            name: 'Google Cloud Associate Cloud Engineer',
            description: 'Google Cloud Associate Cloud Engineer certification from Google Cloud. 2019-04-01',
            url: 'https://k8scockpit.tech/images/certs/GoogleCloudAssociateCloudEngineer.pdf',
            image: '/images/certs/GoogleCloudAssociateCloudEngineerLogo.png',
            status: 'certification',
        },
        {
            name: 'AWS Developer Associate',
            description: 'AWS Developer Associate certification from Amazon Web Services. 2018-12-01',
            url: 'https://k8scockpit.tech/images/certs/AWSDeveloper.pdf',
            image: '/images/certs/AWSDeveloperLogo.png',
            status: 'certification'
        },
        {
            name: 'AWS Solutions Architect Associate',
            description: 'AWS Solutions Architect Associate certification from Amazon Web Services. 2018-11-01',
            url: 'https://k8scockpit.tech/images/certs/SolutionsArchitect.pdf',
            image: '/images/certs/SolutionsArchitectLogo.png',
            status: 'certification',
        },
        {
            name: 'AWS SysOps Administrator Associate',
            description: 'AWS SysOps Administrator Associate certification from Amazon Web Services. 2018-09-01',
            url: 'https://k8scockpit.tech/images/certs/AWS-SysOps-Administrator-Associate.png',
            image: '/images/certs/SysOpsLogo.png',
            status: 'certification'
        },
        {
            name: 'Jenkins Engineer',
            description: 'Jenkins Engineer certification from CloudBees. 2017-12-21',
            url: 'https://k8scockpit.tech/images/certs/JenkinsEngineer.png',
            image: '/images/certs/JenkinsEngineerLogo.png',
            status: 'certification'
        }
    ],
})

