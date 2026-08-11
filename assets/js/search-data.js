// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "Education, research &amp; work experience, talks, service, and skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "Recent activity and updates.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-began-as-visiting-researcher-at-the-artificial-intelligence-and-machine-learning-group-university-of-oxford-working-on-multi-agent-reinforcement-learning-and-game-theory-with-prof-dr-jiarui-gan",
          title: 'Began as Visiting Researcher at the Artificial Intelligence and Machine Learning Group, University...',
          description: "",
          section: "News",},{id: "news-joined-the-international-labour-organization-the-united-nations-as-junior-artificial-intelligence-officer-a-newly-established-role-leading-llm-multi-agent-and-rag-based-system-development-for-labour-market-intelligence-also-served-as-co-president-of-the-ilo-intern-board-54-interns-through-june-2025",
          title: 'Joined the International Labour Organization (The United Nations) as Junior Artificial Intelligence Officer...',
          description: "",
          section: "News",},{id: "news-co-authored-labour-market-intelligence-drafting-analysis-reports-with-generative-ai-for-the-generative-ai-and-official-statistics-workshop-2025-unece-and-contributed-to-the-113th-international-labour-conference",
          title: 'Co-authored Labour Market Intelligence: Drafting analysis reports with generative AI for the Generative...',
          description: "",
          section: "News",},{id: "news-joined-a-roundtable-at-ai-house-davos-world-economic-forum-week-on-the-role-of-agentic-ai-in-the-public-sector",
          title: 'Joined a roundtable at AI House Davos (World Economic Forum week) on the...',
          description: "",
          section: "News",},{id: "news-started-as-ai-intern-at-the-world-trade-organization-integrated-database-unit-economic-research-and-statistics-division-building-llm-assisted-data-pipelines-and-responsible-ai-solutions-for-multilingual-official-statistics",
          title: 'Started as AI Intern at the World Trade Organization (Integrated Database Unit, Economic...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Yunxiang_Guo_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%75%6F_%79%78@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/xiaoxiaoshikui", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yunxiang-guo-24452718b", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
