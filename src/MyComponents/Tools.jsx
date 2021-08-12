const Tools = [
  {
    key: "1",
    name: "React",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    category: "Front-end",
    link: "https://reactjs.org/docs/create-a-new-react-app.html",
  },
  {
    key: "2",
    name: "Angular",
    image: "https://angular.io/assets/images/logos/angular/angular.svg",
    category: "Front-end",
    link: "https://angular.io/guide/setup-local",
  },
  {
    key: "3",
    name: "Vue",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
    category: "Front-end",
    link: "https://vuejs.org/v2/guide/installation.html",
  },
  {
    key: "4",
    name: "Bootstrap",
    image:
      "https://pbs.twimg.com/profile_images/1273081551354396672/-Tzadxix_400x400.jpg",
    category: "Front-end",
    link: "https://getbootstrap.com/",
  },
  {
    key: "5",
    name: "Tailwind CSS",
    image:
      "https://tailwindcss.com/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg",
    category: "Front-end",
    link: "https://tailwindcss.com/docs",
  },
  {
    key: "6",
    name: "SASS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png",
    category: "Front-end",
    link: "https://sass-lang.com/install",
  },
  {
    key: "7",
    name: "Material CSS",
    image:
      "https://i.pinimg.com/originals/9a/86/59/9a86598cbbb0d691940725545a2eb505.png",
    category: "Front-end",
    link: "https://materializecss.com/getting-started.html",
  },
  {
    key: "8",
    name: "Type Script",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    category: "Front-end",
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    key: "9",
    name: "Nodejs",
    image:
      "https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/10/nodejs.png?fit=1240%2C700&ssl=1",
    category: "Back-end",
    link: "https://nodejs.org/en/",
  },
  {
    key: "10",
    name: "Ruby on rails",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--jvDLhx0b--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/cpcr5w0kgl6j94tss7n9.png",
    category: "Back-end",
    link: "https://rubyonrails.org/",
  },
  {
    key: "11",
    name: "Django",
    image:
      "https://twilio-cms-prod.s3.amazonaws.com/images/django-dark.width-808.png",
    category: "Back-end",
    link: "https://www.djangoproject.com/",
  },
  {
    key: "12",
    name: "Laravel",
    image:
      "https://cms-assets.tutsplus.com/uploads/users/769/posts/25334/preview_image/get-started-with-laravel-6-400x277.png",
    category: "Back-end",
    link: "https://laravel.com/docs/8.x",
  },
  {
    key: "13",
    name: ".net Core",
    image:
      "https://estradaci.com/wp-content/uploads/2019/04/asp-net-core-logo.png",
    category: "Back-end",
    link: "https://dotnet.microsoft.com/download",
  },
  {
    key: "14",
    name: "Codeigniter",
    image:
      "https://cms-assets.tutsplus.com/uploads/users/12/posts/14370/preview_image/codeIgniter.jpg",
    category: "Back-end",
    link: "https://codeigniter.com/download",
  },
  {
    key: "15",
    name: "MySQL",
    image: "https://itsilesia.com/wp-content/uploads/2018/11/mysql-logo.jpg",
    category: "DataBase",
    link: "https://www.mysql.com/downloads/",
  },
  {
    key: "16",
    name: "MongoDB",
    image:
      "https://developer-tech.com/wp-content/uploads/sites/3/2021/02/mongodb-atlas-google-cloud-partnership-nosql-databases-integrations-2.jpg",
    category: "DataBase",
    link: "https://docs.mongodb.com/manual/installation/",
  },
  {
    key: "17",
    name: "PostgreSQL",
    image:
      "https://www.aalpha.net/wp-content/uploads/2019/05/postgre-database-development-india.png",
    category: "DataBase",
    link: "https://www.postgresql.org/",
  },
  {
    key: "18",
    name: "MariaDB",
    image:
      "https://raw.githubusercontent.com/docker-library/docs/fe985dcb24154456254e252d1fa4a2b6b656ee80/mariadb/logo.png",
    category: "DataBase",
    link: "https://mariadb.org/download/",
  },
  {
    key: "19",
    name: "Oracle 12c",
    image: "https://cdn.beetechnical.com/uploads/2020/06/oracle_feature.jpg",
    category: "DataBase",
    link: "https://www.oracle.com/in/database/12c-database/",
  },
  {
    key: "20",
    name: "npm",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png",
    category: "Pakage Manager",
    link: "",
  },
  {
    key: "21",
    name: "yarn",
    image:
      "https://pbs.twimg.com/profile_images/778422085639032832/44mC-kJ3.jpg",
    category: "Pakage Manager",
    link: "",
  },
  {
    key: "22",
    name: "VS Code",
    image: "https://secrethub.io/img/vs-code.svg",
    category: "Text Editors",
    link: "https://code.visualstudio.com/",
  },
  {
    key: "23",
    name: "Vim",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/1200px-Vimlogo.svg.png",
    category: "Text Editors",
    link: "https://www.vim.org/",
  },
  {
    key: "24",
    name: "Atom",
    image:
      "https://seeklogo.com/images/A/atom-logo-19BD90FF87-seeklogo.com.png",
    category: "Text Editors",
    link: "https://atom.io/",
  },
  {
    key: "25",
    name: "Sublime Text",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d2/Sublime_Text_3_logo.png",
    category: "Text Editors",
    link: "https://www.sublimetext.com/download",
  },
  {
    key: "26",
    name: "Brackets",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brackets_Icon.svg/1200px-Brackets_Icon.svg.png",
    category: "Text Editors",
    link: "http://brackets.io/contribute.html",
  },
];

export default Tools;
