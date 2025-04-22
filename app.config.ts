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
            name: 'Certified Open Source Developer for Enterprise - CODE',
            description: 'Certified Open Source Developer for Enterprise - CODE certification from The Linux Foundation. 2025-04-01',
            url: 'https://k8scockpit.tech/images/certs/CODE.pdf',
            image: '/images/certs/CODE.png',
            status: 'certification',
        },
        {
            name: 'Golden Kubestronaut',
            description: 'Golden Kubestronaut certification from The Linux Foundation. 2025-09-30',
            url: 'https://www.credly.com/badges/3b37018d-3a90-4e3d-b292-91c2ca159d08/public_url',
            image: '/images/certs/GoldenKubestronaut.png',
            status: 'certification',
        },
        {
            name: 'Istio Certified Associate - ICA',
            description: 'Istio Certified Associate - ICA certification from The Linux Foundation. 2025-03-01',
            url: 'https://k8scockpit.tech/images/certs/istio.pdf',
            image: '/images/certs/istio.png',
            status: 'certification',
        },
        {
            name: 'Linux Foundation Certified System Administrator - LFCS',
            description: 'Linux Foundation Certified System Administrator - LFCS certification from The Linux Foundation. 2025-02-14',
            url: 'https://k8scockpit.tech/images/certs/LFCS.pdf',
            image: '/images/certs/LFCS.png',
            status: 'certification',
        },
        {
            name: 'Cilium Certified Associate',
            description: 'Cilium Certified Associate certification from The Linux Foundation. 2025-01-30',
            url: 'https://k8scockpit.tech/images/certs/cilium.pdf',
            image: '/images/certs/cilium.png',
            status: 'certification',
        },
        {
            name: 'Certified Backstage Associate - CBA',
            description: 'Certified Backstage Associate - CBA certification from The Linux Foundation. 2025-01-19',
            url: 'https://k8scockpit.tech/images/certs/cba.pdf',
            image: '/images/certs/cba.png',
            status: 'certification',
        },
        {
            name: 'Kyverno Certified Associate',
            description: 'Kyverno Certified Associate certification from The Linux Foundation. 2025-01-09',
            url: 'https://k8scockpit.tech/images/certs/KyvernoCertifiedAssociate.pdf',
            image: '/images/certs/KyvernoCertifiedAssociate.png',
            status: 'certification',
        },
        {
            name: 'Open Telemetry Certified Associate - OTEL',
            description: 'Open Telemetry Certified Associate certification from The Linux Foundation. 2024-12-19',
            url: 'https://k8scockpit.tech/images/certs/OTEL.pdf',
            image: '/images/certs/OTEL.png',
            status: 'certification',
        },
        {
            name: 'Kubestronaut',
            description: 'Kubestronaut certification from The Linux Foundation. 2024-09-30',
            url: 'https://k8scockpit.tech/images/certs/Kubestronaut.png',
            image: '/images/certs/kubestronaut.png',
            status: 'certification',
        },
        {
            name: 'Certified Kubernetes Security Specialist - CKS',
            description: 'Certified Kubernetes Security Specialist - CKS certification from The Linux Foundation. 2024-09-30',
            url: 'https://k8scockpit.tech/images/certs/CKS.pdf',
            image: '/images/certs/CKS.png',
            status: 'certification',
        },
        {
            name: 'AWS Certified AI Practitioner',
            description: 'AWS Certified AI Practitioner certification from Amazon Web Services. 2024-09-12',
            url: 'https://k8scockpit.tech/images/certs/AWSCertifiedAIPractitioner.pdf',
            image: '/images/certs/AWSCertifiedAIPractitioner.png',
            status: 'certification',
        },
        {
            name: 'Kubernetes and Cloud Native Security Associate - KCSA',
            description: 'Kubernetes and Cloud Native Security Associate - KCSA certification from The Linux Foundation. 2024-09-09',
            url: 'https://k8scockpit.tech/images/certs/KCSA.pdf',
            image: '/images/certs/KCSA.png',
            status: 'certification',
        },
        {
            name: 'Certified GitOps Associate - CGOA',
            description: 'Certified GitOps Associate - CGOA certification from The Linux Foundation. 2024-08-31',
            url: 'https://k8scockpit.tech/images/certs/CGOA.pdf',
            image: '/images/certs/CGOA.png',
            status: 'certification',
        },
        {
            name: 'FinOps Certified Engineer - FOCE',
            description: 'FinOps Certified Engineer - FOCE certification from The Linux Foundation. 2024-08-29',
            url: 'https://k8scockpit.tech/images/certs/FOCE.png',
            image: '/images/certs/FOCE.png',
            status: 'certification',
        },
        {
            name: 'Scaleway Foundations',
            description: 'Scaleway Foundations certification from Scaleway. 2024-08-21',
            url: 'https://k8scockpit.tech/images/certs/scalewayFoundations.pdf',
            image: '/images/certs/scalewayFoundations.png',
            status: 'certification',
        },
        {
            name: 'Co-Founder & Advisor',
            description: 'Co-Founder & Advisor in Resizes 2024-06/currently',
            url: 'https://resiz.es/',
            image: '/images/certs/resizes.svg',
            status: 'work'
        },
        {
            name: 'Certified Argo Project Associate',
            description: 'Certified Argo Project Associate certification from The Linux Foundation. 2024-03-06',
            url: 'https://k8scockpit.tech/images/certs/capa.pdf',
            image: '/images/certs/capa.png',
            status: 'certification',
        },
        {
            name: 'Cloud FinOps: Experiencias en el mundo real',
            description: 'Speaker at KCD Spain 2023. 2023-10-12',
            url: 'https://youtu.be/ePBn8cE-_uI?si=UjmifB0InyTss5Qy',
            image: '/images/certs/KCDSpain2023.png',
            status: 'talk',
        },
        {
            name: 'E-commerce Website',
            description: 'Create e-commerce website for Bitke 2023-11',
            url: 'https://bitke.es/',
            image: '/images/certs/bitke.webp',
            status: 'work'
        },
        {
            name: 'Made Load Testing Dev-Friendly Again! When K6 meets Argo',
            description: 'Speaker at KCD Munich 2022. 2022-10-12',
            url: 'https://docs.google.com/presentation/d/1ujIw4NCcU3M2CVviTZC5GvbPjSvylTDqiCPMqxWUb6A/edit?usp=sharing',
            image: '/images/certs/Youtube.png',
            status: 'talk',
        },
        {
            name: 'Prometheus Certified Associate',
            description: 'Prometheus Certified Associate certification from The Linux Foundation. 2022-09-01',
            url: 'https://k8scockpit.tech/images/certs/PrometheusCertifiedAssociate.pdf',
            image: '/images/certs/PrometheusCertifiedAssociate.png',
            status: 'certification',
        },
        {
            name: 'Cloud FinOps and Sustainability on Kubernetes',
            description: 'Speaker at Cloud Rejekts 2022. 2022-04-14',
            url: 'https://youtu.be/S07OdFshwDk?t=18360',
            image: '/images/certs/Youtube.png',
            status: 'talk',
        },
        {
            name: 'Cloud FinOps and Sustainability on Kubernetes',
            description: 'Speaker at WTF is SRE 2022. 2022-03-28',
            url: 'https://youtu.be/bHRBWbPkuX8',
            image: '/images/certs/Youtube.png',
            status: 'talk',
        },
        {
            name: 'Neo4j Certified Professional',
            description: 'Neo4j Certified Professional certification from Neo4j. 2022-03-14',
            url: 'https://k8scockpit.tech/images/certs/Neo4jProfessional.pdf',
            image: '/images/certs/Neo4jProfessional.png',
            status: 'certification',
        },
        {
            name: 'Staff Platform Engineer',
            description: 'Staff Platform Engineer in Empathy.co 2022-03/currently',
            url: 'https://empathy.co/',
            image: '/images/certs/empathy.jpeg',
            status: 'work'
        },
        {
            name: 'Kubernetes and Cloud Native Associate - KCNA',
            description: 'Kubernetes and Cloud Native Associate - KCNA certification from The Linux Foundation. 2022-01-26',
            url: 'https://k8scockpit.tech/images/certs/KCNA.pdf',
            image: '/images/certs/KCNA.png',
            status: 'certification',
        },
        {
            name: 'Kubernetes Backup y estrategies de migración con Velero',
            description: 'Speaker at Kubernetes Community Days Guatemala. 2021-11-27',
            url: 'https://youtu.be/bHRBWbPkuX8',
            image: '/images/certs/Youtube.png',
            status: 'talk',
        },
        {
            name: 'Kubernetes Backup and Migration Strategies with Velero',
            description: 'Speaker at Kubernetes Community Days Italy 2021. 2021-11-18',
            url: 'https://youtu.be/xe-ZCvbrnoM?list=PLj6h78yzYM2M3cMd-zoDppjMo9eRmQrYU',
            image: '/images/certs/Youtube.png',
            status: 'talk',
        },
        {
            name: 'Tag Allocation Strategies',
            description: 'Speaker at Hashitalks Spain 2021. 2021-11-04',
            url: 'https://youtu.be/0JdG9kP6EB0?list=PL81sUbsFNc5a9a3tHKJXBqssaU4_nhGpG',
            image: '/images/certs/Youtube.png',
            status: 'talk',
        },
        {
            name: 'AWS Solutions Architect Professional',
            description: 'AWS Solutions Architect Professional certification from Amazon Web Services. 2021-10-25',
            url: 'https://k8scockpit.tech/images/certs/AWSCertifiedSolutionsArchitectProfessional.pdf',
            image: '/images/certs/AWSCertifiedSolutionsArchitectProfessional.png',
            status: 'certification',
        },
        {
            name: 'FinOps Certified Practitioner - FOCP',
            description: 'FinOps Certified Practitioner - FOCP certification from The Linux Foundation. 2021-10-03',
            url: 'https://k8scockpit.tech/images/certs/FOCP.pdf',
            image: '/images/certs/FOCP.png',
            status: 'certification',
        },
        {
            name: 'Certified Kubernetes Administrator - CKA',
            description: 'Certified Kubernetes Administrator - CKA certification from The Linux Foundation. 2021-07-28',
            url: 'https://k8scockpit.tech/images/certs/CKA.pdf',
            image: '/images/certs/CKA.png',
            status: 'certification',
        },
        {
            name: 'Chaos Engineering Practitioner',
            description: 'Chaos Engineering Practitioner certification from Gremlin. 2021-07-22',
            url: 'https://k8scockpit.tech/images/certs/GremlinChaosEngineering.pdf',
            image: '/images/certs/GremlinChaosEngineering.png',
            status: 'certification',
        },
        {
            name: 'Running Apache Spark on K8s',
            description: 'Speaker at Kubernetes Community Days Spain 2021. 2021-06-08',
            url: 'https://youtu.be/UBZqr8q9ygo',
            image: '/images/certs/Youtube.png',
            status: 'talk',
        },
        {
            name: 'AWS DevOps Engineer Professional',
            description: 'AWS DevOps Engineer Professional certification from Amazon Web Services. 2021-05-25',
            url: 'https://k8scockpit.tech/images/certs/DevOpsEngineerProfessional.pdf',
            image: '/images/certs/DevOpsEngineerProfessional.png',
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
            name: 'Kubernetes PSP',
            description: 'Speaker at Cloud Native Asturias 2020. 2020-12-21',
            url: 'https://youtu.be/ufDk1LGd3dw',
            image: '/images/certs/Youtube.png',
            status: 'talk',
        },
        {
            name: 'From Localhost to Prod',
            description: 'Speaker at DevFest Spain 2020. 2020-09-10',
            url: 'https://youtu.be/i2OdR6EfJXg',
            image: '/images/certs/Youtube.png',
            status: 'talk',
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
            name: 'Deploying Spark on the Cloud (GCP, AWS, Azure)',
            description: 'Speaker at DevFest Asturias 2019. 2019-11-14',
            url: 'https://youtu.be/HREbuQbuv-k',
            image: '/images/certs/Youtube.png',
            status: 'talk',
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
            name: 'DevOps Engineer',
            description: 'DevOps Engineer in Empathy.co 2018-01/2022-03',
            url: 'https://empathy.co/',
            image: '/images/certs/empathy.jpeg',
            status: 'work'
        },
        {
            name: 'Jenkins Engineer',
            description: 'Jenkins Engineer certification from CloudBees. 2017-12-21',
            url: 'https://k8scockpit.tech/images/certs/JenkinsEngineer.png',
            image: '/images/certs/JenkinsEngineerLogo.png',
            status: 'certification'
        },
        {
            name: 'DevOps Engineer',
            description: 'DevOps Engineer in DXC. 2015-10/2018-01',
            url: 'https://dxc.com/us/en',
            image: '/images/certs/dxc.jpeg',
            status: 'work'
        },
        {
            name: 'Network Engineer',
            description: 'Network Engineer in Informática El Corte Inglés. 2014-07/2015-07',
            url: 'https://k8scockpit.tech/images/certs/iecisa.png',
            image: '/images/certs/iecisa.jpeg',
            status: 'work'
        },
        {
            name: 'IoT Research Engineer',
            description: 'IoT Research Engineer in Ik4-Ikerlan center. 2013-10/2014-03',
            url: 'https://www.ikerlan.es/en',
            image: '/images/certs/ikerlan.jpeg',
            status: 'work'
        }
    ],
})

