import{A as o}from"./UIcon.c1211e7f.js";function u(e,...s){const r=Object.assign({},e);return Object.keys(r).forEach(n=>{s.includes(n)&&delete r[n]}),r}const a=e=>e,d=[a({name:"Programming Languages",slug:"pro-lang"}),a({name:"Frameworks",slug:"framework"}),a({name:"Libraries",slug:"library"}),a({name:"Langauges",slug:"lang"}),a({name:"Databases",slug:"db"}),a({name:"ORMs",slug:"orm"}),a({name:"DevOps",slug:"devops"}),a({name:"Testing",slug:"test"}),a({name:"Dev Tools",slug:"devtools"}),a({name:"Markup & Style",slug:"markup-style"}),a({name:"Design",slug:"design"}),a({name:"Soft Skills",slug:"soft"})],t=e=>{const s=u(e,"category");return e.category&&(s.category=d.find(r=>r.slug===e.category)),s},l=[t({slug:"js",color:"yellow",description:"JavaScript is a versatile programming language used for building dynamic and interactive web applications.",logo:o.js,name:"JavaScript",category:"pro-lang"}),t({slug:"python",color:"blue",description:"Python is a powerful, easy-to-learn programming language widely used for web development, data science, and automation.",logo:o.Python,name:"Python",category:"pro-lang"}),t({slug:"html",color:"orange",description:"HTML (HyperText Markup Language) is the standard language for structuring web pages.",logo:o.HTML,name:"HTML",category:"markup-style"}),t({slug:"css",color:"blue",description:"CSS (Cascading Style Sheets) is used to design and style web pages, enhancing their visual presentation.",logo:o.CSS,name:"CSS",category:"markup-style"}),t({slug:"react",color:"cyan",description:"React is a JavaScript library for building fast and scalable user interfaces.",logo:o.react,name:"react",category:"library"}),t({slug:"bootstrap",color:"purple",description:"Bootstrap is a popular CSS framework for creating responsive and mobile-first web pages.",logo:o.Bootstrap,name:"Bootstrap",category:"framework"}),t({slug:"django",color:"green",description:"Django is a high-level Python framework that simplifies backend development with built-in features.",logo:o.Django,name:"Django",category:"framework"}),t({slug:"mongodb",color:"green",description:"MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.",logo:o.MongoDB,name:"MongoDB",category:"db"}),t({slug:"sql",color:"blue",description:"SQL (Structured Query Language) is used for managing and querying relational databases.",logo:o.SQL,name:"SQL",category:"db"}),t({slug:"sqlite",color:"gray",description:"SQLite is a lightweight, self-contained database engine commonly used for local storage.",logo:o.SQLite,name:"SQLite",category:"db"}),t({slug:"postgresql",color:"blue",description:"PostgreSQL is a powerful, open-source relational database known for reliability and scalability.",logo:o.PostgreSQL,name:"PostgreSQL",category:"db"}),t({slug:"git",color:"red",description:"Git is a version control system for tracking changes in source code during software development.",logo:o.Git,name:"Git",category:"devtools"})],p="Skills",y=(...e)=>l.filter(s=>e.includes(s.slug)),f=e=>{const s=[],r=[];return l.forEach(n=>{if(e.trim()&&!n.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!n.category){r.push(n);return}let g=s.find(c=>{var i;return c.category.slug===((i=n.category)==null?void 0:i.slug)});g||(g={items:[],category:n.category},s.push(g)),g.items.push(n)}),r.length!==0&&s.push({category:{name:"Others",slug:"others"},items:r}),s};export{f as a,y as g,l as i,p as t};
